import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import ContentfulImg from "./assets/Contentful.png";
import MixMasterImg from "./assets/MixMaster.png";
import UnsplashImg from "./assets/UnsplashImages.png";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Tailwind CSS",
    icon: <SiTailwindcss className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in Tailwind css, can style visually appealing and responsive websites using Tailwind css",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: ContentfulImg,
    url: "https://contentfulproject.netlify.app",
    github: "https://github.com/pallavipagoti/ContentfulProject.git",
    title: "Contentful CMS Project",
    text: "In this project I used a website called contentful to store my data about some of the basic projects.The most beneficial thing about this website is everytime we change the data we need not pull the data from github.We can simply modify the data in the website and netlify automatically updates it.",
  },
  {
    id: nanoid(),
    img: MixMasterImg,
    url: "https://mixingmaster.netlify.app",
    github: "https://github.com/pallavipagoti/MixMaster.git",
    title: "MixMaster project",
    text: "In MixMaster application users can search for drinks and find out more information about specific drinks.For drinks data I utilized a popular cocktail DB API.",
  },
  {
    id: nanoid(),
    img: UnsplashImg,
    url: "https://unsplashimagessearch.netlify.app/",
    github: "https://github.com/pallavipagoti/Unsplash-Images.git",
    title: "Unsplash Images project",
    text: "In this project I created a front end web application using react to search the images of the things we want.To do that I used the API of a website called Unsplash which provides a large collection of high-quality stock photos that are free to use. The Unsplash API is a service that allows developers to access and use Unsplash's collection of photos and related data in their own applications. The API allows developers to search, download, and use the photos in a variety of ways, such as creating photo galleries or integrating them into social media applications.  ",
  },
];
