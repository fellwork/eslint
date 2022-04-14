import { mkdirSync, readFile, readFileSync, writeFileSync } from 'node:fs'
import { join, relative } from 'node:path'
import { argv } from 'node:process'

import { copy } from 'copy-template-dir'
import { info, success } from 'signale'

import { paramCase } from './param-case'
import { titleCase } from './title-case'
import { pascalCase } from './pascal-case'

const [execPath, filePath, name, description] = argv

const getKebabCase = (str: string) => paramCase(str)
const getTitleCase = (str: string) => titleCase(str)
const getPascalCase = (str: string) => pascalCase(str)

const { version } = JSON.parse(readFileSync(join(__dirname, '../lerna.json'), 'utf8'))
const kebab = getKebabCase(name)
const templateDir = join(__dirname, '../template-package')
const installDir = join(__dirname, '../packages', getKebabCase(name))
const tsconfig = join(__dirname, '../tsconfig.dev.json')

mkdirSync(installDir)

const createPackageVars = {
  executor: execPath,
  file: filePath,
  title: getTitleCase(name),
  kebab,
  description,
  version,
  pascal: getPascalCase(name),
}

copy(templateDir, installDir, createPackageVars, (err: unknown, created: any) => {
  if (err)
    throw err

  created.forEach(
    (file: any) => info(`Created ${relative(installDir, file)}`),
  )
  success(`Created package ${name}`)
})

readFile(tsconfig, 'utf8', (err: unknown, data: string) => {
  if (err)
    throw err

  const json = JSON.parse(data)

  json.references.push({
    path: `packages/${kebab}`,
  })

  writeFileSync(tsconfig, JSON.stringify(json, null, 2))

  success(`Updated ${tsconfig}`)
})
