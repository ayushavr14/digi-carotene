import app_custom from "../images/app-custom.png";
import premium_services from "../images/premium-services.png";
import secured_communication from "../images/secured-communication.png";
import white_label from "../images/white-label.png";
import Avatar from "../images/Avatar.png";
import msgSvg from "../images/msgSvg.svg";
import meetSvg from "../images/Subtract.svg";

export const features = [
  {
    title: "White-Labelled Communication Apps",
    para: "With a white labelled communication apps from aapoon, you can deploy the apps under your corporate name and brand it to meet your organisation's specific requirements.aapoon is the only company that offers this option to its customers, so they can own their data that is something not available with other platforms like WhatsApp, Telegram, etc.",
    image: white_label,
    color: "#ffb23f",
  },
  {
    title: "Premium Services",
    para: "Businesses that use our free app can request paid premium features, including customer feedback, verified users, straw polls, sentiment analysis, data-driven solutions, and insights. By upgrading to our premium features, businesses can increase their productivity and get a leg up on the competition.",
    image: premium_services,
  },
  {
    title: "Secured Communication Platforms",
    para: "aapoon provides a higher level of security than other social media and video conferencing apps on the market today. Our app features include phone verification, facial recognition, and unique secure tokens for meeting attendees.",
    image: secured_communication,
  },
  {
    title: "App customisation",
    para: "Our white labelling services also extend to customising the apps to better suit your needs. This way, you can get the most out of our services without having to compromise on quality or functionality.",
    image: app_custom,
  },
];

export const links = [
  {
    title: "Home",
    to: "/home",
  },
  {
    title: "Products",
    to: "/products",
    submenu: [
      {
        img:msgSvg,
        title: "aapoon messenger",
        to: "/aapoon_messenger",
      },
      {img:meetSvg,
        title: "aapoon meet",
        to: "/aapoon_meet",
      },
    ],
  },
  {
    title: "Solutions",
    to: "/solutions",
  },
  {
    title: "Resources",
    to: "/resources",
  },
  {
    title: "FAQs",
    to: "/faq",
  },
  {
    title: "Contact Us",
    to: "/contact_us",
  },
];

export const hero = {
  heading: "Most Secure Hierarchical Messaging & Video Conference Platform",
  para: "aapoon provides safe and secure team hierarchical messaging and video conference platforms for businesses, universities, non-profits, and political parties.",
};

export const testimonials = [
  {
    para: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etolore magna aliqua. Ut enim aniam, quis nostrud xercitation ullamco laboris nisi utip ex ea ore eu”",
    image: Avatar,
    name: "Olivia Rhye",
    username: "@olivia",
    designation: "Product Manager, Integrations",
    color: "#ffb23f",
  },
  {
    para: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etolore magna aliqua. Ut enim aniam, quis nostrud xercitation ullamco laboris nisi utip ex ea ore eu”",
    image: Avatar,
    name: "Olivia Rhye",
    username: "@olivia",
    designation: "Product Manager, Integrations",
    color: "#d94e4e",
  },
  {
    para: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etolore magna aliqua. Ut enim aniam, quis nostrud xercitation ullamco laboris nisi utip ex ea ore eu”",
    image: Avatar,
    name: "Olivia Rhye",
    username: "@olivia",
    designation: "Product Manager, Integrations",
    color: "#7d40df",
  },
];
