export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Approach", link: "#approach" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Interactive 3D Shirt Designer",
    des: "The Interactive 3D Shirt Designer enables users to customize shirts in real-time, offering color changes and logo placements with ease. Built using Three.js and React, this app provides a dynamic and user-friendly interface for designing unique apparel.",
    img: "/shirt.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/three.svg"],
    link: "https://github.com/AGPD47/Shirt",
  },
  {
    id: 2,
    title: "Metaverse",
    des: "Metaverse is an animated frontend website built with Next.js and React.js, featuring dynamic visual effects powered by Framer Motion. The site focuses on showcasing engaging and smooth animations to create an immersive user experience.",
    img: "/metaverse.png",
    iconLists: ["/next.svg", "/tail.svg", "/three.svg", "/stream.svg"],
    link: "https://github.com/AGPD47/Metaverse",
  },
  {
    id: 3,
    title: "AI Prompt Interactor",
    des: "AI Prompt Interactor is a web application built with React.js that allows users to interact with an AI model by entering prompts and viewing responses. The app uses the Gemini API for generating AI-driven answers and includes features for managing and tracking previous prompts and responses.",
    img: "/Ai.png",
    iconLists: ["/re.svg"],
    link: "https://github.com/AGPD47/gemini",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/apple.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/AGPD47/Apple-Website",
  },
];

export const testimonials = [
  {
    title: "Interactive Frontend Development",
    quote:
      "Specialize in crafting dynamic and interactive user interfaces using React, Next.js, and modern frontend technologies. I focus on creating seamless and responsive designs that enhance user engagement and provide a smooth browsing experience. Whether it's a single-page application or a complex web app, I ensure that every element functions intuitively and efficiently.",
  },
  {
    title: "Custom Animation Integration",
    quote:
      "Bring websites to life with advanced animations and transitions using Framer Motion and GSAP. I design and implement visually captivating animations that not only grab attention but also improve the overall user experience. From subtle transitions to complex interactive effects, I create animations that align with your brand's identity and objectives.",
  },
  {
    title: "Responsive Web Design",
    quote:
      "Design and develop responsive websites with Tailwind CSS and React to ensure optimal performance across all devices and screen sizes. I focus on creating adaptive layouts that provide a consistent and user-friendly experience, whether on mobile, tablet, or desktop. My approach ensures that your website looks and functions perfectly on any device.",
  },
  {
    title: "3D Web Experiences",
    quote:
      "Build immersive and interactive 3D web applications using Three.js. I create engaging 3D models and visualizations that enhance user interaction and provide unique visual experiences. Whether for product showcases or interactive web features, I deliver visually stunning 3D experiences that captivate and retain user interest.",
  },
  {
    title: "API Integration and Development",
    quote:
      "Expertly integrate third-party APIs into your projects to extend functionality and improve user experiences. I handle the complete API integration process, from connecting to external services to ensuring seamless data interactions. Additionally, I can develop custom APIs tailored to your specific needs, enhancing your application's capabilities and performance.",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
