import React from 'react';
import styled from 'styled-components';

const ListStyled = styled.div`
    display: flex;

    a {
        margin: 0 20px;

        &:first-child {
            margin-left: 0;
        }
    }

`;

export default function List (props) {


    function getList(){
        let list = props.options || [];
        return list.map((l)=>{
            return (
                <a href={`/speakers/${l._id}`} key={l._id}>{l.name}</a>
            );
        });
    }
        
    return (
        <ListStyled>
            { getList() }
        </ListStyled>
    );
}