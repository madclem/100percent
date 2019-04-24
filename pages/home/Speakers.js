import React, {useEffect} from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import gql from "graphql-tag";
import { graphql } from "react-apollo";
const query = gql`
{
    speakers {
        _id
        name
        description
        link
        photo {
            url
        }
    }
}
`;

const Container = styled.div``;
const Img = styled.div`
    min-width: 250px;
    min-height: 250px;
    background-image: url(${props=> props.backround});
    background-size: cover;

`;

const Caroussel = styled.div`
    height: 345px;
    margin-bottom: 60px;
`;

export default graphql(query, {
    props: ({ data }) => ({
        data
    })
})(function Speakers (props) {

    console.log('props', props);
    

    let instances;

    useEffect(() => {
        let elems = document.querySelectorAll('.carousel');
        instances = M.Carousel.init(elems, {
        });

        return function cleanUp() {
            instances.forEach(element => {
                element.destroy();
            });
        }
    });

    if (!props.data || !props.data.speakers) return (<div />)
    return (
        <Container className='container'>
            <h2>The speakers</h2>
            <p>Introduction to present why the speakers come, and to present a few of them</p>
            <Caroussel className="carousel">
                {
                    props.data.speakers.map((speaker) => {
                        return <div key={speaker._id} className="carousel-item"><Link as={`/speakers/${speaker._id}`} href={'/speakers?id=' + speaker._id}><Img backround={`http://localhost:1337${speaker.photo.url}`}/></Link>{speaker.name}</div>
                    })
                }
                
            </Caroussel>
        </Container>
    );
})