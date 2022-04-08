import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineWhatsApp,
  AiOutlineInstagram,
} from "react-icons/ai";
import {
  BiBook,
  BiBriefcaseAlt2,
  BiMessageSquareDetail,
  BiSupport,
  BiMailSend,
} from "react-icons/bi";
import {
  FaAward,
  FaBriefcase,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import work1 from "../images/work1.jpg";
import work2 from "../images/work2.jpg";
import work3 from "../images/work3.jpg";
import work4 from "../images/work4.jpg";
import work5 from "../images/work5.jpg";

import testimonial1 from "../images/testimonial1.png";
import testimonial2 from "../images/testimonial2.png";
import testimonial3 from "../images/testimonial3.png";

export const nav = [
  {
    title: "home",
    icon: <AiOutlineHome />,
  },
  {
    title: "about",
    icon: <AiOutlineUser />,
  },
  {
    title: "experience",
    icon: <BiBook />,
  },
  {
    title: "service",
    icon: <BiBriefcaseAlt2 />,
  },
  {
    title: "contact",
    icon: <BiMessageSquareDetail />,
  },
];

export const socials = [
  {
    title: "facebook",
    icon: <FaFacebookF />,
    url: "https://www.facebook.com/",
  },
  {
    title: "instagram",
    icon: <FaInstagram />,
    url: "https://www.instagram.com/",
  },
  {
    title: "youtube",
    icon: <FaYoutube />,
    url: "https://www.youtube.com/",
  },
  {
    title: "github",
    icon: <FaGithub />,
    url: "https://www.github.com/",
  },
];

export const about_items = [
  {
    icon: <FaAward />,
    title: "Experience",
    details: "8 Years Working",
  },
  {
    icon: <FaBriefcase />,
    title: "Project",
    details: "48 + Projects",
  },
  {
    icon: <BiSupport />,
    title: "Support",
    details: "24/7 Online",
  },
];

export const skills = [
  {
    title: "Frontend",
    data: [
      {
        title: "HTML",
        level: "Basic",
      },
      {
        title: "CSS",
        level: "Advanced",
      },
      {
        title: "Bootstrap",
        level: "Intermediate",
      },
      {
        title: "Tailwind",
        level: "Intermediate",
      },
      {
        title: "JavaScript",
        level: "Intermediate",
      },
      {
        title: "React",
        level: "Intermediate",
      },
    ],
  },
  {
    title: "Backend",
    data: [
      {
        title: "PHP",
        level: "Intermediate",
      },
      {
        title: "Node Js",
        level: "Basic",
      },
      {
        title: "Python",
        level: "Intermediate",
      },
      {
        title: "MySQL",
        level: "Intermediate",
      },
      {
        title: "MongoDB",
        level: "Basic",
      },
    ],
  },
];

export const service = [
  {
    title: "Product Designer ",
    description:
      "Service with more than 3 years of experience. Providing quality work to clients and companies.",
    info: [
      "I develop the user interface.",
      "Web page development.",
      "I create ux element interactions.",
      "I position your company brand.",
      "Design and mockups of products for companies.",
    ],
  },
  {
    title: "Ui/Ux Designer",
    description:
      "Service with more than 3 years of experience. Providing quality work to clients and companies.",
    info: [
      "I develop the user interface.",
      "Web page development.",
      "I create ux element interactions.",
      "I position your company brand.",
      "Design and mockups of products for companies.",
    ],
  },
  {
    title: "Visual Designer",
    description:
      "Service with more than 3 years of experience. Providing quality work to clients and companies.",
    info: [
      "I develop the user interface.",
      "Web page development.",
      "I create ux element interactions.",
      "I position your company brand.",
      "Design and mockups of products for companies.",
    ],
  },
];

export const project = [
  {
    cat: "Web",
    title: "Web design",
    img: work1,
  },
  {
    cat: "Mobile",
    title: "Mobile App",
    img: work2,
  },
  {
    cat: "Branding",
    title: "Brand Design",
    img: work3,
  },
  {
    cat: "Web",
    title: "Web design",
    img: work4,
  },
  {
    cat: "Mobile",
    title: "Mobile App",
    img: work5,
  },
];

export const testimonial = [
  {
    name: "John Doe",
    pic: testimonial1,
    description:
      "A really good job, all aspects of the project were followed step by step and with good results.",
  },
  {
    name: "Paula Vusy",
    pic: testimonial2,
    description:
      "A really good job, all aspects of the project were followed step by step and with good results.",
  },
  {
    name: "Sara Cill",
    pic: testimonial3,
    description:
      "A really good job, all aspects of the project were followed step by step and with good results.",
  },
];

export const contactInfo = [
  {
    icon: <BiMailSend />,
    title: "Email",
    detail: "user@email.com",
    url: "mailto:examplemail@correo.com",
  },
  {
    icon: <AiOutlineWhatsApp />,
    title: "Whatsapp",
    detail: "999-9999-9999",
    url: "https://api.whatsapp.com/send?phone=51123456789&text=Hello, more information!",
  },
  {
    icon: <AiOutlineInstagram />,
    title: "Instagram",
    detail: "user123",
    url: "https://www.instagram.com/shresthapradhuman/",
  },
];
