import fs from 'fs'
import path from 'path'

const inputPath = path.join(__dirname, 'src', 'contre-expertise', 'raw.md')
const outputPath = path.join(
  __dirname,
  'src',
  'contre-expertise',
  'processed.mdx',
)

const imports = `import { Sidenote } from '@/components/Sidenote'
import { ReportSection } from '@/components/ReportSection'

`

try {
  // Read the contents of the raw.md file
  let content = fs.readFileSync(inputPath, 'utf-8')

  // Remove the comment at the beginning
  content = content.replace(/^<!--[\s\S]*?-->/, '')

  // Remove the comment at the end and the footnotes section
  content = content.replace(/<!-- Footnotes[\s\S]*$/, '')

  // Trim any extra whitespace
  content = content.trim()

  // Add the import statements at the beginning of the file
  content = imports + content

  // Write the processed contents to the processed.mdx file
  fs.writeFileSync(outputPath, content)

  console.log('Contre-expertise processed successfully!')
} catch (error) {
  console.error('Error processing contre-expertise:', error)
}
