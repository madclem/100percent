import React from 'react';
import styled from 'styled-components';

export default function Divider (props) {
    const DividerStyled = styled.div`
        width: 40%;
        border-bottom: 1px solid rgba(0,0,0, .1);
        margin: auto;
        margin-top: ${propsStyled => propsStyled.top || 0}px;
        margin-bottom: ${propsStyled => propsStyled.bottom || 0}px;
    `;
    
    return (
        <DividerStyled top={props.top} bottom={props.bottom} />
    );
}