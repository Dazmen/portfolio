import React from 'react';
import styled from 'styled-components';

// icon imports
import { makeStyles } from '@material-ui/core/styles';
import GroupIcon from '@material-ui/icons/Group';
import PersonIcon from '@material-ui/icons/Person';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';

const ProjectCard = ({ project }) => {
    const classes = useStyles();

    return (
        <Card>
            <ImgContainer>
                <img src={project.picture} alt='project preview' style={{maxWidth:'100%'}}/>
            </ImgContainer>

            <TextContainer>
                <TitleCont>
                    <H2>{project.title}</H2>
                    {project.solo ? <PersonIcon className={classes.icon}/> : <GroupIcon className={classes.icon}/>}
                </TitleCont>
                <p style={{color:'#CAC5C2'}}>{project.description}</p>
                <p style={{color:'#00ff01'}}>{project.techStack}</p>
                <ul>
                    {project.bulletPoints.map((bullet, i) => {
                        return <li style={{color:'white'}} key={i}>{bullet}</li> 
                    })}
                </ul>

                <IconCont>
                    <a href={project.gitLink} target='_blank' rel='noopener noreferrer'>
                        <GitHubIcon className={classes.iconLink}/>
                    </a>
                    <a href={project.deployLink} target='_blank' rel='noopener noreferrer'>
                        <LinkIcon className={classes.iconLink} />
                    </a>
                </IconCont>
            </TextContainer>
        </Card>
    )
};

export default ProjectCard;


const TitleCont = styled.div`
    width: 100%;
    text-align: center;
`;
const H2 = styled.h2`
    display: inline-block;
    color: #00ff01;
    margin: 0;
`;
const ImgContainer = styled.div`
    width: 40%;
    display:flex;
    align-items: center;
    @media(max-width: 1000px){
        width: 60%;
    }
    @media(max-width: 700px){
        width: 80%;
    }
`;
const Card = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin: 40px 0;
    @media(max-width: 1000px){
        flex-direction: column-reverse;
        align-items: center;
    }
`;
const TextContainer = styled.div`
    width: 40%;
    @media(max-width: 1000px){
        width: 60%;
        margin: 0 0 30px 0;
    }
    @media(max-width: 700px){
        width: 80%;
    }
`;
const IconCont = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
    padding: 10px 0;
    @media (max-width: 1100px){
        width: 60%;
        margin: 0 auto;
    }
    @media (max-width: 800px){
        width: 80%;
    }
    
`;

const useStyles = makeStyles((theme) => ({
    icon: {
        width: 30,
        height: 30,
        margin: '0px 0px 0px 20px;',
        color: '#CAC5C2'
    },
    iconLink: {
        width: 30,
        height: 30,
        color: '#00ff01'
    }
}));