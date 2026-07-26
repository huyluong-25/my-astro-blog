import sharp from 'sharp';

const inputPath = './public/plasma-mannequin.png';
const outputPath = './public/plasma-mannequin-alpha.png';

async function processImage() {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const maxVal = Math.max(r, g, b);
    
    // Background removal with smooth alpha anti-aliasing
    if (maxVal < 18) {
      data[i + 3] = 0; // 100% transparent
    } else if (maxVal < 45) {
      // Smooth alpha ramp for edge anti-aliasing
      data[i + 3] = Math.round(((maxVal - 18) / 27) * 255);
    }
  }

  await sharp(data, {
    raw: {
      width,
      height,
      channels
    }
  })
  .png()
  .toFile(outputPath);

  console.log('Done generating true alpha transparent PNG!');
}

processImage().catch(console.error);
