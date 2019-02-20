import media from 'utils/styles/media';
import styled from 'styled-components';

export default styled.div`
    width: 100%;
    ${media.tablet`
        height: 100%;
        width: 75px;

        :first-child {
            border-left: 1px dashed rgba(0,0,0,.1);
        }

        border-right: 1px dashed rgba(0,0,0,.1);
        position: relative;
        transition: background-color 100ms ease-in 0s;

        :hover {
            background-color: #e5e5e5;
        }
    `}
`;