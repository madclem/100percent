import React from 'react';
import styled from 'styled-components';
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const Intro = ({data: { loading, error, posts }}) => {

    const IntroStyled = styled.p`
        text-align:center;
        width: 80%;
        margin: 50px auto;
    `;

    console.log(posts);
    
    return (
        <div className='container'>
            <IntroStyled>Morbi mattis nec magna at mollis. Nullam pellentesque odio metus, nec vestibulum sem vulputate in. Praesent interdum, mauris a convallis vestibulum, arcu urna placerat nulla, in viverra dui quam sed elit. Ut consequat sollicitudin erat, sed dapibus felis sodales vel. Morbi elementum tortor et eros facilisis, non ullamcorper orci semper. Fusce ante leo, fringilla sed fermentum id, tempor eu quam. Maecenas mattis molestie nisl, in varius massa rhoncus vel. Phasellus at suscipit felis.</IntroStyled>
        </div>
    );
}


const query = gql`
{
    posts {
        _id
        name
        content
        cover {
            url
        }
    }
}
`;

export default graphql(query, {
    props: ({ data }) => ({
        data
    })
})(Intro);