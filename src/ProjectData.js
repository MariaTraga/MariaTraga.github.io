import unity_spacer from './images/unity_spacer.gif';
import unity_garden_gnomes from './images/unity_garden_gnome_tower_defense.gif';
import unity_laser_defender from './images/unity_laser_defender.gif';
import myPortfolio from './images/myPortfolioWebsite.PNG';
import phone from './images/phone.png';
import email from './images/email.png';
import address from './images/address.png';
import linkedIn from './images/linkedin.png';
import github from './images/github.png';
import poketeam from './images/poketeam.PNG';
import backgroundgenerator from './images/backgroundgenerator.PNG';
import facefinder from './images/facefinder.PNG';
import astarminigame from './images/astarminigame.PNG';
import tourismappandroid from './images/tourismapp.PNG';
import tourismappjapan from './images/tourismappjapan.PNG';

export const projects = [
    {
        id: 1,
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
        id: 2,
        name: "Poketeam",
        img: poketeam,
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
        id: 3,
        name: "My Portfolio",
        img: myPortfolio,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
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
    {
        id: 9,
        name: "Explore Santorini",
        img: tourismappandroid,
        description: "An android app containing the main attractions of Santorini. Supports google maps geolocation.",
        technologies:
        [
            "Android Studio",
            "Java",
        ]
    },
    {
        id: 10,
        name: "Explore Japan",
        img: tourismappjapan,
        description: "A desktop Japan-guide app.",
        technologies:
        [
            "Win Forms",
            "C#",
        ]
    }
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
    <span> Currently I am finishing up my Master's Degree in Informatics by progressing my master's thesis in Unity.</span><br/>
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
        "C#"
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
        "Unity Developer",
        "Unity Designer"
    ],
    resume: "https://drive.google.com/file/d/1lJxb-3ViCLMxcUWfcFRcvcQkBpbADKtC/view"
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