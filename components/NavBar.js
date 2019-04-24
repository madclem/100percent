import React, {useEffect} from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {withRouter} from 'next/router';
import gql from "graphql-tag";
import { Query } from "react-apollo";

const query = gql`
    query events($is_next: Boolean!) {
        events(where:{is_next: $is_next}) {
            title
        }
    }
`;

const LinkStyled = styled.a`
color: ${ propsStyle => propsStyle.active ? '#ffc107':'black'};
:hover {
    background-color: transparent;
}
`;
const LinkStyledLast = styled(LinkStyled)`
    display: flex;
    align-items: center;    
`;

const Badge = styled.span`
    margin-left: 8px!important;
`;

const ContainerNavBar = styled.nav`
    position: absolute;
`;

export default withRouter(function NavBar(props) {
    
    
    const navBar = React.createRef();

    let instance;
    useEffect(()=>{
        const elem = navBar.current;
        instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });

        return function cleanup() {
            instance.destroy();
        }
    });

    const {router} = props;

    let badge = (
        <Query query={query} variables={{is_next: true}}>
            {({ loading, error, data }) => {
                if (loading) {
                    return null;
                }
                if (error) {
                    return `Error: ${error}`;
                }
                
                if (data && data['events'] && data['events'].length > 0) {
                    return (
                        <Badge className='new badge white-text orange'>1</Badge>
                    )
                }
                else {
                    return null
                }
            }}
        </Query>
    )
    return (
        <React.Fragment>
            <ContainerNavBar className='nav-wrapper transparent z-depth-1'>
                <div className="container transparent">
                    <Link href="#"><LinkStyled className="brand-logo grey-text text-darken-3">LOGO</LinkStyled></Link>
                    <Link href="#"><LinkStyled href="#" className="sidenav-trigger" data-target='mobile-links'><i className="material-icons grey-text text-darken-3">menu</i></LinkStyled></Link>
                    <ul className='right hide-on-med-and-down black-text'>
                        <li><Link href='/'><LinkStyled active={ router.pathname === '/' }>Home</LinkStyled></Link></li>
                        <li><Link href='/about'><LinkStyled active={ router.pathname === '/about' }>About</LinkStyled></Link></li>
                        <li><Link href='/press'><LinkStyled active={ router.pathname === '/press' }>Press</LinkStyled></Link></li>
                        <li><Link href='#contact'><LinkStyled>Contact</LinkStyled></Link></li>
                        <li><Link href='/events'><LinkStyledLast active={ router.pathname === '/events' }><span>Events </span>{badge}</LinkStyledLast></Link></li>
                    </ul>
                </div>
            </ContainerNavBar>

            <ul ref={navBar} className='sidenav' id='mobile-links'>
                <li><Link href='/'><LinkStyled>Home</LinkStyled></Link></li>
                <li><Link href='/about'><LinkStyled>About</LinkStyled></Link></li>
                <li><Link href='/events'><LinkStyled>Events</LinkStyled></Link></li>
                <li><Link href='/press'><LinkStyled>Press</LinkStyled></Link></li>
                <li><Link href='#'><LinkStyled>Contact</LinkStyled></Link></li>
            </ul>
        </React.Fragment>
    );
})