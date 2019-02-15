import React from 'react';
import styled from 'styled-components';
import data from './data';

export default function Timeline () {

    const Container = styled.div`
        display: flex;
        height: 600px;
        width: 94%;
        position: relative;
        margin: 0 3%;
        // justify-content: center;
    `;

    const Column = styled.div`
        height: 100%;
        width: 75px;
        border-right: 1px dashed rgba(0,0,0,.1);
        position: relative;
    `;

    const LineMiddle = styled.div`
        width: 100%;
        top: 50%;
        position: absolute;
        border-bottom: 1px solid black;

    `;

    const Year = styled.span`
        font-size: 24px;
        position: absolute;
        top: 50%;
        margin: 0;
        font-size
    `;

    const Card = styled.div`
        pointer-events: none;
        width: 220px;
        background-color:white;
        position:absolute;
        z-index: 2;
        padding: 10px;
        ${propsS => propsS.bottom  ? 'bottom:' + propsS.bottom + '%;' : ''}
        ${propsS => propsS.top ? 'top:' + propsS.top + '%;' : ''}

        h5 {
            margin: 0 0 10px 0;
        }

        p {
            margin: 0;
        }
    `

    const VerticalLine = styled.div`

        // background: rgba(0,0,.1);
        margin: 0;
        position:relative;
        top: 50%;
        left: -1px;
        width: 1px;
        background-image: linear-gradient(to bottom, rgba(0,0,0,.4), rgba(0, 0,0, .0));
        height: ${propsS => propsS.height || 0}%;

        ${Column}:hover & {
            background-image: linear-gradient(to bottom, rgb(1, 58, 81), 26%, rgb(251, 140, 0));
        }

        ${propsS => propsS.translateY ? `
        background-image: linear-gradient(to top, rgba(0,0,0,.4), rgba(0, 0,0, .0));
            transform: translateY(-100%);

            ${Column}:hover & {
                background-image: linear-gradient(to top, rgb(1, 58, 81), 26%, rgb(251, 140, 0));
            }
        ` : ''}

    `;
        
    // background-image: linear-gradient(to top, rgb(1, 58, 81), 26%, rgb(0, 229, 158));
    function getColumn() {

        const positions = [
            { bottom:  75},
            { bottom: 55},
            { top: 75},
            { top: 55},
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
                <Card top={pos.top} bottom={pos.bottom} className='z-depth-1'>
                    <h5>{d.title}</h5>
                    <p>{d.text}</p>
                </Card>
                <Year> {year} </Year>

                <VerticalLine height={height} translateY={translateY} />
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