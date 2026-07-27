// resturantitems.js

// 🍽️ Services offered
import DineInImg from '../Images/ResturantImages/dinein.webp';
import OnlineOrderImg from '../Images/ResturantImages/onlineorder.webp';
import PrivateEventsImg from '../Images/ResturantImages/privateevents.webp';
import CateringservicesImg from '../Images/ResturantImages/cateringservices.webp';
import BulkordersImg from '../Images/ResturantImages/bulkorders.webp';
import TakeawayImg from '../Images/ResturantImages/takeaway.webp';

// 🌟 Restaurant highlights
import FreshIngredientsImg from '../Images/ResturantImages/freshingredients.webp';
import ExpertChefsImg from '../Images/ResturantImages/expertchefs.webp';
import PremiumQualityImg from '../Images/ResturantImages/premiumquality.webp';
import WarmHospitalityImg from '../Images/ResturantImages/warmhospitality.webp';


// 🍲 Styles of cuisine
import IndianImg from '../Images/ResturantImages/indiandish.webp';
import NorthIndianImg from '../Images/ResturantImages/northindianddish.webp';
import TandooriImg from '../Images/ResturantImages/tandooridish.webp';
import ChineseImg from '../Images/ResturantImages/chinesedish.webp';
import ContinentalImg from '../Images/ResturantImages/continentaldish.webp';
import ColdBeveragesImg from '../Images/ResturantImages/coldbreverages.webp';

const services = [
  {
    img: DineInImg,
    title: "Dine-In Experience",
    text: "Enjoy a warm and welcoming atmosphere with exceptional service, perfect for family meals, casual dining, and special occasions."
  },
  {
    img: OnlineOrderImg,
    title: "Online Ordering",
    text: "Order your favorite dishes online for quick pickup or doorstep delivery, prepared fresh and delivered with care."
  },
  {
    img: PrivateEventsImg,
    title: "Private Events & Group Dining",
    text: "Celebrate birthdays, anniversaries, corporate gatherings, and family functions with customized dining and reserved seating."
  },
  {
    img: CateringservicesImg,
    title: "Catering Services",
    text: "From weddings to corporate events, our catering services bring delicious food and professional service to every celebration."
  },
  {
    img: BulkordersImg,
    title: "Bulk Orders",
    text: "Planning an office lunch, school event, or family gathering? We prepare large food orders with the same quality and freshness."
  },
  {
    img: TakeawayImg,
    title: "Takeaway",
    text: "Enjoy restaurant-quality meals on the go with our fast, convenient, and carefully packed takeaway service."
  }
];


const highlights = [
  {
    img: FreshIngredientsImg,
    title: 'Fresh Ingredients',
    text: 'We carefully select fresh, high-quality ingredients to ensure every dish is flavorful, healthy, and satisfying.'
  },
  {
    img: ExpertChefsImg,
    title: 'Expert Chefs',
    text: 'Our experienced chefs blend traditional recipes with modern techniques to create unforgettable culinary experiences.'
  },
  {
    img: PremiumQualityImg,
    title: 'Premium Quality',
    text: 'Every dish is prepared with attention to detail, maintaining the highest standards of taste, hygiene, and presentation.'
  },
  {
    img: WarmHospitalityImg,
    title: 'Warm Hospitality',
    text: 'From the moment you arrive, our friendly team is dedicated to making your visit comfortable and enjoyable.'
  }
];



const styles = [
  {
    img: IndianImg,
    title: 'Indian',
    text: 'We understand your business goals and create a clear digital strategy that supports long-term growth and measurable success.'
  },
  {
    img: NorthIndianImg,
    title: 'North Indian',
    text: 'Our modern, intuitive, and responsive designs deliver engaging user experiences that reflect your brand and captivate your audience.'
  },
  {
    img: TandooriImg,
    title: 'Tandoori',
    text: 'We help strengthen your online presence through SEO-friendly solutions and digital experiences that attract and engage customers.'
  },
  {
    img: ChineseImg,
    title: 'Chinese',
    text: 'Our commitment continues after launch with ongoing maintenance, updates, and dedicated technical support whenever you need it.'
  },
  {
    img: ContinentalImg,
    title: 'Continental',
    text: 'We embrace creativity and emerging technologies to deliver innovative solutions that keep your business ahead of the competition.'
  },
  {
    img: ColdBeveragesImg,
    title: 'Cold Beverages',
    text: 'Using the latest technologies, we build fast, secure, and scalable websites and applications designed for future growth.'
  }
];

export { services, highlights, styles };
