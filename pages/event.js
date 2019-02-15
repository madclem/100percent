import React, {useEffect} from 'react'
import styled from 'styled-components';
import Layout from 'components/Layout';
import Divider from 'components/Divider';
import EventMain from 'components/EventMain';

export default function Events () {
    const Container = styled.div`
        margin-bottom: 80px
    `;

    const Separator = styled.div`
        padding-top: 80px;
    `;


    const speakersEvent = [
        { id: 0, name: 'Speaker 1', link: '#' },
        { id: 1, name: 'Speaker 2', link: '#' },
        { id: 2, name: 'Speaker 3', link: '#' }
    ]

    const eventData = {
        title: 'Title of this event',
        description: 'When clicking into an event (from the events page), here are all the informations about this event! For now the informations are hardcoded but in the future, they will be replaced by the real events details!',
        date: '22.01.2019',
        speakers: speakersEvent
    }

    const Img = styled.img`
        width: 100%;
        height: auto;
        display: block;
        cursor: pointer;
        margin: 4px 0;
    `;

    const Column = styled.div`
        padding: 0 2px!important;
    `;

    const posts = [
        'https://lorempixel.com/640/480/business/1',
        'https://lorempixel.com/640/480/business/2',
        'https://lorempixel.com/640/480/business/3',
        'https://lorempixel.com/640/480/business/4',
        'https://lorempixel.com/640/480/business/5',
        'https://lorempixel.com/640/480/business/6',
        'https://lorempixel.com/640/480/people/1',
        'https://lorempixel.com/640/480/people/2',
        'https://lorempixel.com/640/480/people/3',
        'https://lorempixel.com/640/480/people/4',
        'https://lorempixel.com/640/480/people/5',
        'https://lorempixel.com/640/480/people/6',
        'https://lorempixel.com/640/480/nature/1',
        'https://lorempixel.com/640/480/nature/2',
        'https://lorempixel.com/640/480/nature/3',
        'https://lorempixel.com/640/480/nature/4',
        'https://lorempixel.com/640/480/nature/5',
        'https://lorempixel.com/640/480/nature/6',
    ]

    function splitElements (posts) {
        let splitted = [];

        for (let i = 0; i < 6; i++) {
            let col = [];
            posts.map((post, index) => {
                if ((index % 6) === i) {
                    col.push(post);
                }
                return '';
            });
            splitted.push(col);
        }
        return splitted;
    }

    useEffect(() => {
        const elems = document.querySelectorAll('.materialboxed');
        let instances = M.Materialbox.init(elems, {});

        return function cleanUp() {
            instances.forEach(element => {
                element.destroy();
            });
        }
    });

    return (
        <Layout>
            <Separator />
            <Container className='container'>
                <EventMain {...eventData} />
                <Divider top={60} bottom={60} />
                <div className="row">
                {
                    (splitElements(posts).map((col, index) => {
                            return (<Column className='col s6 m4 l2' key={'col' + index}>
                                {
                                    col.map((post, index2) => {
                                        return <Img key={index2} alt='post logo' src={post} className='materialboxed post_image' />;
                                    })
                                }
                            </Column>);
                        }))
                }
                </div>
            </Container>
        </Layout>
    );
}