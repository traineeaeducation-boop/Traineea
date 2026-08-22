import bgImg from '../assets/portfolio11.jpeg';
import reviewOne from '../assets/reviewOne.png';
import portfolio1Img from '../assets/portfolio1.avif';
import portfolio2Img from '../assets/portfolio2.avif';
import portfolio3Img from '../assets/portfolio3.avif';
import portfolio4Img from '../assets/portfolio4.avif';
import portfolio5Img from '../assets/portfolio5.avif';
import portfolio6Img from '../assets/portfolio6.avif';
import portfolio7Img from '../assets/portfolio7.jpeg';
import portfolio8Img from '../assets/portfolio8.jpeg';
import portfolio9Img from '../assets/portfolio9.jpeg';
import portfolio10Img from '../assets/portfolio10.jpeg';
import testimonial2 from '../assets/testimonial2.png';
import testimonial3 from '../assets/testimonial3.png';
import aboutImg from '../assets/Yamuna Sani.png';


import {  FaLaptopCode,
  FaDesktop,
  FaGraduationCap,
  FaBook,
  FaCertificate,
  FaChalkboardTeacher, FaGoogle  , FaEnvelope, FaFacebook, FaHeart, FaImages, FaInstagram, FaMapMarkerAlt, FaPhoneAlt,FaWhatsapp ,FaPinterest, FaRing, FaYoutube } from 'react-icons/fa';


export const assets = {
  bgImg,
 reviewOne,
 aboutImg
}

export const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'services', label: 'Services' },
    { id: 'pricing', label: 'Packages' },
    { id: 'contact', label: 'Contact' }
  ]

export const stats = [
    { number: "12+", label: 'Years Experience' },
    { number: "2500+" , label: 'Students Trained' },
    { number: 8, label: 'Awards Won' },
    { number: "99%", label: 'Client Satisfaction' }
  ];


export const portfolioItems = [
  {
    id: 1,
    image: portfolio1Img,
    category: "classrooms",
    title: "Classroom"
  },
  {
    id: 2,
    image: portfolio2Img,
    category: "classrooms",
    title: "Classroom"
  },
  {
    id: 3,
    image: portfolio3Img,
    category: "classrooms",
    title: "Classroom"
  },
  {
    id: 4,
    image:portfolio4Img,
    category: "classroom",
    title: "Classroom"
  },
  {
    id: 5,
    image: portfolio5Img,
    category: "activity",
    title: "Activity Session"
  },
  {
    id: 6,
    image: portfolio6Img,
    category: "classroom",
    title: "Classroom"
  },{
    id: 7,
    image: portfolio7Img,
    category: "practical",
    title: "Practical session"
  },{
    id: 8,
    image: portfolio8Img,
    category: "theory",
    title: "Theory Session"
  },{
    id: 9,
    image: portfolio9Img,
    category: "theory",
    title: "Theory Session"
  },
  {
    id: 10,
    image: portfolio10Img,
    category: "activity",
    title: "Activity Session"
  }
  
]

export const services = [
    {
      icon: FaBook,
      title: "Computer & IT Courses",
      description: "Practical courses covering computer fundamentals, office applications, programming, and essential digital skills.",
      features: ["Diploma in Computer Application", "Advance Diploma in Computer Application" , "Tally Prime", "Stenography"],
      color: "gold"
    },
    {
      icon: FaGraduationCap,
      title: "Professional & Career Training",
      description: "Job-focused training designed to build industry-relevant skills and prepare learners for career opportunities.",
      features: ["Job-Oriented Courses", "Industry-Relevant Skills", "Real-World Projects", "Practical Skill Development", "Future-Ready Skills"],
      color: "rose"
    },
    {
      icon:  FaLaptopCode,
      title: "Digital & Technical Skills",
      description: "Advanced training in areas such as web development, graphic design, digital marketing, and other in-demand technology skills.",
      features: ["Web Development", "Graphic Design", "Digital Marketing" , "Ai Courses"],
      color: "gold"
    }
  ]

  export const packages = [
    {
      name: "Graphics Designing",
      price: "₹49,999",
      description:  "Develop professional creative and design skills",
      features: [
        { text: "Flexible class timings", included: true },
      { text: "Industry-standard design software", included: true },
      { text: "Hands-on practical training", included: true },
      { text: "Final creative design project", included: true },
      { text: "Professional portfolio development", included: true },
      { text: "Completion certificate", included: true }
      ],
      featured: false,
      color: "gold"
    },
    {
      name: "Web Development",
      price: "₹49,999",
      description: " Build modern websites and web applications using Mern Stack",
      features: [
    { text: "Flexible class timings", included: true },
      { text: "Industry-standard tools & technologies", included: true },
      { text: "Hands-on practical training", included: true },
      { text: "Final real-world website project", included: true },
      { text: "Website deployment & hosting", included: true },
      { text: "Completion certificate", included: true }
      ],
      featured: true,
      color: "rose"
    },
    {
      name: "Digital Marketing",
      price: "₹49,999",
      description:  "Master digital marketing with practical strategies",
      features: [
         { text: "Flexible class timings", included: true },
      { text: "Industry-standard marketing tools", included: true },
      { text: "Hands-on practical training", included: true },
      { text: "Final digital marketing project", included: true },
      { text: "Real-world campaign experience", included: true },
      { text: "Completion certificate", included: true }
      ],
      featured: false,
      color: "gold"
    }
  ]


export const testimonials = [
    {
      name: "Nikita Parihar",
      date: "July 2026",
      avatar: reviewOne,
      quote: "It was a great experience learning here. The faculty is friendly and always ready to solve doubts. I gained both theoretical and practical knowledge. The institute provides good..."
    },
    {
      name: "Vinayak Zinta",
      date: "A year ago",
      avatar: testimonial2,
      quote: "Excellent institute with experienced faculty! The hands-on training and personalized attention helped me gain practical skills. Highly recommended! Best decision I made..."
    },
    {
      name: "Antra Soni",
      date: "3 years ago",
      avatar: testimonial3,
      quote: "I'm student of this institution and I can say that this is one of the best institute in Shimla. The environment here is so friendly and healthy. One can learn here without any difficulties and pressure..."
  }]

export  const faqs = [
    {
      question:"Which courses do you offer?",
      answer: "We offer a wide range of courses from basic to advanced levels, including DCA, PGDCA, Steno, Tally and many more."
    },
    {
      question: "Are the courses suitable for beginners?",
      answer: "Yes! most of our programs are designed for beginners, topics explained step by step before moving to advanced topics."
    },
    {
      question: "Do you provide job assistance and internship opportunities?",
      answer: "Yes! We provide job assistance and internship guidance to help students gain practical experience and  build their skills."
    }
  ]

export const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Institute Location",
      details: ["Traineea Education", "Sanjauli, Shimla"]
    },
    {
      icon: FaPhoneAlt,
      title: "Call Us",
      details: ["+91 9736340442", "Mon-Sat: 8:30am-6:30pm"]
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      details: ["traineeaeducation@gmail.com", "Response within 24 hours"]
    }
  ]


export const quickLinks = [
    { label: 'Home', section: 'home' },
    { label: 'About', section: 'about' },
    { label: 'Portfolio', section: 'portfolio' },
    { label: 'Services', section: 'services' },
    { label: 'Packages', section: 'pricing' }
  ]

export const serviceLinks = [
    { label: 'Popular Courses', section: 'pricing' },
    { label: 'Student Reviews', section: 'testimonials' },
    { label: 'Courses Pricing', section: 'pricing' },
    { label: 'About Us', section: 'portfolio' },
    { label: 'Contact', section: 'contact' }
  ]

export const socialLinks = [
    { icon: FaInstagram , href: 'https://www.instagram.com/traineeaeducation/?hl=en' },
    { icon: FaFacebook, href: 'https://www.facebook.com/traineeaeducationprivatelimited/' },
    { icon: FaWhatsapp, href: 'https://web.whatsapp.com/' },
    { icon:  FaGoogle , href: 'https://share.google/xPHhNuNsE6BdKm11W' }
  ]
