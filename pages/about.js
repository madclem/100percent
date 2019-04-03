import React, {useEffect} from 'react'
import styled from 'styled-components';
import NavBar from 'components/NavBar';
import Layout from 'components/Layout';
import Author from 'components/Author';
import Footer from 'components/Footer';
import Timeline from 'components/Timeline/Timeline';
import Intro from './home/Intro';
import Speakers from './home/Speakers';
import Parallax from './home/Parallax';
import Experiment from './home/Experiment';
import Keygoals from './home/Keygoals';
import Quote from './home/Quote';
import Divider from 'components/Divider';

const Title = styled.h3`
    margin-top: 80px;
`;
const Paragraph = styled.p`
    width: 80%;
    margin:auto;
    margin-bottom: 20px;

    &.last {
        margin-bottom: 80px;
    }
`;

const AuthorContainer = styled.div`
    margin: 40px 0 80px 0;
    padding-top: 20px;
`;

const ContainerTimeline = styled.div`
    max-width: 100%;
    background-color: #f6f6f6;
`;

const TitleMilestones = styled.p`
    font-weight: bold;
    font-size: 16px!important;
    text-transform: uppercase;
    margin: 30px 0;
    text-decoration: underline;
`;

export default function About () {

    let instances;

    function openModal(text) {
        console.log('text', text);
        
        document.getElementById('textToReplace').innerHTML = text
        instances[0].open()
    }

    useEffect(() => {
        let elems = document.querySelectorAll('.modal');
        instances = M.Modal.init(elems, {});

        return function cleanUp() {
            instances.forEach(element => {
                element.destroy();
            });
        }
    });


    

    return (
        <Layout>
            <Experiment />
            <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

            <div className='container'>
                <Title className='center-align'> What do we do </Title>
                <Paragraph className='center-align'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut felis vel arcu iaculis laoreet. Quisque molestie suscipit lacinia. Pellentesque venenatis efficitur fringilla. Aliquam erat volutpat. Nunc posuere nunc erat, ac varius purus consequat at. Nam luctus leo felis, non lacinia augue suscipit non. Fusce lectus risus, laoreet non posuere at, ullamcorper ut purus. </Paragraph>

                <Title className='center-align'> Why do we do it </Title>
                <Paragraph className='last center-align'> Vestibulum ut felis vel arcu iaculis laoreet. Quisque molestie suscipit lacinia. Pellentesque venenatis efficitur fringilla. Aliquam erat volutpat. Nunc posuere nunc erat, ac varius purus consequat at. Nam luctus leo felis, non lacinia augue suscipit non. Fusce lectus risus, laoreet non posuere at, ullamcorper ut purus. </Paragraph>
                
                <Divider />

            </div>
            <div className='container'>
                <TitleMilestones> Milestones </TitleMilestones>
            </div>
            <ContainerTimeline>
                <Timeline onClick={openModal}/>
            </ContainerTimeline>
            <div className='container'>
                <AuthorContainer>
                    <Author image="/static/img/deborah.png" title='Founder: Deborah Gilshan' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut felis vel arcu iaculis laoreet. Aliquam erat volutpat. Nunc posuere nunc erat, ac varius purus consequat at.' /> 
                </AuthorContainer>
            </div>

            <div id="modal1" className="modal">
                <div className="modal-content">
                    <h4>title</h4>
                    <p id='textToReplace'></p>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">close</a>
                </div>
            </div>
        </Layout>
    );
}