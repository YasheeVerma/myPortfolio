import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot, FaPython ,FaPhone} from 'react-icons/fa';

import profileImg from '../assets/profile2.jpg';
import projectImg1 from '../assets/pro1.png';
import projectImg2 from '../assets/proj2.png';
import projectImg3 from '../assets/proj3.png';



export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'html', 'CSS']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'MySQL']
  },
  
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub','Figma']
  }
];



export const projects = [
  {
    title: "Laptop Price Predictor",
    description: "A machine learning web app that predicts laptop prices based on specifications like brand, processor, RAM, storage, GPU, OS, and display. Built with Python, scikit-learn, and data preprocessing, the model powers a Streamlit/Flask interface for easy user input. Designed to help users make smarter purchase decisions",
    image: projectImg1,
    tech: ["Python", "scikit-learn", "Streamlit", "Machine Learning"],
    //icons: [FaPython,F ,FaReact, FaNodeJs, FaDatabase , FaStripe],
    // demo: "#",
    code: "https://github.com/YasheeVerma/laptop-price-predictor",
  },
  {
    title: "Razopay Clone",
    description: " A responsive Razorpay clone built with HTML, Tailwind CSS, and JavaScript, replicating the core design and features of the payment gateway. Includes checkout pages, payment UI, merchant dashboard, and smooth animations, showcasing front-end development and UI/UX skills.",
    image: projectImg2,
    tech: ["HTML", "CSS", "Tailwind", "JavaScript"],
    //icons: [FaReact, FaDatabase],
    //demo: "#",
    code: "https://github.com/YasheeVerma/RazoPayClone",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: projectImg3,/*need to complete*/ 
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Markdown"],
    //icons: [FaReact, FaCloud],
    //demo: "#",
    code: "#",
  },
 
];

export const educationData = [
  {
          
          school: "Medicaps University, Indore",
          date: "Aug 2022 - June 2026",
          grade: "8.66 CGPA",
          desc: "Pursuing B.Tech in Computer Science & Engineering from Medicaps University, Indore, with solid engineering fundamentals, problem-solving skills, and a passion for projects, internships, and teamworkk. ",
          degree: "B.Tech - Computer Science & Engineering",
          color: "purple"
  },
  {
         
        school: "Kendriya Vidyalaya, Rajgarh",
        date: "2022",
        grade: "92.21%",
        desc: "I completed my class 12 education from Kendriya Vidylaya, Rajgarh, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Physical Education.",
        degree: "CBSE(XII) - PCM",
        color: "purple"
      },
      {
       
        school: "Kendriya Vidyalaya, Rajgarh",
        date: "2020",
        grade: "85%",
        desc: "I completed my class 10 education from Kendriya Vidylaya, Rajgarh, under the CBSE board, where I studied Science, Social Science, Mathematics, English, Hindi.",
        degree: "CBSE(X)",
        color: "purple"
      },
];
export const workData = [
  {
    role: "Network Engineer",
    company: "Cisco Networking Academy",
    duration: "09 Jun, 2025 - 09 Jul, 2025",
    description:
      "I have done my in house internship in Cisco Networking Academy offered by Medicaps University,Indore. Where i develop strong foundation in networking concepts, including IP addressing, subnetting, cabling, and device configuration. Proficient in configuring and troubleshooting switches, routers, VLANs,inter-VLAN routing, STP/RSTP, EtherChannel, and wireless LANs. Skilled in advanced routing protocols (OSPF, EIGRP), network security (ACLs, NAT, VPNs), and enterprise network architecture",
    color: "purple"
  },
  // {
  //   role: "Web Developer",
  //   company: "Digital Solutions LLC",
  //   duration: "2018 - 2020",
  //   description:
  //     "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
  //   color: "pink"
  // },
  // {
  //   role: "Junior Developer",
  //   company: "StartUp Ventures",
  //   duration: "2016 - 2018",
  //   description:
  //     "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
  //   color: "blue"
  // }
];

