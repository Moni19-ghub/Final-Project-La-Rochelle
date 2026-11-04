import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const inputFolder = 'public/images'
const outputFolder = 'public/images/optimized'

if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder, { recursive: true })
}

const files = fs.readdirSync(inputFolder)
  .filter((file) => /\.(jpg|jpeg|png)$/i.test(file))

for (const file of files) {
  const inputPath = path.join(inputFolder, file)
  const outputName = `${path.parse(file).name}.webp`
  const outputPath = path.join(outputFolder, outputName)

  await sharp(inputPath)
    .resize(1200, 1200, {
      fit: 'inside',
      withoutEnlargement: true
    })
    .webp({ quality: 75 })
    .toFile(outputPath)

  console.log(`Optimised: ${file} → ${outputName}`)
}

console.log('All images have been optimised!')