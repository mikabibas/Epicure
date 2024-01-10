const CONTACT_US = "Contact Us";
const TERM_OF_USE = "Term of Use";
const PRIVACY_POLICY = "Privacy Policy";
const PLACEHOLDER_SERACH_INPUT = "Search for restaurant, cuisine, chef";
const RESTAURANTS = "Restaurants";
const CHEFS = "Chefs";
const TEXT_LOGO = "epicure";
const HERO_TEXT = "Epicure works with the top chef restaurants in Tel Aviv";
const POPULAR_RESTAURANTS = "Popular restaurants in epicure:";
const SIGNATURE_DISH = "signature dish of:";
const MEANING_ICONS = "the meaning of our icons:";
const SPICY = "spicy";
const VEGETERIAN = "Vegeterian";
const VEGAN = "vegan";

//FOOD IMAGES
const PANCAKES_IMG = "assets/images/food/pancakes.webp";
const CHICKEN_WRAP_IMG = "assets/images/food/chicken_wrap.webp";
const CHICKEN_IMG = "assets/images/food/chicken.jpeg";
const PIZZA_IMG = "assets/images/food/classic-cheese-pizza.jpg";
const DUMPLING_IMG = "assets/images/food/dumpling.jpeg";
const HAMBURGER_IMG = "assets/images/food/Hamburger-and-french-fries.webp";
const MAC_CHEESE_IMG = "assets/images/food/mac_and_cheese.jpeg";
const MEATBALLS_IMG = "assets/images/food/meatballs.jpeg";
const PASTA_IMG = "assets/images/food/pasta.jpeg";
const PECAN_PIE_IMG = "assets/images/food/pecan_pie.webp";
const RECTANGULAR_PIZZA_IMG = "assets/images/food/rectangular_pizza.jpeg";
const SALMON_SALAD_IMG = "assets/images/food/salmon_salad.jpeg";

//slider settings
const SLIDER_SETTINGS = {
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: false,
  arrows: false,
  infinite: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

// chef
const CHEF_PARAGRAPH =
  "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.";
const CHEF_NAME = "Yossi Shitrit";
const CHEF_WEEK = "chef of the week:";
const CHEF_RESTAURANTS = "Yossi's Restaurants";

// about-us
const ABOUT_TITLE = "About Us:";
const ABOUT_PARAGRAPH1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non eu ipsum. Cras porta malesuada eros, eget blanditturpis suscipit at.  Vestibulum sed massa in magna sodales porta.  Vivamus elit urna, dignissim a vestibulum.";
const ABOUT_PARAGRAPH2 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no eu ipsum. Cras porta malesuada eros.";

//buttons text
const DWN_ON = "Download on the";
const APP_STORE = "App Store";
const GT_ON = "Get it on";
const GOOGLE_PLAY = "Google Play";

export {
  CONTACT_US,
  TERM_OF_USE,
  PRIVACY_POLICY,
  PLACEHOLDER_SERACH_INPUT,
  RESTAURANTS,
  CHEFS,
  TEXT_LOGO,
  HERO_TEXT,
  PANCAKES_IMG,
  CHICKEN_IMG,
  CHICKEN_WRAP_IMG,
  PIZZA_IMG,
  DUMPLING_IMG,
  HAMBURGER_IMG,
  MAC_CHEESE_IMG,
  MEATBALLS_IMG,
  PASTA_IMG,
  PECAN_PIE_IMG,
  RECTANGULAR_PIZZA_IMG,
  SALMON_SALAD_IMG,
  POPULAR_RESTAURANTS,
  SIGNATURE_DISH,
  MEANING_ICONS,
  SPICY,
  VEGAN,
  VEGETERIAN,
  SLIDER_SETTINGS,
  CHEF_PARAGRAPH,
  CHEF_NAME,
  CHEF_WEEK,
  CHEF_RESTAURANTS,
  ABOUT_PARAGRAPH1,
  ABOUT_PARAGRAPH2,
  ABOUT_TITLE,
  DWN_ON,
  GT_ON,
  GOOGLE_PLAY,
  APP_STORE,
};
