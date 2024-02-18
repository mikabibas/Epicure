const API_URL = "http://localhost:9090/api";

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
const VEGETARIAN = "Vegetarian";
const VEGAN = "vegan";
const NO_RESTAURANT_FOUND_TEXT = "No restaurants found";

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
        centerMode: true,
        centerPadding: "20%",
      },
    },
  ],
};

// chef
const CHEF_PARAGRAPH =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in egestas diam. In eget consequat elit. Nunc et facilisis leo, quis placerat nisi. Donec imperdiet rutrum tortor eget pharetra. Donec nec ipsum mattis, ornare erat eu, sagittis lacus. Aenean egestas quam magna, sed consequat ipsum suscipit in. Nam blandit varius neque.";
const CHEF_NAME = "Yossi Shitrit";
const CHEF_WEEK = "chef of the week:";
const CHEF_RESTAURANTS = "'s Restaurants";

// about-us
const ABOUT_TITLE = "About Us:";
const ABOUT_PARAGRAPH1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non eu ipsum. Cras porta malesuada eros, eget blandit turpis suscipit at.  Vestibulum sed massa in magna sodales porta.  Vivamus elit urna, dignissim a vestibulum.";
const ABOUT_PARAGRAPH2 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no eu ipsum. Cras porta malesuada eros.";

//buttons text
const DWN_ON = "Download on the";
const APP_STORE = "App Store";
const GT_ON = "Get it on";
const GOOGLE_PLAY = "Google Play";

// restaurants page navigation
const ALL = "All";
const NEW = "New";
const MOST_POP = "Most Popular";
const OPEN_NOW = "Open Now";
const MAP_VIEW = "Map View";
const MOST_VIEWED = "Most Viewed";
const NAV_OPTIONS = ["All", "New", "Most Popular", "Open Now"];
const RES_NAV_OPTIONS = ["Breakfast", "Lunch", "Dinner"];

const CHEF_FILTERS = [
  { path: "/chefs/all", label: ALL },
  { path: "/chefs/new", label: NEW },
  { path: "/chefs/most-viewed", label: MOST_VIEWED },
];

const START_DATE = "2020-01-01";
const END_DATE = "2024-01-01";

// Modal
const ADD_TO_CART = "Add to Cart";
const QTY = "Quantity";
const WHITE_BREAD = "White bread";
const NO_PNTS = "Without peanuts";
const LESS_SPICY = "Less spicy";
const CHANGES = "Changes";
const CHOOSE_SIDE = "Choose side";
const STICKY_RICE = "Sticky rice";

const TXTAREA_PLACEHOLDER =
  "Special requests, allergies, detary restrictions, etc.";
const CHECKOUT = "Checkout";
const ORDER_HISTORY = "Order History";
const YOUR_ORDER = "Your Order";
const NO_RESTAURANT_DISPLAY = "No restaurants to display";

export {
  API_URL,
  CONTACT_US,
  TERM_OF_USE,
  PRIVACY_POLICY,
  PLACEHOLDER_SERACH_INPUT,
  RESTAURANTS,
  CHEFS,
  TEXT_LOGO,
  HERO_TEXT,
  POPULAR_RESTAURANTS,
  SIGNATURE_DISH,
  MEANING_ICONS,
  SPICY,
  VEGAN,
  VEGETARIAN,
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
  ALL,
  NEW,
  MOST_POP,
  MAP_VIEW,
  OPEN_NOW,
  CHEF_FILTERS,
  START_DATE,
  END_DATE,
  NAV_OPTIONS,
  RES_NAV_OPTIONS,
  NO_RESTAURANT_FOUND_TEXT,
  ADD_TO_CART,
  QTY,
  WHITE_BREAD,
  NO_PNTS,
  LESS_SPICY,
  CHANGES,
  CHOOSE_SIDE,
  STICKY_RICE,
  TXTAREA_PLACEHOLDER,
  CHECKOUT,
  ORDER_HISTORY,
  YOUR_ORDER,
  NO_RESTAURANT_DISPLAY,
};
