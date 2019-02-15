import React, {Component} from 'react'
import styled from 'styled-components';
import Layout from 'components/Layout';
import Divider from 'components/Divider';
import EventMain from 'components/EventMain';
import HorizontalCard from 'components/HorizontalCard';

export default function Events () {
    const Container = styled.div`
        margin-bottom: 80px
    `;

    const Separator = styled.div`
        padding-top: 80px;
    `;

    const ContainerCard = styled.div`
        margin: 20px 0;
    `;

    const eventsData = [
        {
            id: 0,
            title: 'Event November',
            image: 'https://lorempixel.com/190/190/business/1',
            link: '/event',
            description: 'This was the great gathering of November',
            fullDescription: 'This was the great gathering of November, and this is its complete description (more space to write what you want!)',
        },
        {
            id: 1,
            title: 'Event December',
            image: 'https://lorempixel.com/190/190/business/2',
            link: '/event',
            description: 'This was the great gathering of December',
            fullDescription: 'This was the great gathering of December, and this is its complete description (more space to write what you want!)',
        },
        {
            id: 2,
            title: 'Event January',
            image: 'https://lorempixel.com/190/190/business/3',
            link: '/event',
            description: 'This was the great gathering of January',
            fullDescription: 'This was the great gathering of January, and this is its complete description (more space to write what you want!)',
        }
    ];

    function getEvents(){
        return eventsData.map((event)=>{
            return (
                <ContainerCard key={event.id}>
                    <HorizontalCard {...event} />
                </ContainerCard>
            )
        })
    }

    const speakersNextEvent = [
        { id: 0, name: 'Speaker 1', link: '#' },
        { id: 1, name: 'Speaker 2', link: '#' },
        { id: 2, name: 'Speaker 3', link: '#' },
    ]

    const nextEventData = {
        title: 'Next Event: February Gathering',
        description: 'Next Event: February Gathering',
        date: '22.02.2019',
        speakers: speakersNextEvent,
        cta: true
    }

    return (
        <Layout>
            <Separator />
            <Container className='container'>
                <EventMain {...nextEventData} />
                <Divider top={60} bottom={60} />
                {getEvents()}
            </Container>
        </Layout>
    );
}