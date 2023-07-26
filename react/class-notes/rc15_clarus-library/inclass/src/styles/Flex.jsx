

import styled from 'styled-components';

const Div = styled.div`
display:flex;
justify-content: ${({justify})=>justify || "center"};
align-items: ${({align})=>align || "center"};
flex-wrap: ${({wrap})=>wrap || "nowrap"};
`;

export default Div;
