// resturantitems.js

const menuItems = [
  // 🥦 VEG ITEMS
  { name: "Paneer Butter Masala", text: "Creamy paneer curry", price_inr: 250, image: "images/paneer_butter_masala.jpg", category: "Veg" },
  { name: "Veg Biryani", text: "Fragrant rice with vegetables", price_inr: 220, image: "images/veg_biryani.jpg", category: "Veg" },
  { name: "Dal Tadka", text: "Yellow lentils tempered with spices", price_inr: 150, image: "images/dal_tadka.jpg", category: "Veg" },
  { name: "Chole Bhature", text: "Spicy chickpeas with fried bread", price_inr: 200, image: "images/chole_bhature.jpg", category: "Veg" },
  { name: "Palak Paneer", text: "Spinach curry with paneer", price_inr: 240, image: "images/palak_paneer.jpg", category: "Veg" },
  { name: "Veg Fried Rice", text: "Chinese-style fried rice", price_inr: 180, image: "images/veg_fried_rice.jpg", category: "Veg" },

  // 🍗 NON-VEG ITEMS
  { name: "Chicken Biryani", text: "Spiced rice with chicken", price_inr: 320, image: "images/chicken_biryani.jpg", category: "Non Veg" },
  { name: "Mutton Curry", text: "Slow-cooked mutton curry", price_inr: 400, image: "images/mutton_curry.jpg", category: "Non Veg" },
  { name: "Fish Fry", text: "Crispy fried fish", price_inr: 280, image: "images/fish_fry.jpg", category: "Non Veg" },
  { name: "Egg Curry", text: "Boiled eggs in spicy gravy", price_inr: 180, image: "images/egg_curry.jpg", category: "Non Veg" },
  { name: "Chicken Kebab", text: "Grilled chicken skewers", price_inr: 280, image: "images/chicken_kebab.jpg", category: "Non Veg" },
  { name: "Prawn Masala", text: "Spicy prawn curry", price_inr: 350, image: "images/prawn_masala.jpg", category: "Non Veg" },

  // 🍰 DESSERTS
  { name: "Chocolate Brownie", text: "Rich chocolate dessert", price_inr: 150, image: "images/chocolate_brownie.jpg", category: "Dessert" },
  { name: "Cheesecake", text: "Creamy baked cheesecake", price_inr: 200, image: "images/cheesecake.jpg", category: "Dessert" },
  { name: "Fruit Salad", text: "Fresh seasonal fruits", price_inr: 120, image: "images/fruit_salad.jpg", category: "Dessert" },
  { name: "Rasgulla", text: "Soft spongy sweet balls", price_inr: 100, image: "images/rasgulla.jpg", category: "Dessert" },
  { name: "Gulab Jamun", text: "Fried dumplings in syrup", price_inr: 100, image: "images/gulab_jamun.jpg", category: "Dessert" },

  // 🍦 ICE CREAM
  { name: "Vanilla Ice Cream", text: "Classic vanilla scoop", price_inr: 80, image: "images/vanilla_ice_cream.jpg", category: "Ice Cream" },
  { name: "Chocolate Ice Cream", text: "Rich chocolate scoop", price_inr: 90, image: "images/chocolate_ice_cream.jpg", category: "Ice Cream" },
  { name: "Strawberry Ice Cream", text: "Fruity strawberry scoop", price_inr: 90, image: "images/strawberry_ice_cream.jpg", category: "Ice Cream" },
  { name: "Butterscotch Ice Cream", text: "Crunchy butterscotch scoop", price_inr: 100, image: "images/butterscotch_ice_cream.jpg", category: "Ice Cream" },
  { name: "Mango Ice Cream", text: "Seasonal mango scoop", price_inr: 110, image: "images/mango_ice_cream.jpg", category: "Ice Cream" },
  { name: "Black Currant Ice Cream", text: "Tangy black currant scoop", price_inr: 120, image: "images/blackcurrant_ice_cream.jpg", category: "Ice Cream" },

  // 🥤 COLD DRINKS
  { name: "Cold Coffee", text: "Refreshing chilled coffee", price_inr: 120, image: "images/cold_coffee.jpg", category: "Cold Drinks" },
  { name: "Lassi", text: "Sweet yogurt drink", price_inr: 100, image: "images/lassi.jpg", category: "Cold Drinks" },
  { name: "Mango Shake", text: "Fresh mango milkshake", price_inr: 130, image: "images/mango_shake.jpg", category: "Cold Drinks" },
  { name: "Lemon Soda", text: "Sparkling lemon drink", price_inr: 90, image: "images/lemon_soda.jpg", category: "Cold Drinks" },
  { name: "Iced Tea", text: "Chilled tea with lemon", price_inr: 110, image: "images/iced_tea.jpg", category: "Cold Drinks" },
  { name: "Coca Cola", text: "Classic fizzy drink", price_inr: 60, image: "images/coca_cola.jpg", category: "Cold Drinks" }
];

export default menuItems;
