// resturantitems.js
import PaneerImage from '../Images/ResturantMenuImages/palakpaneer.webp';
import PaniPoori from '../Images/ResturantMenuImages/anipoori.webp';
import CholeBaturi from '../Images/ResturantMenuImages/cholebhature.jpg';
import Daltadka from '../Images/ResturantMenuImages/daltadka.jpg';
import Food from '../Images/ResturantMenuImages/food.webp';
import Palakpaneer from '../Images/ResturantMenuImages/palakpaneer.webp';
import PaneerButter from '../Images/ResturantMenuImages/paneerButtermasala.jpg';
import Vegbiryani from '../Images/ResturantMenuImages/vegbiryani.jpg';
import Vegrice from '../Images/ResturantMenuImages/vegrice.webp';




const menuItems = [
  // 🥦 VEG ITEMS
  { name: "Paneer Butter Masala", text: "Creamy paneer curry", price_inr: 450, image: PaneerImage, category: "Veg" },
  { name: "Veg Biryani", text: "Fragrant rice with vegetables", price_inr: 220, image: PaniPoori, category: "Veg" },
  { name: "Dal Tadka", text: "Yellow lentils tempered with spices", price_inr: 650, image: CholeBaturi, category: "Veg" },
  { name: "Chole Bhature", text: "Spicy chickpeas with fried bread", price_inr: 200, image: Daltadka, category: "Veg" },
  { name: "Palak Paneer", text: "Spinach curry with paneer", price_inr: 240, image: Vegbiryani, category: "Veg" },
  { name: "Veg Fried Rice", text: "Chinese-style fried rice", price_inr: 1180, image: Vegrice, category: "Veg" },

  // 🍗 NON-VEG ITEMS
  { name: "Chicken Biryani", text: "Spiced rice with chicken", price_inr: 320, image: Palakpaneer, category: "Non Veg" },
  { name: "Mutton Curry", text: "Slow-cooked mutton curry", price_inr: 4000, image: PaneerImage, category: "Non Veg" },
  { name: "Fish Fry", text: "Crispy fried fish", price_inr: 280, image: PaniPoori, category: "Non Veg" },
  { name: "Egg Curry", text: "Boiled eggs in spicy gravy", price_inr: 1840, image: CholeBaturi, category: "Non Veg" },
  { name: "Chicken Kebab", text: "Grilled chicken skewers", price_inr: 280, image: Daltadka, category: "Non Veg" },
  { name: "Prawn Masala", text: "Spicy prawn curry", price_inr: 850, image: Vegbiryani, category: "Non Veg" },

  // 🍰 DESSERTS
  { name: "Chocolate Brownie", text: "Rich chocolate dessert", price_inr: 650, image: Vegrice, category: "Dessert" },
  { name: "Cheesecake", text: "Creamy baked cheesecake", price_inr: 200, image: Food, category: "Dessert" },
  { name: "Fruit Salad", text: "Fresh seasonal fruits", price_inr: 5020, image: CholeBaturi, category: "Dessert" },
  { name: "Rasgulla", text: "Soft spongy sweet balls", price_inr: 1000, image: Daltadka, category: "Dessert" },
  { name: "Gulab Jamun", text: "Fried dumplings in syrup", price_inr: 100, image: PaneerButter, category: "Dessert" },

  // 🍦 ICE CREAM
  { name: "Vanilla Ice Cream", text: "Classic vanilla scoop", price_inr: 180, image: Vegbiryani, category: "Ice Cream" },
  { name: "Chocolate Ice Cream", text: "Rich chocolate scoop", price_inr: 290, image: Vegrice, category: "Ice Cream" },
  { name: "Strawberry Ice Cream", text: "Fruity strawberry scoop", price_inr: 590, image: PaniPoori, category: "Ice Cream" },
  { name: "Butterscotch Ice Cream", text: "Crunchy butterscotch scoop", price_inr: 1001, image: CholeBaturi, category: "Ice Cream" },
  { name: "Mango Ice Cream", text: "Seasonal mango scoop", price_inr: 2110, image: Daltadka, category: "Ice Cream" },
  { name: "Black Currant Ice Cream", text: "Tangy black currant scoop", price_inr: 3120, image: PaneerButter, category: "Ice Cream" },

  // 🥤 COLD DRINKS
  { name: "Cold Coffee", text: "Refreshing chilled coffee", price_inr: 8120, image: Vegrice, category: "Cold Drinks" },
  { name: "Lassi", text: "Sweet yogurt drink", price_inr: 100, image: Vegbiryani, category: "Cold Drinks" },
  { name: "Mango Shake", text: "Fresh mango milkshake", price_inr: 130, image: PaneerButter, category: "Cold Drinks" },
  { name: "Lemon Soda", text: "Sparkling lemon drink", price_inr: 5090, image: PaniPoori, category: "Cold Drinks" },
  { name: "Iced Tea", text: "Chilled tea with lemon", price_inr: 110, image: Daltadka, category: "Cold Drinks" },
  { name: "Coca Cola", text: "Classic fizzy drink", price_inr: 7060, image: Food, category: "Cold Drinks" }
];

export default menuItems;
