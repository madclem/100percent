import React from 'react';
import styled from 'styled-components';
import List from 'components/List';

const Container = styled.div`
    max-width: 800px;
    margin: auto;
    border-left: 6px solid #ffca28;
    padding-left: 28px;
    padding-bottom: 20px;
    margin-top: 20px
`;

const ContainerTop = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Title = styled.h4`
    font-weight: bold;
`;

const Date = styled.p`
`;

const Text = styled.p`
    width: 90%;
    text-align: justify;
    padding-left: 10px;
`;

const ContainerList = styled.div`
    padding-left: 10px;
    margin: 40px 0;
`;

const ContainerButton = styled.div`
    text-align:right
`;

export default function EventMain (props) {

    return (
        <React.Fragment>
            {/* title                date */}
            <Container>
                <ContainerTop>
                    <Title> { props.title } </Title>
                    <Date> { props.date } </Date>
                </ContainerTop>
                <Text>{props.description}</Text>
                
                <ContainerList>
                    <List options={props.speakers} />
                </ContainerList>
                { props.cta && 
                    <ContainerButton>
                        <a className="waves-effect waves-light btn orange"> Register <i className="material-icons right">event</i> </a>
                    </ContainerButton>
                }
            </Container>
            {/* speakers */}
            {/*                      button */}
        </React.Fragment>
    );
}