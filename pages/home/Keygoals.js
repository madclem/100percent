import styled from 'styled-components';
import Keyword from './Keygoal';

export default function Keywords () {

    const Container = styled.div`
        margin: 50px auto;
    `;
    return (
        <Container className='container'>
            <div className='row'>
                <Keyword className='col s8 offset-s2 m4' title='GOAL 1' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' />
                <Keyword className='col s8 offset-s2 m4' title='GOAL 2' description='Donec interdum, massa ac mattis ultrices.' />
                <Keyword className='col s8 offset-s2 m4' title='GOAL 3' description='ipsum lectus vestibulum metus, et varius tortor ligula vel felis.' />
            </div>
        </Container>
    );
}