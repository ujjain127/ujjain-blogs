const https = require('https');
const fs = require('fs');
const path = require('path');

const images = {
  'featured-design': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1920&q=80',
  'ux-review': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
  'linear': 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
  'api-stack': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
  'grid-system': 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
  'dev-tools': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
  'react-learning': 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
  'side-projects': 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80',
  'portfolio': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  'task-manager': 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80',
  'code-library': 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80',
  'placeholder': 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'
};

const avatars = {
  'olivia-rhye': 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80',
  'phoenix-baker': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80',
  'lana-steiner': 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
  'default-avatar': 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80'
};

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        const writeStream = fs.createWriteStream(filepath);
        res.pipe(writeStream);
        writeStream.on('finish', () => {
          writeStream.close();
          resolve();
        });
      } else {
        reject(`Failed to download ${url}`);
      }
    }).on('error', reject);
  });
};

async function downloadAllImages() {
  // Create directories if they don't exist
  const dirs = ['src/images', 'src/images/avatars'];
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });

  // Download main images
  for (const [name, url] of Object.entries(images)) {
    const filepath = path.join('src/images', `${name}.jpg`);
    console.log(`Downloading ${name}...`);
    await downloadImage(url, filepath);
  }

  // Download avatars
  for (const [name, url] of Object.entries(avatars)) {
    const filepath = path.join('src/images/avatars', `${name}.jpg`);
    console.log(`Downloading avatar for ${name}...`);
    await downloadImage(url, filepath);
  }

  console.log('All images downloaded successfully!');
}

downloadAllImages().catch(console.error); 