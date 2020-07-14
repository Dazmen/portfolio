import React from 'react';
import styled from 'styled-components';

// component imports
import ProjectCard from './projectCard.js';

// img imports
import gameOfLife from '../imgs/GameOfLife.PNG';
import projectCanopy from '../imgs/ProjectCanopy.PNG';
import simmr from '../imgs/Simmr.PNG';



const Projects = () => {

    return (
        <ProjectContainer>
            <H1 style={{color:'white'}}>PROJECTS </H1>
            {projects.map((project, i) => {
                return (
                <div>
                    <LineBreak />
                    <ProjectCard project={project} key={i}/>
                </div>
            )
            })}
        </ProjectContainer>
    )
};

export default Projects;

const LineBreak = styled.div`
    width: 70%;
    height: 1px;
    border-bottom: 2px solid #00ff01;
    margin: 0 auto;
`;
const H1 = styled.h1`
    font-size: 35px;
`;
const ProjectContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px 0 ;
    margin: 30px auto;
    width: 90%;
    background: rgba(28,28,28, 0.7);
`;

const projects = [
    {
        title: 'Project Canopy',
        description: 'Project Canopy is a React application that combines and displays data relevant to threatened animals in the Congo River Basin region.',
        techStack: 'HTML/CSS | React | Redux | Node.js/Express | Chart.js | Ant Design',
        bulletPoints: [
            "Collaborated remotely with a team of 4 other Web Developers, 4 Data Scientists and 1 UX Designer to build the foundations of Project Canopy's Proof-of-Concept web application.",
            'Solely responsible for SQL queries to the data science database and building endpoints for the projects backend.',
            'Designed and implemented the state management for front end using Redux.',
        ],
        gitLink: 'https://github.com/Lambda-School-Labs/project-canopy-be',
        deployLink: 'https://master.d2m0cg5et4t40w.amplifyapp.com/',
        picture: projectCanopy,
        solo: false,
    },
    {
        title: 'Game of Life',
        description: "An implementation of John Conway's Game of Life made with React. A user can manually create a configuration, randomize, select a grid size and speed of simulation.",
        techStack: 'HTML/CSS | React',
        bulletPoints: [
            'Solely responsible for developing a fully functional application in 4 days.',
            'Created an algorithm to computate the next generation of cells.',
            'Managed state using React hooks.'
        ],
        gitLink: 'https://github.com/Dazmen/Conway-Game-Of-Life_v2',
        deployLink: 'https://conway-game-of-life-v2.now.sh/',
        picture: gameOfLife,
        solo: true,
    },
    {
        title: 'Simmr',
        description: 'Simmr is a React application for users to view and post recipes.',
        techStack: 'HTML/CSS | Material UI | Styled-Components | React | Redux',
        bulletPoints: [
            'Collaborated remotely with a team of 3 other Web Developers and 1 UX designer to build a functional web application in 4 days.',
            'Solely responsible for integrating HTTP requests to the back end.',
            'Developed the sign-in/out flow, home, gallery and recipe functionality.'
        ],
        gitLink: 'https://github.com/chefPassport/Frontend',
        deployLink: 'https://deploy-inky.now.sh/',
        picture: simmr,
        solo: false,
    },
]