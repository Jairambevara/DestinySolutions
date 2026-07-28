// resturantitems.js

// 🍽️ Services offered
import RestaurantImg from '../Images/restaurant.webp';
import RetailstoreImg from '../Images/retailstore.webp';
import PharmacyImg from '../Images/pharmacy.webp';
import SchoolImg from '../Images/school.webp';
import SalonImg from '../Images/salon.webp';
import GymImg from '../Images/gym.webp';
import CafeImg from '../Images/cafe.webp';

// 🌟 featuresData
import StrategyImg from '../Images/strategy.webp';
import DesignImg from '../Images/design.webp';
import DevelopmentImg from '../Images/development.webp';
import MarketingImg from '../Images/marketing.webp';
import SupportImg from '../Images/support.webp';
import InnovationImg from '../Images/Innovation.webp';


// 🛠️ Services
import WebsiteDevImg from '../Images/website-development.webp';
import MobileAppDevImg from '../Images/mobile-app-development.webp';
import CustomSolutionsImg from '../Images/custom-business-solutions.webp';
import MaintenanceSupportImg from '../Images/maintenance-support.webp';

const TemplatesData = [
  {
    img: RestaurantImg,
    title: "Restaurant",
    url:"/ResturantHome"
  },
  {
    img: RetailstoreImg,
    title: "Retail Store",
    url:"/ResturantHome"
  },
  {
    img: PharmacyImg,
    title: "Pharmacy",
  },
  {
    img: SchoolImg,
    title: "School",
  },
  {
    img: SalonImg,
    title: "Salon",
    url: "/salon"
  },
  {
    img: GymImg,
    title: "Gym",
  },
  {
    img: CafeImg,
    title: "Cafe",
  },
  {
    img: CafeImg,
    title: "Meat Shop",
  }
]




const featuresData = [
  {
    img: StrategyImg,
    title: "Strategy",
    text: "We understand your business goals and create a clear digital strategy that supports long-term growth and measurable success."
  },
  {
    img: DesignImg,
    title: "Design",
    text: "Our modern, intuitive, and responsive designs deliver engaging user experiences that reflect your brand and captivate your audience."
  },
  {
    img: DevelopmentImg,
    title: "Development",
    text: "Using the latest technologies, we build fast, secure, and scalable websites and applications designed for future growth."
  },
  {
    img: MarketingImg,
    title: "Marketing",
    text: "We help strengthen your online presence through SEO-friendly solutions and digital experiences that attract and engage customers."
  },
  {
    img: SupportImg,
    title: "Support",
    text: "Our commitment continues after launch with ongoing maintenance, updates, and dedicated technical support whenever you need it."
  },
  {
    img: InnovationImg,
    title: "Innovation",
    text: "We embrace creativity and emerging technologies to deliver innovative solutions that keep your business ahead of the competition."
  }
];




const servicesData = [
  {
    img: WebsiteDevImg,
    title: "Website Development",
    text: "We design and develop modern, responsive websites that strengthen your brand, engage your audience, and help your business grow online."
  },
  {
    img: MobileAppDevImg,
    title: "Mobile App Development",
    text: "From business apps to customer-facing mobile solutions, we build intuitive, high-performance applications for Android and cross-platform devices."
  },
  {
    img: CustomSolutionsImg,
    title: "Custom Business Solutions",
    text: "Every business has unique needs. We create tailored digital solutions that streamline operations, improve efficiency, and support your long-term goals."
  },
  {
    img: MaintenanceSupportImg,
    title: "Maintenance & Support",
    text: "Our partnership continues after launch with regular updates, security improvements, performance optimization, and reliable technical support."
  }
];


export { TemplatesData, featuresData, servicesData };
