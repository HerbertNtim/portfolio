import {Knust, alleAi } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Kwame Nkrumah University of Science and Technology",
        company_name: "Bsc. Computer Engineering",
        icon: Knust,
        iconBg: "#accbe1",
        date: "September 2020 - September 2024",
        points: [
            "My degree program in computer engineering provided me with a comprehensive understanding of both hardware and software aspects of computer systems.",
            "Throughout my program, I delved into a wide range of subjects, including digital logic design, microprocessor architecture, operating systems, algorithms, and programming languages.",
            "My program encouraged critical thinking, problem-solving, and teamwork, preparing me to collaborate effectively with professionals from different disciplines in the ever-evolving technology industry.",
            " As a computer engineering student, I developed a strong foundation in the field and a passion for innovation, setting the stage for a rewarding career in the world of technology.",
        ],
    },
    {
        title: "Internship",
        company_name: "Alle-AI",
        icon: alleAi,
        iconBg: "#fbc3bc",
        date: "November 2023 - Present",
        points: [
            "Having the privilege of interning at Alle-AI, an exciting startup company that is making waves in the world of artificial intelligence.",
            "Alle-AI is an all-in-one AI platform that empowers users to harness the power of multiple state-of-the-art Generative AI models simultaneously.",
            "I am exposed to a dynamic and innovative environment where cutting-edge AI technologies were being developed and refined.",
            "Working at Alle-AI is an eye-opening experience, as I witness firsthand the rapid advancements in AI and its practical applications.",
            "I am having the opportunity to collaborate with a talented team of engineers and researchers, and I am involved in researching that contributed to the continuous improvement of the platform. It is a fantastic learning opportunity, and I gaining valuable insights into the AI industry's future and the transformative potential of AI technology."
        ],
    },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#b7e4c7",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/HerbertNtim',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://linkedin.com/in/herbertntim',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Evently Booking PlatForm',
        description: 'Developed a web application that Streamlined user management via Clerk. Comprehensive functionality for creating, reading, updating, and deleting events, granting users complete control over event management. Smooth and secure payment transactions using Stripe, enhancing user experience during the checkout process. Quick and efficient search functionality for orders, facilitating easy tracking and management.',
        link: 'https://github.com/HerbertNtim/evently-app',
        live: 'https://evently-app-ivory.vercel.app'
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Infinity Animation Scrolling',
        description: 'Created a server action to get scrolling on animated movie.',
        link: 'https://github.com/HerbertNtim/anime-infinity-scroll',
        live: 'https://anime-infinity-scroll.vercel.app/'
    },
    // {
    //     iconUrl: car,
    //     theme: 'btn-back-blue',
    //     name: 'Car Finding App',
    //     description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    //     link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    // },
    // {
    //     iconUrl: snapgram,
    //     theme: 'btn-back-pink',
    //     name: 'Full Stack Instagram Clone',
    //     description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    //     link: 'https://github.com/adrianhajdin/social_media_app',
    // },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];