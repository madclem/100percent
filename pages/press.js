import React from 'react'
import styled from 'styled-components';
import Layout from 'components/Layout';

export default function Events () {
    const Container = styled.div`
        margin-bottom: 80px;
    `;

    const ContainerArticles = styled.div`
        margin-top: 40px;
    `;

    const Separator = styled.div`
        padding-top: 80px;
    `;

    const articles = [
        {
            id: 0,
            title: 'Marie Claire',
            text: 'We appeared on Marie Claire\'s article',
            link: '#'
        },
        {
            id: 1,
            title: 'Telegraph',
            text: 'We appeared on Telegraph\'s article',
            link: '#'
        },
        {
            id: 2,
            title: 'Other',
            text: 'We appeared on Other\'s article',
            link: '#'
        },
    ]

    function getArticles(){
        return  articles.map((article)=>{
            return (
                <div className="col s12 m6" key={article.id}>
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">{article.title}</span>
                            <p>{article.text}</p>
                        </div>
                        <div className="card-action">
                            <a href={article.link}>Link</a>
                        </div>
                    </div>
                </div>
            )
        });
    }

    return (
        <Layout>
            <Separator />
            <Container className='container'>
                <h2>Press</h2>
                <ContainerArticles className="row">
                    {getArticles()}
                </ContainerArticles>
            </Container>
        </Layout>
    );
}