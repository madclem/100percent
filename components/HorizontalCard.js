import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
    max-width: 800px;
    margin: auto;
`;

const LinkStyled = styled.a`
`;

export default function  (props) {

    return (
        <Container className="card horizontal">
            <div className="card-image">
                <img src={props.main_photo ? `http://localhost:1337${props.main_photo.url}` : "https://lorempixel.com/100/190/nature/6"} />
            </div>

            <div className="card-stacked">
                <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{props.title || 'Card Title'}<i className="material-icons right">more_vert</i></span>
                    <p>{props.description}</p>
                </div>
                <div className="card-action">
                <Link as={`/events/${props._id}`} href={'/event?id=' + props._id}><LinkStyled >See event</LinkStyled></Link>
                </div>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{props.title || 'Card Title'}<i className="material-icons right">close</i></span>
                <p>{props.full_description}</p>
            </div>
        </Container>
    );
}