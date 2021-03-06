import React from 'react';
import styled from 'styled-components';
import media from 'utils/styles/media';
import Column from './Column';

const Container = styled.div`
    overlow: hidden;
    pointer-events: none;
    background-color:white;
    z-index: 2;
    padding: 10px;
    margin-bottom: 10px;
    position: relative;
    
    ${media.tablet`
        opacity: .7;
        background-color:#f2f2f2;
        width: 216px;
        ${propsS => propsS.bottom  ? 'bottom:' + propsS.bottom + '%;' : ''}
        ${propsS => propsS.top ? 'top:' + propsS.top + '%;' : ''}
        position:absolute;
        margin: 0;
        transition: all 100ms ease-in 0s;

        ${Column}:hover & {
            background-color:white;
            opacity: 1;
            z-index: 3;

        }
    `}

    h5 {
        margin: 0 0 10px 0;
        font-size: 1.64rem!important;
    }
    
    p {
        margin: 0;
        font-size: 14.5px!important;
    }
`

const Point = styled.div`
    width: ${(props) => props.widthPoint}px;
    height: ${(props) => props.widthPoint}px;
    background-color: rgb(251, 140, 0);
    border: 1px solid rgb(251, 140, 0);
    border-radius: 100%;
    position: absolute;
    top: calc(100% - ${(props) => props.widthPoint/2}px);
    left: -${(props) => props.widthPoint/2}px;

    ${media.tablet`
        top: ${propsS => propsS.bottom ? `calc(100% - ${(props) => props.widthPoint/2}px);` : `-${(props) => props.widthPoint/2}px;`}
        background-color: rgb(235, 235, 235);

        ${Column}:hover & {
            background-color: rgb(251, 140, 0);
        }
    `}
`;

export default function Card (props) {
    return (

        <Container {...props}>
            {props.children}
            <Point widthPoint={10} bottom={props.bottom} />
        </Container>

    );
}