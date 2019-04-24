import React, {Component} from 'react'
import styled from 'styled-components';
import Layout from 'components/Layout';
import Divider from 'components/Divider';
import EventMain from 'components/EventMain';
import HorizontalCard from 'components/HorizontalCard';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { graphql } from "react-apollo";

const mainEventQuery = gql`
    query events($is_next: Boolean!) {
        events(where:{is_next: $is_next}) {
            title
            date
            full_description
            description
            address
            speakers {
                _id
                name
            }
        }
    }
`;

const queryEvents = gql`
{
    events {
        _id
        is_next
        title
        full_description
        description
        main_photo {
            url
        }
    }
}
`;

const Container = styled.div`
    margin-bottom: 80px
`;

const Separator = styled.div`
    padding-top: 80px;
`;

const ContainerCard = styled.div`
    margin: 20px 0;
`;

export default graphql(queryEvents, {
    props: ({ data }) => ({
        data
    })
})(function Events (props) {


    let eventsData = []
    
    if (props.data && props.data.events) {
        eventsData = props.data.events
    }

    function getEvents(){
        return eventsData.map((event)=>{
            if(!event.is_next) {
                event.link = '/event/' + event._id
                return (
                    <ContainerCard key={event.id}>
                        <HorizontalCard {...event} />
                    </ContainerCard>
                )
            }
        })
    }


    // const nextEventData = {
    //     title: 'Next Event: February Gathering',
    //     description: 'Next Event: February Gathering',
    //     date: '22.02.2019',
    //     speakers: speakersNextEvent,
    //     cta: true
    // }

    let nextEventData
    return (
        <Layout>
            <Separator />            
            <Container className='container'>
                <Query query={mainEventQuery} variables={{is_next: true}}>
                    {({ loading, error, data }) => {
                        if (loading) {
                            return null;
                        }
                        if (error) {
                            return `Error: ${error}`;
                        }
                        
                        if (data && data['events'] && data['events'].length > 0) {

                            return (
                                <EventMain data={data['events'][0]} />
                            )
                        }
                        else {
                            return null
                        }
                    }}
                </Query>
                
                <Divider top={60} bottom={60} />
                {getEvents()}
            </Container>
        </Layout>
    );
})