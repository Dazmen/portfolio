import React from 'react';
import styled from 'styled-components';
import ContactForm from './form.js';


const Contact = () => {


    return (
        <ContactContainer>
            <h1>Contact Me</h1>
            <p>Send me an email, or connect with me on  
                    <a href="https://www.linkedin.com/in/chris-j-engel/" target="_blank" rel='noopener noreferrer'>
                        LinkedIn.
                    </a>
            </p>
            <ContactForm />
        </ContactContainer>
    )
};

export default Contact;

const ContactContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    flexx-direction: column;
    padding: 20px 0;
    margin: 30px auto;
    width: 80%;
    background: rgba(28,28,28, 0.8);

    h1 {
        font-size: 35px;
        width: 100%;
        text-align: center;
        color: #00ff01;
        margin: 30px 0 10px 0;
    }

    p {
        color: #CAC5C2;
        padding: 10px;
        text-align: center;
    }

    a {
        text-decoration: none;
        color: #00ff01;
        margin: 0 14px;
        text-align: center;
        &:hover {
            color: white;
        }
    }
`;

