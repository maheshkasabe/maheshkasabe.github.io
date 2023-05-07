// Enter all your detials in this file
// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import js from "./assets/techstack/js.png";
import java from "./assets/techstack/java.png";
import react from "./assets/techstack/react.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import springboot from "./assets/techstack/springboot.png";
import python from "./assets/techstack/python.png";
import docker from "./assets/techstack/docker.png";
import kubernetes from "./assets/techstack/kubernetes.png";
import actions from "./assets/techstack/actions.png";
import jenekins from "./assets/techstack/jenekins.png";
import terraform from "./assets/techstack/terraform.png";
import mongodb from "./assets/techstack/mongodb.png";
import firebase from "./assets/techstack/firebase.png";
import aws from "./assets/techstack/aws.png";
import go from "./assets/techstack/go.png"

// Porject Images
import projectImage1 from "./assets/projects/project1.png";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.png";
import projectImage4 from "./assets/projects/project4.png";
import projectImage5 from "./assets/projects/project5.png";

// Enter your Personal Details here
export const personalDetails = {
  name: "Mahesh Kasbe",
  tagline: "I Code and Deploy stuff on Cloud",
  img: profile,
  about: `Mahesh is a passionate Open Source Contributor and DevOps Enthusiast, with extensive experience in Java and Golang. His curiosity and eagerness to learn have led him to explore various cloud native tools, which he enjoys sharing with others through his Personal Blog.

  Since his freshmen year, Mahesh has been contributing to the open source community, where he has gained valuable experience in Microservices and Systems Design. He is also adept at solving complex Data Structures and Algorithms questions, with a proven track record on platforms like Leetcode and Geeksforgeeks.
  
  Mahesh has a knack for explaining the underlying concepts of DevOps tools and System Design, which has made him a sought-after speaker at various conferences and meetups. He has also dabbled in Developer Advocacy and Software Engineering, where he has gained valuable experience and skills.
  
  Currently, Mahesh is seeking opportunities in roles such as Software Engineer, Developer Advocate or DevOps Engineer, where he can continue to contribute his expertise and passion for technology.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/maheshkasbe",
  github: "https://www.github.com/maheshkasabe",
  twitter: "https://twitter.com/maheshstwt",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Mentee",
    Company: `Google Summer of Code - NRNB`,
    Location: "Remote",
    Type: "Insternship",
    Duration: "May 2023 - Sept 2023",
  },
  {
    Position: "Open Source Developer",
    Company: `Tracetest - Kubeshop`,
    Location: "Remote",
    Type: "Insternship",
    Duration: "March 2023 - Dec 2023",
  },
  {
    Position: "Developer Advocate",
    Company: `Napptive`,
    Location: "Remote",
    Type: "Internship",
    Duration: "Jan 2023 - May 2023",
  },
  {
    Position: "Full Stack Developer",
    Company: `Mezchip`,
    Location: "Remote",
    Type: "Internship",
    Duration: "Aug 2022 - Oct 2022",
  },
  {
    Position: "Freelance Software Developer",
    Company: ``,
    Location: "Remote",
    Type: "Self-employed",
    Duration: "Aug 2021 - Jan 2022",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor of Science in Statistics ",
    Company: `University of Mumbai`,
    Location: "Mumbai",
    Type: "Full Time",
    Duration: "Aug 2021 - Aug 2024",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  java : java,
  python:python,
  springboot : springboot,
  js: js,
  react: react,
  postman: postman,
  npm: npm,
  kubernetes: kubernetes,
  docker:docker,
  actions: actions,
  jenekins : jenekins,
  terraform: terraform,
  mongodb: mongodb,
  firebase: firebase,
  aws: aws,
  go: go
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Bug Tracker(Microservice)",
    image: projectImage1,
    description: `A Microservices  Bug Tracker Application implemented using best Devops Practices .`,
    techstack: "SpringBoot , ELK , RabbitMQ , ReactJS , Docker , Kubernetes , Terraform , Argocd , Github-Actions , Javascript , Java  ",
    previewLink: "https://github.com/maheshkasabe/Microservice-Bug-Tracker",
    githubLink: "https://github.com/maheshkasabe/Microservice-Bug-Tracker",
  },
  {
    title: "K-Dash",
    image: projectImage2,
    description: `Build with React & JavaScript. Real-time Browser-based Monitoring of Your Kubernetes Cluster , Nodes with Kubernetes API.`,
    techstack: "Javascript , ReactJS , HTML , CSS , Kubernetes API , ChartJS ",
    previewLink: "https://user-images.githubusercontent.com/60398112/208110242-b3ecad1d-2a4e-4a4d-b79d-b3cc3c7e33ee.mp4",
    githubLink: "https://github.com/maheshkasabe/K-Dash",
  },
  {
    title: "Let's Meet (Devops)",
    image: projectImage3,
    description: `Let's Meet is a One-O-One Video calling application with some intigrated features such as Live Chatting and Sending invitation through Email`,
    techstack: "Node.js , ReactJS , Express , EmailJS , JavaScript , WebRTC , Socket.io",
    previewLink: "https://letsmeetapp.netlify.app/",
    githubLink: "https://github.com/maheshkasabe/Lets-Meet-Devops",
  },
  {
    title: "Coinbase",
    image: projectImage4,
    description: `Build with React, JavaScript, and Firebase. Real-time data from Coinranking API.`,
    techstack: "ReactJS, Firebase, ChartJS, Javascript, CoinStats API ",
    previewLink: "https://coinbase-c0f7f.web.app/",
    githubLink: "https://github.com/maheshkasabe/Coinbase",
  },
  {
    title: "Ecommerce",
    image: projectImage5,
    description: `An Ecommerce store made with ReactJS and Javascript and intigrated with stripe for payment gateway`,
    techstack: "React , Firebase , Stripe",
    previewLink: "https://ecommerce-6bffc.web.app/",
    githubLink: "https://github.com/maheshkasabe/Ecommerce",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "abc@gmail.com",
  phone: "+91 12345 67890",
};
