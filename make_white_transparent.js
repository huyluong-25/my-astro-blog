import sharp from 'sharp';

const inputPath = 'C:/Users/luong/.gemini/antigravity-ide/brain/fb763c69-85f3-4104-869e-7274a8297c4c/vespera_mannequin_white_bg_1785065406884.png';
const outputPath = './public/plasma-mannequin.png';

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
    const minVal = Math.min(r, g, b);
    
    // Background removal for pure white background (#ffffff)
    if (minVal > 242) {
      data[i + 3] = 0; // 100% transparent
    } else if (minVal > 200) {
      // Smooth alpha ramp for edge anti-aliasing around white background
      const alphaFraction = (242 - minVal) / 42;
      data[i + 3] = Math.round(alphaFraction * 255);
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

  console.log('Successfully generated clean 100% transparent PNG from white BG image!');
}

processImage().catch(console.error);
