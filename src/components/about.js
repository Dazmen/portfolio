import React from 'react';
import styled from 'styled-components';
import UnderLine from './underline.js';

const About = () => {

    return(
        <TextCont>
            <H2>About Me</H2>
            <UnderLine />
            <P>Hello! My name is <Span>Chris Engel</Span> and I am a Full-Stack Engineer with a background in estimating, project management and steel fabrication. I have strong skills in <Span>Javascript, React, Redux, Python3, Node.js, HTML, CSS, LESS, SQL</Span> and am familiar with many industry standard collaboration technologies such as <Span>Slack, Zoom, Git/Github, Notion</Span> and <Span>Trello</Span>. I am currently seeking new opportunities in the northeast Ohio region, but would be open to discuss relocating. I greatly enjoy learning, friendly competition and really anything that pushes me to become better then I was yesterday. My favorite aspect of coding is the problem solving. The excitement and euphoria that comes with solving a difficult problem is the same as when my Cleveland Browns manage to actually win a game! </P>
        </TextCont>
    )
};

export default About;

const H2 = styled.h2`
    text-align: center;
    color: #CAC5C2;
    margin: 0px;
    font-size: 36px;
    letter-spacing: 1.9px;
`;
const P = styled.p`
    color: #CAC5C2;
    line-height: 25px;
    font-size: 20px;
`;
const Span = styled.span`
    color: #00ff01
`;
const TextCont = styled.section`
    width: 80%;
`;

// text-decoration: underline;
//     text-decoration-color: #00ff01;