import styled from 'styled-components';

export default function Keyword (props) {

    const ContainerKeyword = styled.div`
        text-align: center;
        margin: 30px 0;
    `;

    const Icon = styled.i`
        padding: 30px;
        border-radius: 100%;
    `;
    const H2 = styled.h4`
    `;

    const Paragraph = styled.p`
        width: 80%;
        margin:auto;
    `;

    return (
        <ContainerKeyword className={props.className}>
            <Icon className='material-icons large grey lighten-2'>desktop_mac</Icon>
            <H2 className=''>{props.title}</H2>
            <Paragraph>{props.description}</Paragraph>
        </ContainerKeyword>
    );
}