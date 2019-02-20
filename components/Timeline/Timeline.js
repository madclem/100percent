import React from 'react';
import styled from 'styled-components';
import media from 'utils/styles/media';
import data from './data';
import Card from './Card';
import Column from './Column';

export default function Timeline () {
    const widthPoint = 6;

    const Container = styled.div`
        display: flex;
        flex-wrap: wrap;
        width: 94%;
        position: relative;
        margin: 0 3%;
        // justify-content: center;
        border-left: 1px dashed rgba(0,0,0,.1);

        ${media.tablet`
            height: 100vh;
            flex-wrap: nowrap;
            border: none;
        `}
    `;

    const LineMiddle = styled.div`
        display: none;
    
        ${media.tablet`
            display: block;
            width: 100%;
            top: 50%;
            left: 0;
            position: absolute;
            border-bottom: 1px solid rgb(220,220,220);
        `}

    `;

    const Year = styled.span`
        font-size: 24px;
        color: rgb(223, 229, 231);
        font-weight: bold;
        display: block;
        margin: 20px 0 0 10px;
        
        ${media.tablet`
            margin: 0 0 0 5px;
            transform: translateY(-100%);
            position: absolute;
            top: 50%;
            transition: color 100ms ease-in 0s;

            ${Column}:hover & {
                color: black;
            }
        `}
    `;

    const VerticalLine = styled.div`
        display: none;

        ${media.tablet`
            display: block;
            margin: 0;
            position:relative;
            top: 50%;
            left: -1px;
            width: 1px;
            background-image: linear-gradient(to bottom, rgb(220,220,220), rgb(220, 220,220));
            height: ${propsS => propsS.height || 0}%;
            transition: background-image 100ms ease-in 0s;

            ${Column}:hover & {
                background-image: linear-gradient(to bottom, rgb(1, 58, 81), 26%, rgb(251, 140, 0));
                z-index: 3;
            }

            ${propsS => propsS.translateY ? `
                background-image: linear-gradient(to top, rgb(220,220,220), rgb(220,220,220));
                transform: translateY(-100%);

                ${Column}:hover & {
                    background-image: linear-gradient(to top, rgb(1, 58, 81), 26%, rgb(251, 140, 0));
                }
            ` : ''}
        `}

    `;

    const Point = styled.div`
        ${media.tablet`
            z-index: 3;
            width: ${widthPoint}px;
            height: ${widthPoint}px;
            background-color: rgb(220,220,220);
            transition: background-color 100ms ease-in 0s;
            ${Column}:hover & { background-color: rgb(0, 0, 0); }
            border-radius: 100%;
            position: absolute;
            top: calc(50% - ${widthPoint/2}px);
            left: -${widthPoint/2}px;        
        `}
    `;
        
    // background-image: linear-gradient(to top, rgb(1, 58, 81), 26%, rgb(0, 229, 158));
    function getColumn() {

        const positions = [
            { bottom:  80},
            { bottom: 60},
            { top: 80},
            { top: 60},
        ]
        const years = {};
        return data.map((d, index)=>{
            const pos = positions[index % 4];
            const year = years[d.year] ? '' : d.year;
            years[d.year] = true;

            let height = (pos.bottom || pos.top) - 50;
            let translateY = pos.bottom ? true: false;
            return (
            <Column key={d.id}>
                <Year> {year} </Year>
                <Card top={pos.top} bottom={pos.bottom} className='z-depth-1'>
                    <h5><i className='material-icons'>{d.icon}</i>{d.title}</h5>
                    <p>{d.text}</p>
                </Card>

                <VerticalLine height={height} translateY={translateY} />
                <Point />
            </Column>
            );
        });
    }

    return (
        <Container>
            {getColumn()}
            <LineMiddle />
        </Container>
    );
}