import '../App.css';
import './dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-page">
      <nav className="dashboard-navbar">
        <div className="navbar-brand">
          <img src="/DSlogo.png" alt="DS logo" className="navbar-logo" />
          <span>Destiny Solutions</span>
        </div>

        <div className="navbar-links">
          <a href="#home" style={{border: '2px solid linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)'}}>Home</a>
          <a href="#templates">Templates</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div className="dashboard-card" id="home">
        <section className="Hero-content">
            <h1 className="Hero-content-h1" >Building Digital Experiences </h1>
            <h1 className="Hero-content-h2"> That Inspire Growth</h1>
            <p className="Hero-content-p">
                At Destiny Solutions, we help businesses establish a powerful online presence through modern websites, intuitive mobile applications, and innovative digital solutions. Whether you're launching a new venture or expanding an existing business, we're here to turn your vision into reality.
            </p>
            <p className="Hero-content-p"> we specialize in crafting innovative digital solutions that empower businesses to thrive in the digital landscape. Our team of experts is dedicated to delivering exceptional results, from stunning websites and mobile applications to comprehensive digital strategies. We are committed to helping our clients achieve their goals and drive sustainable growth through cutting-edge technology and creative design.</p>
      </section>
      <section className="Hero-image">
        <img src="/DSLog.png" alt="DS logo" style={{ maxHeight: '300px' }} />
      </section>
      </div>
      <div className="dashboard-WhyChooseus-section" id="about">
        <section className="Chooseus-content">
            <h1 className="Chooseus-content-h1" style={{marginTop:0}}> Why Choose Destiny?</h1>           
            <p className="Chooseus-content-p"> We build digital solutions designed to help businesses  grow with confidence.  </p>
      </section>
      {/* <section className="Hero-image"> */}
          <section className="feature-section">
        <h2 className="feature-title">Our Expertise</h2>
        <div className="hero-grid">
          {[
  {
    img: "/strategy.webp",
    title: "Strategy",
    text: "We understand your business goals and create a clear digital strategy that supports long-term growth and measurable success."
  },
  {
    img: "/design.webp",
    title: "Design",
    text: "Our modern, intuitive, and responsive designs deliver engaging user experiences that reflect your brand and captivate your audience."
  },
  {
    img: "/development.webp",
    title: "Development",
    text: "Using the latest technologies, we build fast, secure, and scalable websites and applications designed for future growth."
  },
  {
    img: "/marketing.webp",
    title: "Marketing",
    text: "We help strengthen your online presence through SEO-friendly solutions and digital experiences that attract and engage customers."
  },
  {
    img: "/support.webp",
    title: "Support",
    text: "Our commitment continues after launch with ongoing maintenance, updates, and dedicated technical support whenever you need it."
  },
  {
    img: "/innovation.webp",
    title: "Innovation",
    text: "We embrace creativity and emerging technologies to deliver innovative solutions that keep your business ahead of the competition."
  }

          ].map((item) => (
            <article className="hero-card" key={item.title} style={{  border: '2px solid linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)' }}>
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      </div>
      <div className="template-section" id="templates">
        <section className="template-content">
            <h1 className="template-content-h1" style={{marginTop:0}}> Explore Our Website Templates</h1>           
            <p className="template-content-p"> Browse professionally designed templates for different industries. Every template is fully responsive, customizable, and ready to represent your business online.  </p>
      </section>
      <section className="template-grid-section">
        <div className="template-grid">
          {[
  {
    img: "/restaurant.webp",
    title: "Restaurant",
  },
  {
    img: "/retailstore.webp",
    title: "Retail Store",
  },
  {
    img: "/pharmacy.webp",
    title: "Pharmacy",
  },
  {
    img: "/school.webp",
    title: "School",
  },
  {
    img: "/salon.webp",
    title: "Salon",
  },
  {
    img: "/gym.webp",
    title: "Gym",
  },
  {
    img: "/cafe.webp",
    title: "Cafe",
  },
  {
    img: "/meatshop.webp",
    title: "Meat Shop",
  }
].map((item) => (
            <article className="template-card" key={item.title} style={{  border: '2px solid linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)' }}>
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
      </section>
      </div>
      <div className="services-section" id="services">
        <section className="services-content">
            <h1 className="services-content-h1" style={{marginTop:0}}>Our Digital Services</h1>           
            <p className="services-content-p"> We build digital solutions tailored to your
business goals and future growth.  </p>
      </section>
      <section className="services-section-grid">
          {[
  {
    img: "/website-development.webp",
    title: "Website Development",
    text: "We design and develop modern, responsive websites that strengthen your brand, engage your audience, and help your business grow online."
  },
  {
    img: "/mobile-app-development.webp",
    title: "Mobile App Development",
    text: "From business apps to customer-facing mobile solutions, we build intuitive, high-performance applications for Android and cross-platform devices."
  },
  {
    img: "/custom-business-solutions.webp",
    title: "Custom Business Solutions",
    text: "Every business has unique needs. We create tailored digital solutions that streamline operations, improve efficiency, and support your long-term goals."
  },
  {
    img: "/maintenance-support.webp",
    title: "Maintenance & Support",
    text: "Our partnership continues after launch with regular updates, security improvements, performance optimization, and reliable technical support."
  }
].map((item) => (
            <article className="services" key={item.title} style={{  border: '2px solid linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)' }}>
              <img src={item.img} alt={item.title} />
                <div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
                </div>

            </article>
          ))}
       
      </section>
      </div>
      <div className="footer-section" id="contact">
        <section className="footer-content">
        <img src="/DSlogo.png" alt="DS logo" style={{ maxHeight: '150px' , background: '#ffffff',borderRadius: '50%' }} />
        <h1 className="footer-content-h1" style={{marginTop:0}}> Our Commitment to Your Success</h1>           
            <p className="footer-content-p"> We build digital solutions tailored to your
business goals and future growth.  </p>
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
    <li><span className="footer-icon">✉️</span>Email: info@destinysolutionsllc.com</li>
    <li><span className="footer-icon">📞</span>Phone: kalayan 1122334455</li> 
    <li><span className="footer-icon">✉️</span>Email: kalayan@destinysolutionsllc.com</li> 
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

export default Dashboard;
