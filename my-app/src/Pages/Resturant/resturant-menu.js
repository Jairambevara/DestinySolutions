
import './resturant-homepage.css';
import React from 'react';
import {useState} from 'react';
import Menuitems from '../../models/Data/resturantitems.js';

function ResturantMenu() {

    const [veg, setVeg] = useState(false);
  return (
    <div className="Resturant-home-page">
      <nav className="homePage-navbar">
        <div className="navbar-brand">
            <a href="#home"><img src="/DSlogo.png" alt="DS logo" className="navbar-logo" /></a>
          <span>Destiny Restaurant</span>
        </div>

        <div className="navbar-links">
          <a href="/ResturantHome#specialties">Specialties</a>
          <a href="/ResturantHome#services">Services</a>
          <a href="/ResturantHome#menu">Cart  &#128722;</a>          
          <a href="/ResturantHome#about">Contact &#9742;</a>
          <span style={{width:'2rem',height:'2rem',borderRadius:'50%'}}><img src="/user.jpg" alt="Profile" style={{width:'100%',height:'100%',borderRadius:'50%'}} /></span>        </div>
      </nav>
      <div className="menu-settings" style={{backgroundColor:'#f0f0f0',padding:'1rem',borderRadius:'1rem',margin:'1rem',width:'95%',maxwidth:'1200px'}}>
        <h1 className="menu-settings-h1">filter req items from follwoing options</h1>
        <label style={{justifyContent:'flex-start',alignItems:'center',display:'flex',marginBottom:'1rem'}}><span style={{marginRight:'0.5rem'}}> Food Category: </span>
        <img src={veg ? "/veg.webp" : "/nonveg.webp"} alt="Veg Only" style={{width:'1.5rem',height:'1.5rem',marginRight:'0.5rem' ,}}  />
            Veg Only <input type="checkbox" style={{width:'1.5rem',height:'1.5rem'}} checked={veg} onChange={() => setVeg(!veg)}></input>
        
        </label>
        <input type='text' placeholder='Search for items' className='menu-settings-search' style={{padding:'0.5rem',borderRadius:'0.5rem',border:'1px solid #ccc',width:'200px'}} /> <span style={{width:'2rem',height:'2rem'}}>&#128269;</span>
      </div>
      <div className="menu-items" style={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:'1rem',width:'95%',maxWidth:'1200px'}}>
        {Menuitems.map((item) => (
            <article className="template-card resturant" key={item.name} style={{  border: '2px solid linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)' }}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
            </article>
          ))}
    </div>

    </div>
  );
}

export default ResturantMenu;
