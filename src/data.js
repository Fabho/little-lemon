import {
  faFacebook,
  faXTwitter,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import salad from "../src/icons_assets/greek salad.jpg";
import bruschetta from "../src/icons_assets/bruchetta.jpg";
import lemonDessert from "../src/icons_assets/lemon dessert.jpg";

export const menuLinks = [
  { title: "Home", src: "/" },
  { title: "About", src: "/about" },
  { title: "Menu", src: "/menu" },
  { title: "Reservations", src: "/bookings" },
  { title: "Order online", src: "/order" },
  { title: "Login", src: "/login" },
];

export const contact = {
  address: "678 Pisa Ave, Chicago, IL 60611",
  phone: "(312) 593-2744",
  email: "customer@littlelemon.com",
};

export const socialMedia = [
  { title: "Facebook", icon: faFacebook, url: "https://www.facebook.com" },
  { title: "Twitter", icon: faXTwitter, url: "https://twitter.com" },
  { title: "Tiktok", icon: faTiktok, url: "https://www.tiktok.com" },
  { title: "Youtube", icon: faYoutube, url: "https://www.youtube.com" },
];

export const foodSpecials = [
  {
    title: "Greek Salad",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    price: "$12.99",
    cardImage: salad,
  },
  {
    title: "Bruschetta",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    price: "$5.99",
    cardImage: bruschetta,
  },
  {
    title: "Lemon Dessert",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    price: "$5.00",
    cardImage: lemonDessert,
  },
];
