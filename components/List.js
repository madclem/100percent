import React from 'react';
import styled from 'styled-components';

export default function List (props) {

    const ListStyled = styled.div`
        display: flex;

        a {
            margin: 0 20px;

            &:first-child {
                margin-left: 0;
            }
        }

    `;

    function getList(){
        let list = props.options || [];
        return list.map((l)=>{
            return (
                <a href='#' key={l.id}>{l.name}</a>
            );
        });
    }
        
    return (
        <ListStyled>
            { getList() }
        </ListStyled>
    );
}