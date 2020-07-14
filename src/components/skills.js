import React from 'react';
import styled from 'styled-components';
import { DiJavascript1, DiPython, DiCss3, DiLess, DiNodejsSmall, DiReact } from 'react-icons/di';
import { AiOutlineConsoleSql } from 'react-icons/ai';

const Skills = () => {

    const styles = {
        size: '50px',
        color: '#00ff01'
    }

    return (
        <section style={{width: '100%'}}>
        <H2>Skills</H2>
        <SkillsCont>
            <IconCont>
                <DiJavascript1 size={styles.size} color={styles.color}/>
                <H3>JavaScript</H3>
            </IconCont>
            <IconCont>
                <DiPython size={styles.size} color={styles.color}/>
                <H3>Python3</H3>
            </IconCont>
            <IconCont>
                <DiReact size={styles.size} color={styles.color}/>
                <H3>ReactJS</H3>
            </IconCont>
            <IconCont>
                <DiNodejsSmall size={styles.size} color={styles.color}/>
                <H3>Node.JS</H3>
            </IconCont>
            <IconCont>
                <DiCss3 size={styles.size} color={styles.color}/>
                <H3>CSS3</H3>
            </IconCont>
            <IconCont>
                <DiLess size={styles.size} color={styles.color}/>
                <H3>LESS</H3>
            </IconCont>
            <IconCont>
                <AiOutlineConsoleSql size={styles.size} color={styles.color}/>
                <H3>SQL</H3>
            </IconCont>
        </SkillsCont>
        </section>
    )
};

export default Skills;

const H2 = styled.h2`
    text-align: center;
    color: #CAC5C2;
    text-decoration: underline;
    text-decoration-color: #00ff01;
    font-size: 30px;
    letter-spacing: 1.9px;
`;
const SkillsCont = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
    padding: 30px 0;
    @media (max-width: 1100px){
        width: 60%;
        margin: 0 auto;
    }
    @media (max-width: 800px){
        width: 80%;
    }
`;
const IconCont = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 0 4%;
`;
const H3 = styled.h3`
    color: #CAC5C2;
`;