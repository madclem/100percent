import React from 'react';
import styled from 'styled-components';

export default function Quote () {

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

    return (
        <Container className='container'>
            <QuotationMark className='grey-text'>"</QuotationMark>
            <Quote className='grey-text text-darken-2'>
                Morbi mattis nec magna at mollis. Nullam pellentesque odio metus, nec vestibulum sem vulputate in. Praesent interdum, mauris a convallis vestibulum, arcu urna placerat nulla, in viverra dui quam sed elit.
                <Author>Michelle</Author>
            </Quote>
            <QuotationMark className='grey-text'>"</QuotationMark>
            
        </Container>
    );
}