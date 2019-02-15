import React, {Component} from 'react'
import styled from 'styled-components';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import Intro from './home/Intro';
import Speakers from './home/Speakers';
import Parallax from './home/Parallax';
import Experiment from './home/Experiment';
import Keygoals from './home/Keygoals';
import Quote from './home/Quote';
import Divider from 'components/Divider';

export default function index () {
    return (
        <React.Fragment>
            <NavBar />
            <Experiment />
            <Intro />
            <Divider />
            <Keygoals />
            <Parallax />
            <Speakers />
            <Divider />
            <Quote />
            <Footer />
        </React.Fragment>
    );
}