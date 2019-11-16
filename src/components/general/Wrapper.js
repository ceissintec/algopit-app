import styled from 'styled-components';

const Wrapper = styled.div`
  height: ${props => props.height || 'calc(100% - 60px)'};
  width: 100vw;
  background-color: ${props => props.theme.colors.backdrop};
`;

export default Wrapper;
