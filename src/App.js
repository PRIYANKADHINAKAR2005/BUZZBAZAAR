import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SideNavbar from './components/SideNavbar';
import Catlog from './components/Catlog';
import BasicInfo from './components/BasicInfo';
import Mackbookpro from './assets/Mackbook.jpg';
import iphone from './assets/iphone.webp';
import airpods from './assets/airpods.avif';
import ipad from './assets/ipad.png';
import AboutUsPage from './components/AboutUsPage';

import './App.css';

const App = () => {
  const [products] = useState([
    { id: 1, name: 'MacBook Pro M1', price: '$1200.50', image: Mackbookpro },
    { id: 2, name: 'iPhone 15 Pro', price: '$1200.50', image: iphone },
    { id: 3, name: 'AirPods (2nd generation)', price: '$169.87', image: airpods },
    { id: 4, name: 'iPad Pro 2 (2021)', price: '$550.70', image: ipad },
    { id: 5, name: 'iPhone 13 Pro Max', price: '$900.50', image: Mackbookpro },
    { id: 6, name: 'Apple Watch Ultra', price: '$399.65', image: Mackbookpro },
    
  ]);

  return (
    <div className="wrapper">
      <div className="app">
        <Navbar />
        <div className="content">
          <aside>
            <SideNavbar />
          </aside>
          <main>
            <BasicInfo />
            <Catlog products={products} />
          </main>
        </div>
        <AboutUsPage />
      </div>
    </div>
  );
};

export default App;
