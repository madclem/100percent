import React from 'react';
import styled from 'styled-components';
import gql from "graphql-tag";
import { graphql } from "react-apollo";


const query = gql`
{
    quotes {
        name
        quote
    }
}
`;

export default graphql(query, {
    props: ({ data }) => ({
        data
    })
})(function Quote (props) {

    const Container = styled.div`
        display: flex;
        align-items: flex-end;
        justify-content: space-around;
    `;
    const Quote = styled.p`
        font-style: italic;
        text-align:center;
        width: 80%;
        margin: 30px auto;
    `;

    const Author = styled.span`
        display: block;
        font-style: normal;
        margin-top: 20px;
    `;

    const QuotationMark = styled.p`
        // font-weight: bold;
        font-family: Georgia, serif;
        font-size: 64px;
        font-style: italic;
    `;

    let quote
    if (!props.data || !props.data.quotes || props.data.quotes.length === 0) {
        quote = <div>No quotes found</div>
    }
    else {
        let q = props.data.quotes[Math.floor(Math.random() * props.data.quotes.length)]
        quote = (
            <React.Fragment>
                <QuotationMark className='grey-text'>"</QuotationMark>
                <Quote className='grey-text text-darken-2'>
                    {q.quote}
                    <Author>{q.name}</Author>
                </Quote>
                <QuotationMark className='grey-text'>"</QuotationMark>
            </React.Fragment>
        )
    }
    return (
        <Container className='container'>
            {quote}
        </Container>
    );
})