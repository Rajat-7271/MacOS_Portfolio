const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Achievements & Certifications", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: false,
    },
];

const blogPosts = [
    {
        id: 1,
        date: "2025",
        title: "Google Gen AI Event",
        image: "/images/achievement1.png",
        description:
            "Participated in the Google Gen AI event, gaining exposure to generative AI technologies and workflows.",
    },
    {
        id: 2,
        date: "2025",
        title: "Ethical Hacking Workshop",
        image: "/images/achievement2.png",
        description:
            "Completed a professional workshop covering cybersecurity fundamentals and ethical security practices.",
    },
    {
        id: 3,
        date: "Ongoing",
        title: "Data Structures & Algorithms Practice",
        image: "/images/achievement3.png",
        description:
            "Solved 200+ coding problems across platforms, strengthening problem-solving and algorithmic thinking.",
    },
];


const techStack = [

    {
        category: "Programming Languages",
        items: ["C++", "Python", "JavaScript"],
    },
    {
        category: "Web Technologies",
        items: ["HTML", "CSS", "EJS", "React", "Bootstrap"],
    },
    {
        category: "Backend & Databases",
        items: ["Node.js", "Express.js", "MySQL"],
    },
    {
        category: "Tools & Platforms",
        items: ["Git", "GitHub"],
    },
    {
        category: "Other Skills",
        items: ["Responsive Web Design", "DOM Manipulation", "REST APIs"],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/Rajat-7271",
    },
    {
        id: 2,
        text: "Platform",
        icon: "/icons/atom.svg",
        bg: "#4bcb63",
        link: "",
    },
    {
        id: 3,
        text: "Twitter/X",
        icon: "/icons/twitter.svg",
        bg: "#ff866b",
        link: "https://x.com",
    },
    {
        id: 4,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/in/rajat-bhakte/",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    {
        id: 1,
        img: "/images/gal1.png",
    },
    {
        id: 2,
        img: "/images/gal2.png",
    },
    {
        id: 3,
        img: "/images/gal3.png",
    },
    {
        id: 4,
        img: "/images/gal4.png",
    },
];

export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1
        {
            id: 5,
            name: "Restaurant Website",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5", // icon position inside Finder
            windowPosition: "top-[5vh] left-5", // optional: Finder window position
            children: [
                {
                    id: 1,
                    name: "Restaurant Website.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "The Restaurant Website is a visually appealing and modern platform designed to showcase a dining experience online.",
                        "Rather than just presenting information, it creates an inviting atmosphere with elegant visuals, smooth animations, and intuitive navigation.",
                        "Think of it like stepping into a beautifully designed restaurant—but through your screen.",
                        "It's built with clean design principles, ensuring responsiveness, user-friendly interaction, and an engaging overall experience."
                    ],
                },
                {
                    id: 2,
                    name: "restaurant.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://rajat-7271.github.io/restaurant-website/",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "restaurant.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-1.png",
                },
            ],
        },

        // ▶ Project 2
        {
            id: 6,
            name: "Business Portfolio Website",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 right-80",
            windowPosition: "top-[20vh] left-0",
            children: [
                {
                    id: 1,
                    name: "Business Portfolio Website.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "Business Portfolio Website is a clean and modern platform designed to present a professional identity online.",
                        "Instead of just displaying details, it highlights projects, skills, and achievements through structured layouts and smooth interactions.",
                        "Think of it like a digital personal brand—showcasing experience, creativity, and credibility in one place.",
                        "It's built with modern web technologies, ensuring fast performance, responsive design, and a polished visual experience."
                    ],
                },
                {
                    id: 2,
                    name: "Business Portfolio Website.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://rajat-7271.github.io/Business-Portfolio-Website/",
                    position: "top-20 left-20",
                },
                {
                    id: 4,
                    name: "business portfolio.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/project-2.png",
                },
            ],
        },

        // ▶ Project 3
        {
            id: 7,
            name: "GTA Inspired Website",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-80",
            windowPosition: "top-[38vh] left-4",
            children: [
                {
                    id: 1,
                    name: "GTA Website.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "GTA Website is a bold and immersive platform inspired by the iconic Grand Theft Auto aesthetic.",
                        "Instead of a typical static page, it delivers a dynamic experience with striking visuals, engaging animations, and interactive elements.",
                        "Think of it like stepping into the world of GTA—packed with attitude, style, and high-energy design.",
                        "It's built with modern frontend technologies, ensuring smooth performance, responsiveness, and a visually captivating interface."
                    ],
                },
                {
                    id: 2,
                    name: "GTA Website.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://gta-website-tau.vercel.app/",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "GTA Website.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-3.png",
                },
            ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/rajat.jpg",
        },
        {
            id: 2,
            name: "casual-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-28 right-72",
            imageUrl: "/images/rajat-2.png",
        },

        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "Meet the Developer Behind the Code",
            image: "/images/rajat.jpg",
            description: [
                "Hey! I’m Rajat 👋, a web developer passionate about crafting clean, modern, and engaging web experiences.",
                "I work with JavaScript, React, and Next.js—focusing on building interfaces that feel smooth, responsive, and intuitive.",
                "I care deeply about clean UI, thoughtful UX, and writing maintainable code.",
                "Beyond coding, I enjoy exploring new technologies, refining designs, and constantly pushing myself to improve 😄",
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-80",
            imageUrl: "/images/trash-2.png",
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: {isOpen: false, zIndex: INITIAL_Z_INDEX, data: null},
    contact: {isOpen: false, zIndex: INITIAL_Z_INDEX, data: null},
    resume: {isOpen: false, zIndex: INITIAL_Z_INDEX, data: null},
    safari: {isOpen: false, zIndex: INITIAL_Z_INDEX, data: null},
    photos: {isOpen: false, zIndex: INITIAL_Z_INDEX, data: null},
    terminal: {isOpen: false, zIndex: INITIAL_Z_INDEX, data: null},
    txtfile: {isOpen: false, zIndex: INITIAL_Z_INDEX, data: null},
    imgfile: {isOpen: false, zIndex: INITIAL_Z_INDEX, data: null},
};

export {INITIAL_Z_INDEX, WINDOW_CONFIG};