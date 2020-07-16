import React from 'react';
import styled from 'styled-components';

const UnderLine = () => {

    return (
     <LineBreak />
    )
};

export default UnderLine

const LineBreak = styled.div`
    width: 60%;
    height: 1px;
    border-bottom: 2px solid #00ff01;
    margin: 20px auto;
`;