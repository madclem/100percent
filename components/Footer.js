import React, {Component} from 'react'
import styled from 'styled-components';

const Container = styled.div`
    padding: 20px 0;
`;

const Socials = styled.div`
    justify-content:center;
    display: flex;
    align-items: center;

    a {
        color: black;
        padding: 20px;
    }
    .linkedin {
        
        height: 18px;
    }
`;

const Name = styled.p`
    text-transform: uppercase;
    font-size: 30px;
    margin-bottom: 0;
`;

const Intro = styled.p`
    margin-top: 0;
    text-transform: uppercase;
    font-size: 20px;
    font-style: italic;
`;


export default class Footer extends React.Component {
    render() {
        return (
            <Container className='grey lighten-4' id='contact'>
                <div className='container'>
                    <div className='row'>
                        <Name>Deborah Gilshan</Name>
                        <Intro className='grey-text text-darken-2'>Founder, the 100% club</Intro>
                        <p>Email:</p>
                        <p>deborah.gilshan@the100percentclub.co.uk</p>
                    </div>
                    <Socials>
                        <a href=''><i className='material-icons text-black'>email</i></a>
                        <a href=''><img className='linkedin' src='/static/img/linkedin-icon.svg' alt='linkedin' /></a>
                    </Socials>
                </div>
            </Container>
        );
    }
}