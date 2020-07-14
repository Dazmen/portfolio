import React from 'react';
import { useHistory } from "react-router-dom";

// Style Imports
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

// Icon Imports
import HomeIcon from '@material-ui/icons/Home';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CodeIcon from '@material-ui/icons/Code';
import ContactsIcon from '@material-ui/icons/Contacts';
// import InfoIcon from '@material-ui/icons/Info';

const NavBar = () => {
    let history = useHistory();
    const classes = useStyles();

    const handleNav = (str) => {
        history.push(str)
    }
    
    return (
        <Nav>
            <Container>
                <Link onClick={() => handleNav('/')} className={classes.link}>
                    <HomeIcon className={classes.icon} />
                    Home
                </Link>

                {/* <Typography className={classes.sperator}>/</Typography>

                <Link onClick={() => handleNav('/about')} className={classes.link}>
                    <InfoIcon className={classes.icon} />
                    About
                </Link> */}

                <Typography className={classes.sperator}>/</Typography>

                <Link onClick={() => handleNav('/projects')} className={classes.link}>
                    <CodeIcon className={classes.icon} />
                    Projects
                </Link>

                <Typography className={classes.sperator}>/</Typography>

                <Link onClick={() => handleNav('/contact')} className={classes.link}>
                    <ContactsIcon className={classes.icon} />
                    Contact
                </Link>

                <Typography className={classes.sperator}>/</Typography>

                <Link href='https://drive.google.com/file/d/18FnN9JTY7VmmqECWfi2enT3p2G_Ogov_/view?usp=sharing' 
                    className={classes.link} 
                    target='_blank' 
                    rel='noopener noreferrer'
                    >
                    <AttachFileIcon className={classes.icon} />
                    Resume
                </Link>
            </Container>
        </Nav>
    )
};

export default NavBar;

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 40%;
    @media (max-width: 1100px){
        width: 60%;
        max-width: 500px;
    }
    @media (max-width: 800px){
        width: 75%;
    }
    @media (max-width: 600px){
        width: 90%;
    }
    @media(max-width: 550px){
        width: 100%;
    }
`;

const Nav = styled.nav`
    background-color: #1c1c1c;
    height: 75px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 4%;
    @media (max-width: 650px){
        justify-content: center;
    }
`;

const useStyles = makeStyles((theme) => ({
    sperator: {
        color: '#00ff01'
    },
    link: {
        display: 'flex',
        color: '#00FF01'
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
        color: '#39ff14'
    },
  }));