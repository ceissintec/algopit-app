/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

interface WrapperProps {
  height?: string;
}

const Wrapper = styled.div<WrapperProps>`
  height: ${props => props.height || 'calc(100% - 60px)'};
  width: 100vw;
  background-color: ${props => props.theme.colors.backdrop};
`;

export default Wrapper;
