import { nanoid } from "nanoid";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaJava,
  FaGithub,
  FaDocker,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiSpring,
  SiSpringboot,
  SiChakraui,
  SiHibernate,
} from "react-icons/si";
import ContentfulImg from "./assets/Contentful.png";
import MixMasterImg from "./assets/MixMaster.png";
import UnsplashImg from "./assets/UnsplashImages.png";
import mycomfystore from "./assets/mycomfystore.png";
import Instagram_Clone from "./assets/Instagram_Clone.png";

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
  {
    id: nanoid(),
    title: "Java",
    icon: <FaJava className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in Java programming, skilled at building scalable, high-performance applications with a strong understanding of object-oriented principles.",
  },
  {
    id: nanoid(),
    title: "Spring",
    icon: <SiSpring className="h-16 w-16 text-emerald-500" />,
    text: "Experienced with the Spring Framework, adept at creating robust backend systems and enterprise-level applications using Spring’s core features, including dependency injection, security, and data management.",
  },
  {
    id: nanoid(),
    title: "Spring Boot",
    icon: <SiSpringboot className="h-16 w-16 text-emerald-500" />,
    text: "Specialized in Spring Boot, capable of rapidly developing production-ready, stand-alone applications with minimal setup and configuration.",
  },
  {
    id: nanoid(),
    title: "Chakra UI",
    icon: <SiChakraui className="h-16 w-16 text-emerald-500" />,
    text: "Skilled in utilizing Chakra UI to build accessible, responsive, and customizable user interfaces with a focus on simplicity and ease of use.",
  },
  {
    id: nanoid(),
    title: "GitHub",
    icon: <FaGithub className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in using GitHub for version control, collaboration, and project management, ensuring efficient code sharing and team coordination.",
  },
  {
    id: nanoid(),
    title: "Docker",
    icon: <FaDocker className="h-16 w-16 text-emerald-500" />,
    text: "Experienced in containerizing applications with Docker, enabling consistent development, testing, and production environments for scalable and isolated application deployment.",
  },
  {
    id: nanoid(),
    title: "Databases",
    icon: <FaDatabase className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in database management and optimization for full-stack development, with expertise in SQL, PostgreSQL, and MySQL to ensure seamless integration between front-end and back-end, efficient data handling, and high-performance application functionality.",
  },
  {
    id: nanoid(),
    title: "Hibernate",
    icon: <SiHibernate className="h-16 w-16 text-emerald-500" />,
    text: "Experienced in using Hibernate for efficient ORM (Object-Relational Mapping), enabling seamless interaction between Java applications and relational databases, with a focus on data consistency, performance optimization, and simplified database management.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: Instagram_Clone,
    url: "https://instagram-clone-frontend-mtnr.onrender.com",
    github: "https://github.com/pallavipagoti/Instagram-Clone-Backend.git",
    title: "Instagram-Clone",
    text: "This project is a clone of Instagram where in I have implemented features like login,register,create posts,modify details in the profile,like and comment posts and many more.I have used spring boot for the backend to create api end points for comments, posts, users and many more.",
  },
  {
    id: nanoid(),
    img: mycomfystore,
    url: "https://mycomfyfurniture.netlify.app",
    github: "https://github.com/pallavipagoti/comfystore.git",
    title: "My Comfy Furniture",
    text: "This project is a complete furniture store website where in I have added features like login, register, checkout and using the API we can also retrieve the placed orders.",
  },
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
