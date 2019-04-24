import React, { useEffect } from 'react'
import styled from 'styled-components';
import Layout from 'components/Layout';
import { withRouter } from 'next/router'
import gql from "graphql-tag";
import { Query } from "react-apollo";

const Container = styled.div`
    margin-bottom: 80px;
`;

const Separator = styled.div`
    padding-top: 80px;
`;

const query = gql`
    query speakers($id: ID!) {
        speakers(where:{id: $id}) {
            _id
            name
            description
            photo {
                url
            }
        }
    }
`;

export default withRouter(function Speakers (props) {

    // console.log('props router', props.router.query);
    useEffect(() => {
    }, [props.router.query])
    
    return (
        <Layout>
            <Separator />
            <Container className='container'>
                <Query query={query} variables={{id: props.router.query.id}}>
                    {({ loading, error, data }) => {
                        if (loading) {
                        return null;
                        }

                        if (error) {
                        return `Error: ${error}`;
                        }

                        return (
                        <div>
                            <img src={`http://localhost:1337${data['speakers'][0].photo.url}`} alt='photo' />
                            <h1>{data['speakers'][0].name}</h1>
                            <p>{data['speakers'][0].description}</p>
                        </div>
                        )
                    }}
                </Query>
            </Container>
        </Layout>
    );
})