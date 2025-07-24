# Card-Portfolio 🃏

A minimalist interactive card component built with React, designed to be the perfect addition to your portfolio. This card features smooth animations that activate on hover and click, adding engaging interactions to showcase your content with style.

## 🚀 Features

- **Minimalist design** - Clean, simple, and focused on content
- **Interactive 3D effects** - Artificial 3D movement when hovering near card edges
- **Flip animation** - Click to rotate the card 180° revealing a back side with links
- **React component** - Easy to integrate and customize
- **Responsive** - Works across different screen sizes

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/Xmind404/Card-Portfolio.git
cd Card-Portfolio
npm install
npm install react-icons
npm run dev
```


🧩 Usage

Import the Card component and add it anywhere in your React app:

```React
import Card from './card.jsx';

function App() {
  return (
    <>
      <Card 
        img="https://avatars.githubusercontent.com/u/71905653"
        header="Franciszek Karbowniczek"
        languages={['C++', 'C', 'MySQL', 'Java', 'React', 'JavaScript', 'HTML', 'CSS', 'Python']}
        description={['Passion for clean code', 'drive to make an impact']}
        links={[
          { name: 'Instagram', url: 'https://www.instagram.com/karbowniczekfranciszek/', icon: 'instagram' },
          { name: 'LinkedIn', url: 'https://www.linkedin.com/in/franciszek-karbowniczek-60b507367/', icon: 'linkedin' },
          { name: 'GitHub', url: 'https://github.com/Xmind404', icon: 'github' }
        ]}
      />
    </>
  )
}

export default App
```


🎨 Customization

The card can be easily customized by modifying:

    Animations (speed, effects)

    Colors (background, text, accents)

    Content (images, text, links)

    Size and dimensions


🔧 Built With

    React

    Vite

    CSS Modules

    Framer Motion (for animations)

    
👨‍💻 Author

Franciszek Karbowniczek (aka Xmind 404)
