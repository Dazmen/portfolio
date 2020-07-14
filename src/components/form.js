import React, { useState } from 'react';
import styled from 'styled-components';
import Axios from 'axios';

const ContactForm = () => {
    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChanges = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = () => {
        Axios.post('https://formspree.io/mleponnk', formData)
            .then(res => {
                console.log('Message Sent!', res)
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                })
            })
            .catch(err =>{
                console.log('message not sent', err)
            })
    }

    return(
        <Form onSubmit={handleSubmit}>
            <InputCont>
                <label htmlFor='name'> Name: </label>
                <Input type="text" name="name" placeholder="Name" onChange={handleChanges} value={formData.name} />
            </InputCont>

            <InputCont>
                <label htmlFor='email'> Email: </label>
                <Input type="email" name="email" placeholder="Email" onChange={handleChanges} value={formData.email} />
            </InputCont>

            <InputCont>
                <label htmlFor='message'> Message: </label>
                <TextArea name="message" placeholder="Shoot me a message!" onChange={handleChanges} value={formData.message} />
            </InputCont>

            <div style={{width: '100%'}}>
                <Button type='submit'>
                    Submit
                </Button>
            </div>
        </Form>
    )
};

export default ContactForm;

const Button = styled.button`
    width: 100px;
    height: 30px;
    background-color: #2a3439;
    border: 1px solid #CAC5C2;
    color: #CAC5C2;
    margin: 10px 5.5%;

    &:hover {
        border: 1px solid #00ff01;
        box-shadow: 0 0 5px #00ff01;
        color: #00ff01;
    }

    @media(max-width: 600px){
        width: 90%;
        
    }
`;
const Form = styled.form`
    color: #00ff01;
    width: 70%;
    padding: 30px 15px;
    border: 1px solid #00ff01;
    box-shadow: 0 0 5px #00ff01;
    @media(max-width: 600px){
        width: 90%;
    }
    @media(max-width: 600px){
        width: 90%;
    }
`;
const InputCont = styled.section`
    display: flex;
    flex-direction: column;
    padding: 5px 5.5%;
`;
const TextArea = styled.textarea`
    margin: 10px 0;
    height: 160px;
    background-color: #2a3439;
    color: #CAC5C2;
    border: 1px solid #2a3439;
    outline: none;
    &:focus {
        box-shadow: 0 0 5px #00ff01;
        border: 1px solid #00ff01;
    }   
`;
const Input = styled.input`
    margin: 10px 0;
    width: 60%;
    background-color: #2a3439;
    color: #CAC5C2;
    height: 25px;
    border: 1px solid #2a3439;
    outline: none;
    &:focus {
        box-shadow: 0 0 5px #00ff01;
        border: 1px solid #00ff01;
    }
    @media(max-width: 600px){
        width: 100%;
    }
`;