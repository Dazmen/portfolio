import React from 'react';
import styled from 'styled-components';

// Component Imports
import Skills from './skills.js';
import About from './about.js';

// img imports
import keyboardImg from '../imgs/green_keyboard.jpg';
import profileImg from '../imgs/profile.jpg';

// icon & material UI imports
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const Home = () => {
    const classes = useStyles();

    return(
        <HomeContainter>
            <Img src={keyboardImg} alt='backlight keyboard' />

            <IntroCard>
                <ProfileImg src={profileImg} alt='Picture of Chris' />
                <div style={{textAlign:'center'}}>
                    <Name>Chris Engel</Name>
                    <h2 style={{color:'#00FF01'}}>Full-Stack Web Developer</h2>
                    <IconContainer>
                        <a href="https://www.linkedin.com/in/chris-j-engel/" target="_blank" rel='noopener noreferrer'>
                            <LinkedInIcon className={classes.icon} />
                        </a>
                        <a href='https://github.com/Dazmen' target="_blank" rel='noopener noreferrer'>
                            <GitHubIcon className={classes.icon} />
                        </a>
                        <MailOutlineIcon className={classes.icon} />
                    </IconContainer>
                </div>
            </IntroCard>
            <Skills />
            <About />
        </HomeContainter>
    )
};

export default Home;

const IconContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`;
const IntroCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space evenly;
    align-items: center;
    width: 40%;
    padding: 30px 0 50px 0;
    @media(max-width: 1000px){
        width: 60%;
    }
    @media(max-width: 600px){
        width: 80%;
    }
`;
const Name = styled.h1`
    color: #CAC5C2;
    font-size: 2.5rem;
    letter-spacing: 2px;
    margin: 25px 0 0 0;
`;
const ProfileImg = styled.img`
    border-radius: 50%;
    width: 45%;
`;
const HomeContainter = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px 0 ;
    margin: 30px auto;
    width: 80%;
    background: rgba(28,28,28, 0.7);
`;
const Img = styled.img`
    max-width: 40%;
    border-radius: 20px;
    @media (max-width: 1000px){
        display: None;
    }
`;

const useStyles = makeStyles((theme) => ({
    icon: {

        width: 30,
        height: 30,
        color: '#39ff14',
        '&:hover': {
            color: '#CAC5C2'
        }
    },
}));