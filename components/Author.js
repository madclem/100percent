import React from 'react';
import styled from 'styled-components';

export default function Author (props) {

    const Img = styled.div`
        min-width: 120px;
        max-width: 120px;
        min-height: 120px;
        max-height: 120px;
        margin: 0 20px 0 0;
        background: url(${props => props.src || 'https://lorempixel.com/250/250/city/2'});
        background-size: cover;
        
    `;

    const Container = styled.div`
        display: flex;
    `;

    const Right = styled.div` 
    `;

    const Paragraph = styled.p`
        margin: 5px;
        text-align: justify;
    `;

    const Title = styled.h6`
        font-weight: bold;
        margin: 0 0 8px 0;
    `;

    return (
        // photo left
        // text right
        <Container className='container'>
            
            <Img src={props.image} />
            <Right>
                <Title>{props.title}</Title>
                <Paragraph>{props.text}</Paragraph>
            </Right>
        </Container>
    );
}