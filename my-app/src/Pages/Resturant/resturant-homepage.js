
import './resturant-homepage.css';
import RestaurantImg1 from '../../models/ResturantDataBase/Images/ResturantImages/restauranthero.webp';
import RestaurantImg2 from '../../models/ResturantDataBase/Images/ResturantImages/restauranthero2.webp';
import UserLogo from '../../models/ResturantDataBase/Images/ResturantImages/user.jpg';
import { services, highlights, styles } from '../../models/ResturantDataBase/Data/resturantHomepageImages.js';
import DSLogo from '../../models/DestinySolutionsData/Images/DSLog.png'

function ResturantHome() {



  return (
    <div className="Resturant-home-page">
      <nav className="homePage-navbar">
        <div className="navbar-brand">
            <a href="/ResturantHome"><img src={DSLogo} alt="DS logo" className="navbar-logo" /></a>
          <span>Destiny Restaurant</span>
        </div>

        <div className="navbar-links">
          <a href="#specialties">Specialties</a>
          <a href="#services">Services</a>
          <a href="/ResturantMenu">Menu</a>          
          <a href="#about">Contact & About</a>
          <span style={{width:'2rem',height:'2rem',borderRadius:'50%'}}><img src={UserLogo} alt="Profile" style={{width:'100%',height:'100%',borderRadius:'50%'}} /></span>        </div>
      </nav>

      <div className="dashboard-card" id="home">
        <div className='hero-overlay'>
        <section className="Hero-image">
        <img src={RestaurantImg1} alt="Restaurant hero" style={{ maxHeight: '300px' ,objectFit:'fill'}} />
        <img src={RestaurantImg2} alt="Restaurant hero" style={{ maxHeight: '300px' ,objectFit:'fill'}} />
       </section>
        <section className="Hero-content">
            <h1 className="Hero-content-h1" >Welcome to Crimson Plate <br/> Serving authentic flavors and unforgettable dining experiences for over 25 years.</h1>
            <p className="Hero-content-p">Known for our handcrafted recipes, fresh ingredients, and warm hospitality, Crimson Plate has become a favorite destination for families, friends, and food lovers. Every dish is prepared with passion to deliver an experience worth remembering.   </p> 
        </section>
        </div>
   
      </div>
      <div className="dashboard-Ourspeciality-section" id="Specialties">
        <section className="Ourspeciality-content" style={{color:'#800000'}}>
            <p className="Ourspeciality-content-p"> <span style={{fontSize: '1.5rem', color: '#800000'}}>&#9884;</span>  Destiny Resturants <span style={{fontSize: '1.5rem', color: '#800000'}}>&#9884;</span>  </p>
            <h1 className="Ourspeciality-content-h1" style={{marginTop:0,textDecoration: 'underline'}}> Our Speciality</h1>           
      </section>
      {/* <section className="Hero-image"> */}
     <section className="styles-section">
        <h2 className="styles-title">We provide a wide range of cuisines and dishes to choose from so that every foodie in town has their best experience with us.</h2>
        <div className="hero-grid-styles">
          {styles.map((item) => (
            <article className="hero-style-card" key={item.title} style={{ border: '2px solid linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)' }}>
              <img src={item.img} alt={item.title} className="hero-style-card-image" />
              <h3 className="hero-style-title">{item.title}</h3>
              {/* <p>{item.text}</p> */}
            </article>
          ))}
        </div>
      </section>
      </div>
      <div className="template-section" id="services">
        <section className="template-content">
        <h1 className="template-content-h1" style={{ marginTop: 0 }}>
        Explore Our Services
        </h1>

        <p className="template-content-p">
        From traditional favorites to international delights, our menu celebrates a variety of cuisines prepared with passion and served with excellence.
        </p>
      </section>
      <section className="template-grid-section">
        <div className="template-grid">
          {services.map((item) => (
            <article className="template-card resturant" key={item.title} style={{  border: '2px solid linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)' }}>
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
      </section>
      </div>
      <div className="services-section" id="about">
        <section className="services-content">
        <h1 className="services-content-h1" style={{ marginTop: 0 }}>
             Why Choose Us
        </h1>
        <p className="services-content-p">
                Every meal is prepared with care, combining fresh ingredients, experienced chefs, and exceptional hospitality to create a memorable dining experience.
        </p>
      </section>
      <section className="services-section-grid">
          {highlights.map((item) => (
            <article className="services" key={item.title} style={{  border: '2px solid deg, #0f172a 0%, #1e3a8a 100%)' }}>
              <img src={item.img} alt={item.title}  />
                <div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
                </div>

            </article>
          ))}
       
      </section>
      </div>
      <div className="footer-section" id="contact" >
        <section className="footer-content">
        <img src={DSLogo} alt="DS logo" style={{ maxHeight: '150px' , background: '#ffffff',borderRadius: '50%' , border: '5px solid goldenrod' }} />
<h1 className="footer-content-h1" style={{ marginTop: 0 }}>
  A Taste You'll Always Remember
</h1>

<p className="footer-content-p">
  Every dish is crafted with fresh ingredients, authentic flavors, and a
  passion for excellence, creating moments worth sharing with family and
  friends.
</p>
      </section>
      <div className="footer-divider" />
      <section className="footer-details">
<div className="follow-us">
  <ul>
    <li><span className="footer-icon">📘</span><a href="https://www.facebook.com/destinysolutionsllc" target="_blank" rel="noopener noreferrer">Facebook</a></li>
    <li><span className="footer-icon">📷</span><a href="https://www.instagram.com/destinysolutionsllc/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
    <li><span className="footer-icon">💼</span><a href="https://www.linkedin.com/company/destinysolutionsllc/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li> 
    <li><span className="footer-icon">💬</span><a href="https://www.whatsapp.com/company/destinysolutionsllc/" target="_blank" rel="noopener noreferrer">WhatsApp</a></li> 
  </ul>
</div>
<div className="contact-us">
  <ul>
    <li><span className="footer-icon">📞</span>Phone : 9100958991</li>
    <li><span className="footer-icon">✉️</span>Email: info@destinyresturants.com</li>
    <li><span className="footer-icon">📞</span>Phone: kalayan 1122334455</li> 
    <li><span className="footer-icon">✉️</span>Email: kalayan@destinyresturants.com</li> 
  </ul>
</div>
<div className="Address">
  <div className="address-block">
    <h3>🏢 Office 1</h3>
    <p>123 Main Street, Suite 400<br />New York, NY 10001</p>
  </div>
  <div className="address-divider"></div>
  <div className="address-block">
    <h3>🏢 Office 2</h3>
    <p>456 Market Avenue, Floor 2<br />San Francisco, CA 94105</p>
  </div>
</div>
      </section>
      </div>
    </div>
  );
}

export default ResturantHome;
