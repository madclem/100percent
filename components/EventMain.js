import React from 'react';
import styled from 'styled-components';
import List from 'components/List';
import AddToCalendar from 'react-add-to-calendar';

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

const DateEvent = styled.p`
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
    text-align:right;
    
    .react-add-to-calendar {
        -webkit-font-smoothing: antialiased;
        position: relative;
        display: block;
        margin: 0 auto;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, .004);
    
        &__wrapper {
            zoom: 1;
            cursor: pointer;
        }
    
        &__button {
            padding: 10px;
            background-color: #f9f9f9;
            border: 1px solid #aab9d4;
            border-radius: 3px;
            color: #000;
    
            &--light {
                background-color: #fff;
            }
        }
    
        &__icon {
            &--right {
                padding-left: 5px;
            }
    
            &--left {
                padding-right: 5px;
            }
        }
    
        &__dropdown {
            position: absolute;
            top: 30px;
            left: 1px;
            display: flex;
            justify-content: flex-end;
            width: 100%;
            text-align: left;
            
            ul {
                padding: 5px 10px 5px 8px;
                box-shadow: 1px 3px 6px rgba(0, 0, 0, .15);
                border: 1px solid rgba(0, 0, 0, .15);
                border-radius: 3px;
                list-style: none;
                margin: 0;
                z-index: 1;
                background-color: white;
    
                li {
                    margin: 10px 0;
                    a {
                        color: #000;
                        text-decoration: none;
    
                        i {
                            padding-right: 10px;
                        }
                    }
                }
            }
        }
    }
    
`;

export default function EventMain (props) {

    console.log('props', props.data);
    
    let event = {
        title: props.data.title,
        description: props.data.description,
        location: props.data.address,
        startTime: props.data.date,
        endTime: props.data.date
    }

    return (
        <React.Fragment>
            {/* title                date */}
            <Container>
                <ContainerTop>
                    <Title> { props.data.title } </Title>
                    <DateEvent> { props.data.date } </DateEvent>
                </ContainerTop>
                <Text>{props.data.full_description || props.data.description}</Text>
                
                <ContainerList>
                    <List options={props.data.speakers} />
                </ContainerList>
                
                {!props.hideButton && <ContainerButton>
                    <AddToCalendar event={event}/>
                </ContainerButton>}
                
            </Container>
            {/* speakers */}
            {/*                      button */}
        </React.Fragment>
    );
}