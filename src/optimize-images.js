const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminWebp = require('imagemin-webp');

const optimizeImages = async () => {
  const inputPath = 'src/components/images'; // adjust this based on your project structure
  const outputPath = 'public/images'; // adjust this based on your project structure

  const files = await imagemin([`${inputPath}/**/*.{jpg,png}`], {
    destination: outputPath,
    plugins: [
      imageminMozjpeg({ quality: 80 }),
      imageminPngquant({ quality: [0.6, 0.8] }),
    ],
  });

  console.log(`${files.length} images optimized!`);
};

optimizeImages();
