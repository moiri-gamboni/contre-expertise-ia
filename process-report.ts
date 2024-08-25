import fs from 'fs'
import path from 'path'

const inputPath = path.join(__dirname, 'src', 'contre-expertise', 'raw.md')
const outputPath = path.join(
  __dirname,
  'src',
  'contre-expertise',
  'processed.mdx',
)
const metadataPath = path.join(
  __dirname,
  'src',
  'contre-expertise',
  'metadata.json',
)
const resumePath = path.join(__dirname, 'src', 'contre-expertise', 'resume.mdx')

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

  // Extract the title (first second-level heading) and remove it
  const titleRegex = /^## (.+)$/m
  const titleMatch = content.match(titleRegex)
  let title = ''
  if (titleMatch) {
    title = titleMatch[1]
    // Remove the title from the content using the same regex
    content = content.replace(titleRegex, '')
  }

  // Extract the executive summary
  const resumeRegex = /^## Résumé Exécutif\n([\s\S]*?)(?=\n## )/m
  const resumeMatch = content.match(resumeRegex)
  let resume = ''
  if (resumeMatch) {
    resume = resumeMatch[1].trim()
    // Remove the executive summary from the main content
    content = content.replace(resumeRegex, '')
  }

  // Remove the Table of Contents section
  const tocRegex = /^## Table des matières\n([\s\S]*?)(?=\n## )/m
  content = content.replace(tocRegex, '')

  // Create metadata object
  const metadata = { title }

  // Write metadata to JSON file
  fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2))

  // Write the executive summary to resume.mdx
  fs.writeFileSync(resumePath, resume)

  // Trim any extra whitespace
  content = content.trim()

  // Add the import statements at the beginning of the file
  content = imports + content

  // Write the processed contents to the processed.mdx file
  fs.writeFileSync(outputPath, content)

  console.log('Contre-expertise processed successfully!')
  console.log('Metadata extracted and saved.')
  console.log('Executive summary extracted and saved.')
  console.log('Table of Contents removed.')
} catch (error) {
  console.error('Error processing contre-expertise:', error)
}
