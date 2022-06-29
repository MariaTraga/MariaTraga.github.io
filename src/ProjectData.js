import unity_spacer from './images/unity_spacer.gif';
import unity_garden_gnomes from './images/unity_garden_gnome_tower_defense.gif';
import unity_laser_defender from './images/unity_laser_defender.gif';
import phone from './images/phone.png';
import email from './images/email.png';
import address from './images/address.png';
import linkedIn from './images/linkedin.png';
import github from './images/github.png';
import poketeam from './images/poketeam.PNG';
import backgroundgenerator from './images/backgroundgenerator.PNG';
import facefinder from './images/facefinder.PNG';
import astarminigame from './images/astarminigame.PNG';


export const projects = [
    
    {
        id: 1,
        name: "Lunar Tree - Master Thesis",
        img: "https://user-images.githubusercontent.com/73944909/176411289-c684cbfc-0de9-4c74-8439-80f10e3cf863.png",
        link: "https://github.com/MariaTraga/lunar-tree",
        description: "Master Thesis in Unity. The game features smart A.I. agents and farm management.",
        technologies:[
            "Unity",
            "C#",
            "Behaviour Trees"
        ]
    },
    {
        id: 2,
        name: "Face Finder",
        img: facefinder,
        link: "https://mariatraga.github.io/face-finder/",
        description: "Web app created using React. The app communicates with a backend server that handles API calls and authentication.",
        technologies:[
            "React",
            "Javascript",
            "Html",
            "CSS",
            "Express.js",
            "Node.js"
        ]
    },
    
    {
        id: 3,
        name: "My Portfolio",
        img: "https://user-images.githubusercontent.com/73944909/176410551-992f6fd2-2c11-4a04-8ceb-b0b4bc4d3f5c.png",
        link: "#",
        description: "This portfolio website was created using react.",
        technologies:
            [
                "React",
                "Javascript",
                "Html",
                "CSS"
            ]
    },
    {
        id: 4,
        name: "Poketeam",
        img: "https://user-images.githubusercontent.com/73944909/176219668-ab43b18d-37d1-48d0-a4d2-1b290b066cbc.png",
        link: "https://mariatraga.github.io/poketeam/",
        description: "Web app created using React.",
        technologies:[
            "React",
            "Javascript",
            "Html",
            "CSS"
        ]
    },
    {
        id: 5,
        name: "CSS Background Generator",
        img: backgroundgenerator,
        link: "https://mariatraga.github.io/background-generator/",
        description: "Simple tool for generating gradient background using CSS",
        technologies:
            [
                "Javascript",
                "Html",
                "CSS"
            ]
    },
    {
        id: 6,
        name: "Cinema Simulation",
        img: "https://user-images.githubusercontent.com/73944909/176170466-e1b3ab80-03e9-45a4-a111-e2f5e1068c43.png",
        link: "https://github.com/MariaTraga/cinema-simulation",
        description: "A desktop cinema simulation app featuring employee and guest activities.",
        technologies:
        [
            "Win Forms",
            "C#",
        ]
    },
    {
        id: 7,
        name: "Exploring Greece",
        img: "https://user-images.githubusercontent.com/73944909/176215462-5629175b-8f9d-4df3-8851-eeb39094454c.png",
        link: "https://github.com/MariaTraga/exploring-greece",
        description: "An android app containing the main attractions of Santorini. Supports google maps geolocation.",
        technologies:
        [
            "Android Studio",
            "Java",
            "Google API"
        ]
    },
    {
        id: 8,
        name: "Japan Guide",
        img: "https://user-images.githubusercontent.com/73944909/176181469-a8e5f718-efb9-4092-98b8-be63046860c8.png",
        link: "https://github.com/MariaTraga/japan-guide",
        description: "A desktop Japan-guide app.",
        technologies:
        [
            "Win Forms",
            "C#",
        ]
    },
    {
        id: 9,
        name: "Spacer",
        img: unity_spacer,
        description: "A 3D video game made in Unity.",
        technologies:
        [
            "Unity",
            "C#",
        ]
    },
    {
        id: 10,
        name: "Garden gnomes",
        img: unity_garden_gnomes,
        description: "A 2D video game made in Unity.",
        technologies:
        [
            "Unity",
            "C#",
        ]
    },
    {
        id: 11,
        name: "Laser Defender",
        img: unity_laser_defender,
        description: "A 2D video game made in Unity.",
        technologies:
        [
            "Unity",
            "C#",
        ]
    },
    {
        id: 12,
        name: "Chase mini game",
        img: astarminigame,
        description: "A 2D video game made in Unity. An application of the A* pathfinding algorithm.",
        technologies:
        [
            "Unity",
            "C#",
            "A*"
        ]
    },
]

export const collaborations = [
    {
        id: 1,
        name: "Dimitris Malliaris",
        img: "https://dimitrismalliaris.github.io/static/media/me2.da521ffd2cfa2bccc72b.jpg",
        link: "https://dimitrismalliaris.github.io/"
    }
]

export const aboutme = {
    title: "About Me",
    subtitle: "",
    description: <div><span>After studying Business Administration in my Bachelor's Degree, I decided to follow my passion for programming.</span><br/>
    <span> Having finished my Master's Degree in Informatics by completing my master's thesis in Unity, I plan on developing my skills as a developer.</span><br/>
    <span>I enjoy developing both web and desktop apps and I am very entusiastic about game development.</span></div>,
    technologies: [
        "HTML",
        "CSS",
        "Javascript",
        "Express",
        "NodeJS",
        "React",
        "MySQL",
        "Firebase",
        "Unity",
        "C#",
        "Python"
    ]
}

export const introduction = {
    introtext: "Hello my name is",
    name: "Maria Traga",
    description: "I design and develop Websites, Apps and APIs as well as Unity Applications and Videogames.",
    titles: [
        "Web Developer",
        "Front-End",
        "Back-End",
        "Web-APIs",
        "Unity Developer"
    ],
    resume: "https://drive.google.com/file/d/1w_YD4ZZ3hkyPKgZ5D7La-spGRy17WOrp/view?usp=sharing"
}

export const contact = {
    title: "Contact Info",
    description: "Get in touch!",
    message: "Thank you for contacting me.",
    items: [
        {
            id: 1,
            link: "mailto:maria.traga@outlook.com",
            info: "Email",
            img: email
        },
        {
            id: 2,
            link: "https://www.google.com/maps?q=athens&rlz=1C1JZAP_enGR931GR931&um=1&ie=UTF-8&sa=X&ved=2ahUKEwj-sbvI-vL0AhW_hf0HHcj4DFQQ_AUoAXoECAEQAw",
            info: "Athens, Greece",
            img: address
        },
        {
            id: 3,
            link: "https://www.linkedin.com/in/maria-traga-33028013a/",
            info: "LinkedIn",
            img: linkedIn
        },
        {
            id: 4,
            link: "https://github.com/MariaTraga",
            info: "GitHub",
            img: github
        }
    ]

}