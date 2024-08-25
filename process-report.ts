import * as fs from 'fs/promises'
import * as path from 'path'

async function processContreExpertise() {
  const rawFilePath = path.join(__dirname, 'src', 'contre-expertise', 'raw.md')
  const processedFilePath = path.join(
    __dirname,
    'src',
    'contre-expertise',
    'processed.mdx',
  )

  try {
    // Read the contents of the raw file
    const rawContent = await fs.readFile(rawFilePath, 'utf-8')

    // Write the contents to the processed file
    await fs.writeFile(processedFilePath, rawContent)

    console.log('Contre-expertise processing completed successfully.')
  } catch (error) {
    console.error('Error processing contre-expertise:', error)
  }
}

processContreExpertise()
