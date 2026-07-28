
import './resturant-homepage.css';
import './resturant-menu.css';
import React, { useEffect } from 'react';
import {useState} from 'react';
import Menuitems from '../../models/ResturantDataBase/Data/resturantitems.js';
import Addicon from '../../models/ResturantDataBase/Images/ResturantMenuImages/addicon.webp';
import Vegicon from '../../models/ResturantDataBase/Images/ResturantMenuImages/veg.webp';
import Nonvegicon from '../../models/ResturantDataBase/Images/ResturantMenuImages/nonveg.webp';
import UserLogo from '../../models/ResturantDataBase/Images/ResturantImages/user.jpg';
import DSLogo from '../../models/DestinySolutionsData/Images/DSLog.png'


function ResturantMenu() {

    const [list ,setList] = useState(Menuitems)

    const [veg, setVeg] = useState(false);
    const [search,setSearch] = useState("");
    const [cartList , setCartList] = useState(null)

  const [priceRange, setPriceRange] = useState(null);
          const priceranges = [
  { label: "Less than 500", min: 0, max: 500 },
  { label: "500 - 1000", min: 501, max: 1000 },
  { label: "1001 - 2000", min: 1001, max: 2000 },
  { label: "2001 - 3000", min: 2001, max: 3000 },
  { label: "3001 - 5000", min: 3001, max: 5000 },
  { label: "Above 5000", min: 5001, max: Infinity }
];

  

  useEffect(() => {
    let filteredList = Menuitems;

    if (search) {
      filteredList = filteredList.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (veg) {
      filteredList = filteredList.filter(
        (item) => item.category.toLowerCase() === "veg"
      );
    }

    if (priceRange) {
      filteredList = filteredList.filter(
        (item) => item.price_inr >= priceRange.min && item.price_inr <= priceRange.max
      );
    }

    setList(filteredList);
  }, [search, veg, priceRange]);



  return (
    <div className="Resturant-home-page">
      <nav className="homePage-navbar">
        <div className="navbar-brand">
            <a href="/ResturantHome"><img src={DSLogo}  alt="DS logo" className="navbar-logo" /></a>
          <span>Destiny Restaurant</span>
        </div>

        <div className="navbar-links">
          <a href="/ResturantHome#specialties">Specialties</a>
          <a href="/ResturantHome#services">Services</a>
          <a href="/ResturantCart">Cart  &#128722;</a>          
          <a href="/ResturantHome#about">Contact &#9742;</a>
          <span style={{width:'2rem',height:'2rem',borderRadius:'50%'}}><img src={UserLogo} alt="Profile" style={{width:'100%',height:'100%',borderRadius:'50%'}} /></span>        </div>
      </nav>
      <div className="menu-settings" style={{backgroundColor:'#f0f0f0',padding:'1rem',borderRadius:'1rem',margin:'1rem',width:'95%',maxwidth:'1200px'}}>
        <h1 className="menu-settings-h1">filter req items from follwoing options</h1>
        <>
        <label style={{justifyContent:'flex-start',alignItems:'center',display:'flex',marginBottom:'1rem',gap:'1rem'}}>
            <span style={{marginRight:'0.5rem'}}> Food Category: </span>   <img src={veg ? Vegicon : Nonvegicon } alt="Veg Only" style={{width:'1.5rem',height:'1.5rem'}}  />

         Veg Only <input type="checkbox" style={{width:'1.5rem',height:'1.5rem'}} checked={veg} onChange={() => setVeg(!veg)}></input>
         <label >Price Range :</label>
        <select
        label='Select Price'
          onChange={(e) => {
            const selected = priceranges.find((range) => range.label === e.target.value);
            setPriceRange(selected || null);
          }}
          style={{ padding: "0.5rem", borderRadius: "0.5rem", border: "1px solid #ccc" }}
        >
          <option value="">All Prices</option>
          {priceranges.map((range) => (
            <option key={range.label} value={range.label}>
              {range.label}
            </option>
          ))}
        </select>
        </label>
       
        </>
        <input type='text' onChange={(e)=>setSearch(e.target.value)} placeholder='Search for items' className='menu-settings-search' style={{padding:'0.5rem',borderRadius:'0.5rem',border:'1px solid #ccc',width:'200px',margin:'0 1rem'}} />
      </div>
      <div className="menu-items" >
        {list.map((item) => (
            <article className="template-card resturant" key={item.name} style={{  border: '2px solid linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)' }}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <h3>Price:{item.price_inr}</h3>
              <button 
                onClick={() => {
                    setCartList((prev) => {
                        // check if item already exists in cart
                        const exists = prev.some((cartItem) => cartItem.name === item.name);
                        if (exists) {
                        return prev; // return unchanged
                        }
                        return [...prev, item]; // add new item
                    });
                }}>
                <img className='addicon' src={Addicon} alt="add"/></button>
              

            </article>
          ))}
    </div>

    </div>
  );
}

export default ResturantMenu;
