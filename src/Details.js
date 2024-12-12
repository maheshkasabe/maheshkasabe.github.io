// Enter all your detials in this file
// Profile Image
import profile from "./assets/profile.png";

// Porject Images
import projectImage1 from "./assets/projects/project1.png";
import projectImage2 from "./assets/projects/project2.png";
import projectImage3 from "./assets/projects/project3.png";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.png";
import projectImage6 from "./assets/projects/project6.png"; 
import projectImage7 from "./assets/projects/project7.png";
import projectImage8 from "./assets/projects/project8.png";

// Enter your Personal Details here
export const personalDetails = {
  name: "Mahesh",
  tagline: "I turn ideas into real life products.",
  img: profile,
  about: `Mahesh is an open-source contributor and DevOps enthusiast skilled in Java, Golang, and cloud-native tools. He seeks roles in Software Engineering.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/maheshkasbe",
  github: "https://www.github.com/maheshkasabe",
  twitter: "https://twitter.com/mhshx_",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Software Development Engineer",
    Company: `Immersive Engineering`,
    Location: "Remote",
    Type: "Full time",
    Duration: "Nov 2024 - Present",
  },
  {
    Position: "Intern",
    Company: `Linux Foundation Mentorship - OpenKruise`,
    Location: "Remote",
    Type: "Internship",
    Duration: "Sept 2023 - Nov 2023",
  },
  {
    Position: "Intern",
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
    Duration: "Aug 2021 - Aug 2025",
  },
];

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Starta",
    image: projectImage8,
    description: `Starts is a platfrom where you can create your saas application within a month.`,
    techstack: "NextJs , Typescript, TailwindCSS",
    previewLink: "https://startaapp.sbs/",  
    githubLink: "https://github.com/maheshkasabe/",
  },
  {
    title: "SaasLauncher",
    image: projectImage1,
    description: `SaasLauncher is a platfrom where you can launch your SaaS application in a few clicks.`,
    techstack: "NextJs , Typescript , Stripe , NextAuth , Nextra , TailwindCSS",
    previewLink: "https://saas-launcher.vercel.app/",  
    githubLink: "https://github.com/maheshkasabe/Saas_Launcher",
  },
  {
    title: "DevopsToChat",
    image: projectImage2,
    description: `DevopsToChat is a chat application where you can chat with your cloud providers, CI/CD pipelines and DevOps tools.`,
    techstack: "NextJs , Typescript , Stripe , NextAuth , Nextra , TailwindCSS",
    previewLink: "https://devops-to-chat.vercel.app/",  
    githubLink: "https://github.com/maheshkasabe/devopstochat",
  },
  {
    title: "Bug Tracker(Microservice)",
    image: projectImage3,
    description: `A Microservices  Bug Tracker Application implemented using best Devops Practices .`,
    techstack: "SpringBoot , ELK , RabbitMQ , ReactJS , Docker , Kubernetes , Terraform , Argocd , Github-Actions , Javascript , Java  ",
    previewLink: "https://github.com/maheshkasabe/Microservice-Bug-Tracker",
    githubLink: "https://github.com/maheshkasabe/Microservice-Bug-Tracker",
  },
  {
    title: "K-Dash",
    image: projectImage4,
    description: `Build with React & JavaScript. Real-time Browser-based Monitoring of Your Kubernetes Cluster , Nodes with Kubernetes API.`,
    techstack: "Javascript , ReactJS , HTML , CSS , Kubernetes API , ChartJS ",
    previewLink: "https://user-images.githubusercontent.com/60398112/208110242-b3ecad1d-2a4e-4a4d-b79d-b3cc3c7e33ee.mp4",
    githubLink: "https://github.com/maheshkasabe/K-Dash",
  },
  {
    title: "Let's Meet (Devops)",
    image: projectImage5,
    description: `Let's Meet is a One-O-One Video calling application with some intigrated features such as Live Chatting and Sending invitation through Email`,
    techstack: "Node.js , ReactJS , Express , EmailJS , JavaScript , WebRTC , Socket.io",
    previewLink: "https://letsmeetapp.netlify.app/",
    githubLink: "https://github.com/maheshkasabe/Lets-Meet-Devops",
  },
  {
    title: "Coinbase",
    image: projectImage6,
    description: `Build with React, JavaScript, and Firebase. Real-time data from Coinranking API.`,
    techstack: "ReactJS, Firebase, ChartJS, Javascript, CoinStats API ",
    previewLink: "https://coinbase-c0f7f.web.app/",
    githubLink: "https://github.com/maheshkasabe/Coinbase",
  },
  {
    title: "Ecommerce",
    image: projectImage7,
    description: `An Ecommerce store made with ReactJS and Javascript and intigrated with stripe for payment gateway`,
    techstack: "React , Firebase , Stripe",
    previewLink: "https://ecommerce-6bffc.web.app/",
    githubLink: "https://github.com/maheshkasabe/Ecommerce",
  },
];
