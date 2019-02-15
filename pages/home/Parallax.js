import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    color: white;
`;

const PowerWord1 = styled.h1`
    position: absolute;
    top: 40px;
    left: 0;
    font-weight: bold;
`;

const PowerWord2 = styled.h1`
    position: absolute;
    top: 140px;
    left: 50%;
    margin-left: -150px;
    text-align:center;
    font-weight: bold;
`;

const PowerWord3 = styled.h1`
    position: absolute;
    top: 240px;
    right: 0;
    font-weight: bold;
`;
export default class Parallax extends React.Component {
    
    constructor(props) {
        super(props);

        this.parallax = React.createRef();
    }

    componentDidMount() {
        // console.log(this.navBar);
        const elem = this.parallax.current;
        var instance = M.Parallax.init(elem, {});
    }

    render() {
        return (
            <div className="parallax-container">
                <div className="parallax" ref={this.parallax}>
                    <img src='https://lorempixel.com/g/1200/800/people/4' />
                </div>


                <Container className='container'>
                    <PowerWord1> GATHER </PowerWord1>
                    <PowerWord2> EMPOWER </PowerWord2>
                    <PowerWord3> COLLABORATE </PowerWord3>
                </Container>
                

            </div>
        );
    }
}