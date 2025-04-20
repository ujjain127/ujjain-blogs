# Ujjain Blogs - Modern React Blog Platform

A modern, responsive blog platform built with React, featuring a clean design and smooth animations. This platform showcases blog posts, projects, and personal information in an elegant and user-friendly interface.

![Ujjain Blogs Preview]

## 🚀 Features

- **Modern UI Design**: Clean and professional interface with smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Blog Posts**: 
  - Featured post section
  - Grid layout for recent posts
  - Category filtering
  - Author information with avatars
- **Project Showcase**:
  - Interactive project cards
  - Technology stack tags
  - Smooth hover animations
  - Image overlays
- **Dynamic Components**:
  - Category cards
  - Newsletter subscription
  - About page
  - Contact information

## 🛠️ Technologies Used

- React 19.1.0
- React Router DOM 7.5.1
- Modern CSS with CSS Variables
- CSS Grid and Flexbox
- CSS Animations and Transitions

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/ujjain127/ujjain-blogs.git
cd ujjain-blogs
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Build for production:
```bash
npm run build
```

## 🎨 Project Structure

```
ujjain-blogs/
├── public/
├── src/
│   ├── components/
│   │   ├── BlogCard.js
│   │   ├── BlogList.js
│   │   ├── Projects.js
│   │   ├── About.js
│   │   ├── Header.js
│   │   └── Newsletter.js
│   ├── images/
│   │   ├── blog images
│   │   └── avatars/
│   ├── App.js
│   ├── App.css
│   └── index.js
├── scripts/
│   └── download-images.js
└── package.json
```

## 🔧 Configuration

The project uses CSS variables for easy theme customization. You can modify the colors, spacing, and other visual properties in the `src/App.css` file:

```css
:root {
  --color-background: #fff;
  --color-text: #101828;
  --color-text-secondary: #667085;
  --color-border: #eaecf0;
  /* ... other variables */
}
```

## 📱 Responsive Design

The platform is fully responsive with breakpoints at:
- Mobile: < 768px
- Tablet: 768px - 1200px
- Desktop: > 1200px

## 🖼️ Images

The project includes a script to download placeholder images:
```bash
node scripts/download-images.js
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

- Ujjain S
- GitHub: [@yourusername](https://github.com/ujjain127)

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons and design inspiration from various sources
- React community for amazing tools and libraries

---

⭐️ If you like this project, please give it a star on GitHub!
