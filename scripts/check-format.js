import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const rootDirectory = process.cwd()
const directoriesToCheck = ['src', 'test', 'scripts']

async function collectJavaScriptFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name)

    if (entry.isDirectory()) {
      files.push(...await collectJavaScriptFiles(entryPath))
    } else if (entry.isFile() && entry.name.endsWith('.js')) {
      files.push(entryPath)
    }
  }

  return files
}

function relativePath(filePath) {
  return path.relative(rootDirectory, filePath) || filePath
}

function checkContent(content, filePath) {
  const violations = []
  const displayPath = relativePath(filePath)

  if (content.length > 0 && !content.endsWith('\n')) {
    violations.push(`${displayPath}: missing final newline`)
  }

  const lines = content.split(/\r?\n/)
  lines.forEach((line, index) => {
    if (/^[ \t]*\t/.test(line)) {
      violations.push(`${displayPath}:${index + 1}: tab used for indentation`)
    }
  })

  return violations
}

async function main() {
  const files = []

  for (const directory of directoriesToCheck) {
    files.push(...await collectJavaScriptFiles(path.join(rootDirectory, directory)))
  }

  const violations = []

  for (const filePath of files) {
    const content = await readFile(filePath, 'utf8')
    violations.push(...checkContent(content, filePath))
  }

  if (violations.length > 0) {
    for (const violation of violations) {
      console.error(violation)
    }
    console.error(`Format check failed: ${violations.length} violation(s).`)
    process.exitCode = 1
    return
  }

  console.log(`Format check passed: ${files.length} JavaScript file(s) checked.`)
}

try {
  await main()
} catch (error) {
  console.error(`Format check could not complete: ${error.message}`)
  process.exitCode = 1
}
