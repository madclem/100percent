import React from 'react';
import styled from 'styled-components';
import media from 'utils/styles/media';
import data from './data';
import Card from './Card';
import Column from './Column';
import gql from "graphql-tag";
import { graphql } from "react-apollo";

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
        width: ${(props) => props.widthPoint}px;
        height: ${(props) => props.widthPoint}px;
        background-color: rgb(220,220,220);
        transition: background-color 100ms ease-in 0s;
        ${Column}:hover & { background-color: rgb(0, 0, 0); }
        border-radius: 100%;
        position: absolute;
        top: calc(50% - ${(props) => props.widthPoint/2}px);
        left: -${(props) => props.widthPoint/2}px;        
    `}
`;

const query = gql`
{
    milestones {
      _id
      year
      short_description
      description
      milestoneicons {
        _id
        icon {
          url
        }
      }
    }
  }
`;

export default graphql(query, {
    props: ({ data }) => ({
        data
    })
})(function Timeline (props) {        
    // background-image: linear-gradient(to top, rgb(1, 58, 81), 26%, rgb(0, 229, 158));

    function clickColumn(e) {
        let description = e.target.getAttribute('data-description');
        props.onClick(description)
    }
    

    function getColumn() {

        const positions = [
            { bottom:  80},
            { bottom: 60},
            { top: 80},
            { top: 60},
        ]
        const years = {};
        return props.data.milestones.map((d, index)=>{
            const pos = positions[index % 4];
            const year = years[d.year] ? '' : d.year;
            years[d.year] = true;

            let height = (pos.bottom || pos.top) - 50;
            let translateY = pos.bottom ? true: false;
            return (
            <Column key={d._id} onClick={clickColumn} data-description={d.description}>
                <Year> {year} </Year>
                <Card top={pos.top} bottom={pos.bottom} className='z-depth-1'>
                    <h5><img src={`http://localhost:1337${d.milestoneicons.icon.url}`} /></h5>
                    <p>{d.short_description}</p>
                </Card>
                <VerticalLine height={height} translateY={translateY} />
                <Point widthPoint={6} />
            </Column>
            );
        });
    }

    if (!props.data || !props.data.milestones) return (<div />)

    return (
        <Container>
            {getColumn()}
            <LineMiddle />
        </Container>
    );
})