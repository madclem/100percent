import React, {useEffect} from 'react';
import styled from 'styled-components';

export default function Speakers () {
    const Container = styled.div``;
    const Caroussel = styled.div`
        height: 345px;
        margin-bottom: 60px;
    `;

    const onCycleTo = function(data){
        console.log(data);
    }

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

    return (
        <Container className='container'>
            <h2>The speakers</h2>
            <p>Introduction to present why the speakers come, and to present a few of them</p>
            <Caroussel className="carousel">
                <div className="carousel-item" href="#one!">
                    <a href='#'><img src="https://lorempixel.com/250/250/business/1"/></a>
                    Speaker's name
                </div>
                <div className="carousel-item"><a href='#'><img src="https://lorempixel.com/250/250/business/2"/></a>Speaker 2</div>
                <div className="carousel-item"><a href='#'><img src="https://lorempixel.com/250/250/business/3"/></a>Speaker 3</div>
                <div className="carousel-item"><a href='#'><img src="https://lorempixel.com/250/250/business/4"/></a>Speaker 4</div>
                <div className="carousel-item"><a href='#'><img src="https://lorempixel.com/250/250/business/5"/></a>Speaker 5</div>
            </Caroussel>
        </Container>
    );
}