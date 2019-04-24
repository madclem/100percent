import styled, {css} from 'styled-components';

const sizes = {
    desktopExtraLarge: 1000000,
    desktopLarge: 1440,
    desktop: 1196,
    responsive850: 850,
    tablet: 768,
    mobileLarge: 480,
    mobile: 375,
}

export default Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (min-width: ${sizes[label] / 16}em) {
        ${css(...args)}
        }
    `
    return acc || {}
}, {});;