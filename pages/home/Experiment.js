import styled from 'styled-components';

export default function Experiment () {

    const Container = styled.div`
        min-height: 65vh;
        border-bottom: 1px solid rgba(0,0,0,0.1);
        // background-image: url(https://lorempixel.com/1200/400/city/4);
        // background-size:cover;
    `;

    const Title = styled.h1`
        margin:auto;
        font-weight: 800;
        font-size: 120px;
        color: #ff8f00;
    `;

    return (
        <Container className='valign-wrapper orange lighten-5'><Title className='grey-text'>TOP</Title></Container>
    );
}