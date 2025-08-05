import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  DougLarry,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  GidayMe,
  MayorBruce,
  JAY,
  Podium,
  YukiMe,
  image1,
  image2,
  image3,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "About",
    url: "#about",
  },
  // {
  //   id: "1",
  //   title: "The Problem",
  //   url: "#problem",
  // },
  {
    id: "2",
    title: "Outlook",
    url: "#outlook",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Donate",
    url: "/donate",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const DreamRisingServices = [
  "Advocacy Programs",
  "Vocational Training Programs",
  "Digital & Financial Literacy Workshops",
  "Transitional Housing",
  "First Time Home Buyer Training",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Pilot Program",
    text: "Launch a pilot program to provide justice-impacted, underserved, underserved, and immigrant individuals with access to essential services such as mindful education, employment assistance, housing resources, financial education and mental health support.",
    date: "2025",
    status: "progress",
    imageUrl: roadmap3,
    colorful: true,
  },
  {
    id: "1",
    title: "Generate actionable metrics",
    text: "We will gather and analyze key metrics to track progress, measure impact, and guide our efforts in empowering justice-impacted and underserved individuals to build sustainable futures.",
    date: "2025",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Healing Circle",
    text: "Create a supportive and community driven meeting where people can come together, heal and connect with us and each other in a positive and meaningful dialectic.",
    date: "2024",
    status: "done",
    imageUrl: roadmap3,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Holistic Empowerment Approach",
    text: "Rather than only meeting immediate needs, we aim to foster long-term self-sufficiency and empowerment, helping individuals build skills and confidence that last a lifetime.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: DougLarry,
  },
  {
    id: "1",
    title: "Community-Centric Solutions",
    text: "We prioritize community voices, ensuring our programs are tailored to the unique needs and aspirations of those we serve.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: GidayMe,
    light: true,
  },
  {
    id: "2",
    title: "Focus on Systemic Change",
    text: "We advocate for fairer policies and create pathways for underrepresented communities, working with government, businesses, and community organizations to change the systems that hold people back.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: MayorBruce,
  },
  {
    id: "3",
    title: "Personal Resilience and Transformation",
    text: "DreamRising was founded on personal experience with the justice system and empowerment challenges. Guided by firsthand insight into the barriers faced by justice-impacted individuals, our leadership drives our mission for change.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: JAY,
    light: true,
  },
  {
    id: "4",
    title: "Measurable Impact and Accountability",
    text: "We set clear, measurable goals and are committed to transparency.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: Podium,
  },
  {
    id: "5",
    title: "Attainable Transformation",
    text: "We collaborate with local employers, housing agencies, reentry programs, and mental health professionals, leveraging volunteers and community resources to deliver services effectively.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: YukiMe,
  },
];

export const socials = [
  // {
  //   id: "0",
  //   title: "Discord",
  //   iconUrl: discordBlack,
  //   url: "#",
  // },
  // {
  //   id: "1",
  //   title: "Twitter",
  //   iconUrl: twitter,
  //   url: "#",
  // },
  // {
  //   id: "2",
  //   title: "Instagram",
  //   iconUrl: instagram,
  //   url: "#",
  // },
  // {
  //   id: "3",
  //   title: "Telegram",
  //   iconUrl: telegram,
  //   url: "#",
  // },
  // {
  //   id: "4",
  //   title: "Facebook",
  //   iconUrl: facebook,
  //   url: "#",
  // },
];
