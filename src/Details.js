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

// Porject Images
import projectImage1 from "./assets/projects/project1.png";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.png";

// Enter your Personal Details here
export const personalDetails = {
  name: "Mahesh Kasbe",
  tagline: "I Code and Deploy stuff",
  img: profile,
  about: `I had always been excited to be tech guy which eventually made me a open-source contributor and devops engineer , i am learning system design and machine learning now with some touch of Data Structure and alogorithms`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/maheshkasbe",
  github: "https://www.github.com/mahesh-kasabe",
  twitter: "https://twitter.com/maheshstwt",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Developer",
    Company: `Company Name here`,
    Location: "Mumbai",
    Type: "Full Time",
    Duration: "Sep 2021 - Dec 2021",
  },
  {
    Position: "Internship",
    Company: `Company Name here`,
    Location: "Mumbai",
    Type: "Internship",
    Duration: "Sep 2021 - Dec 2021",
  },
  {
    Position: "Internship",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Internship",
    Duration: "Sep 2021 - Dec 2021",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor in Computer Science",
    Company: `SPIT`,
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
  aws: aws
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Bug Tracker(Microservice)",
    image: projectImage1,
    description: `A Microservices  Bug Tracker Application implemented using best Devops Practices .`,
    techstack: "SpringBoot , ELK , RabbitMQ , ReactJS , Docker , Kubernetes , Terraform , Argocd , Github-Actions , Javascript , Java  ",
    previewLink: "https://google.com",
    githubLink: "https://github.com/Mahesh-Kasabe/Microservice-Devops-Project",
  },
  {
    title: "K-Dash",
    image: projectImage2,
    description: `Build with React & JavaScript. Real-time Browser-based Monitoring of Your Kubernetes Cluster , Nodes with Kubernetes API.`,
    techstack: "Javascript , ReactJS , HTML , CSS , Kubernetes API , ChartJS ",
    previewLink: "https://google.com",
    githubLink: "https://github.com/Mahesh-Kasabe/K-Dash",
  },
  {
    title: "Let's Meet",
    image: projectImage3,
    description: `Let's Meet is a One-O-One Video calling application with some intigrated features such as Live Chatting and Sending invitation through Email`,
    techstack: "Node.js , ReactJS , Express , EmailJS , JavaScript , WebRTC , Socket.io",
    previewLink: "https://letsmeetapp.netlify.app/",
    githubLink: "https://github.com/Mahesh-Kasabe/LetsMeet",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "maheshkasbe010@gmail.com",
  phone: "+91 12345 67890",
};
