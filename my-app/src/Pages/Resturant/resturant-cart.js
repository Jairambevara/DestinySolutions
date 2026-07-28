
import './resturant-cart.css'
import UserLogo from '../../models/ResturantDataBase/Images/ResturantImages/user.jpg';
import DSLogo from '../../models/DestinySolutionsData/Images/DSLog.png'


function ResturantCart() {



  return (
    <div className="Resturant-cart-page">
      <nav className="cartPage-navbar">
        <div className="navbar-brand">
            <a href="/ResturantHome"><img src={DSLogo} alt="DS logo" className="navbar-logo" /></a>
          <span>Destiny Restaurant</span>
        </div>

        <div className="navbar-links">
          <a href="/ResturantHome#specialties">Specialties</a>
          <a href="/ResturantHome#services">Services</a>      
          <a href="/ResturantHome#about">Contact &#9742;</a>
        <span style={{width:'2rem',height:'2rem',borderRadius:'50%'}}><img src={UserLogo} alt="Profile" style={{width:'100%',height:'100%',borderRadius:'50%'}} /></span>        </div>
      </nav>


    </div>
  );
}

export default ResturantCart;
