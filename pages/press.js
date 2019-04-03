import React from 'react'
import styled from 'styled-components';
import Layout from 'components/Layout';
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const Container = styled.div`
    margin-bottom: 80px;
`;

const ContainerArticles = styled.div`
    margin-top: 40px;
`;

const Separator = styled.div`
    padding-top: 80px;
`;



const query = gql`
{
    presses {
        _id
        title
        description
        link
        is_club_related
    }
}
`;

export default graphql(query, {
    props: ({ data }) => ({
        data
    })
})(function Events (props) {

    function getArticles(pressArticles){
        return  pressArticles.map((a)=>{
            return (
                <div className="col s12 m6" key={a.id}>
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">{a.title}</span>
                            <p>{a.text}</p>
                        </div>
                        <div className="card-action">
                            <a href={a.link}>Link</a>
                        </div>
                    </div>
                </div>
            )
        });
    }

    let articles
    if (!props.data || !props.data.presses || (props.data.presses && props.data.presses.lenght < 1)) {
        articles = (<div>No articles found</div>)
    } else {
        articles = getArticles(props.data.presses)
    }

    return (
        <Layout>
            <Separator />
            <Container className='container'>
                <h2>Press</h2>
                <ContainerArticles className="row">
                    {articles}
                </ContainerArticles>
            </Container>
        </Layout>
    );
})