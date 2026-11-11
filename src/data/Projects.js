
import { Technologies } from "./Technologies";

const projects = [
    {
        name: "Pericula",
        description:
            "A roguelike deckbuilder featuring over 30 unique cards, distinct class identities, and varied deckbuilding strategies.",
        technologies: [Technologies.GODOT, Technologies.C_SHARP],
        imgSrc: `${process.env.PUBLIC_URL}/Pericula.png`,
        imgAlt: "Pericula Project Preview",
        link: "https://fishtomato4.itch.io/pericula",
        ghLink: "https://github.com/kofu145/pericula",
    },
    {
        name: "Loop Dungeon",
        description:
            "A puzzle game where you explore an endless dungeon and uncover clues to find a way to escape.",
        technologies: [Technologies.UNITY, Technologies.C_SHARP],
        imgSrc: `${process.env.PUBLIC_URL}/Loop_Dungeon.png`,
        imgAlt: "Loop Dungeon Project Preview",
        link: "https://fishtomato4.itch.io/loop-dungeon",
    },
    {
        name: "Tsunaji",
        description:
            "A Japanese vocabulary puzzle game for intermediate learners. Uses Japanese dictionary data to generate an in-game vocabulary.",
        technologies: [Technologies.GODOT, Technologies.GD_SCRIPT],
        imgSrc: `${process.env.PUBLIC_URL}/Tsunaji.png`,
        imgAlt: "Tsunaji Project Preview",
        link: "https://fishtomato4.itch.io/tsunaji",
    },
    {
        name: "TodoList Web App",
        description:
            "A task management application that lets users create, organize, and track tasks. Data is saved locally in the browser.",
        technologies: [Technologies.REACT, Technologies.HTML_CSS, Technologies.JAVASCRIPT],
        imgSrc: `${process.env.PUBLIC_URL}/TodoList_App_Preview.png`,
        imgAlt: "Todo List Project Preview",
        link: "https://RalphAlexander.github.io/Todo-App/",
        ghLink: "https://github.com/RalphAlexander/Todo-App",
    },
    {
        name: "Seasonal Anime Calendar",
        description:
            "A web application using the Jikan API data that allows users to explore anime by season and maintain a personal list, which is saved locally in the browser.",
        technologies: [Technologies.REACT, Technologies.JAVASCRIPT, Technologies.HTML_CSS, Technologies.REST_API],
        imgSrc: `${process.env.PUBLIC_URL}/Seasonal_Anime_Calendar.png`,
        imgAlt: "Seasonal Anime Calendar Project Preview",
        link: "https://RalphAlexander.github.io/Seasonal-Anime-Calendar/",
        ghLink: "https://github.com/RalphAlexander/Seasonal-Anime-Calendar",
    },
    {
        name: "Sorting Visualizer",
        description:
            "An interactive web application that visualizes how different sorting algorithms organize an array.",
        technologies: [Technologies.REACT, Technologies.HTML_CSS, Technologies.JAVASCRIPT],
        imgSrc: `${process.env.PUBLIC_URL}/Sorting_Algorithm_Preview.png`,
        imgAlt: "Sorting Visualizer Project Preview",
        link: "https://RalphAlexander.github.io/Sorting-Visualizer/",
        ghLink: "https://github.com/RalphAlexander/Sorting-Visualizer",
    },
];

export default projects;
