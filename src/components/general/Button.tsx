import React from 'react';
import styled from 'styled-components';

interface StyledProps {
  bgColor?: string;
  color?: string;
  width?: string;
  margin?: string;
  fontSize?: string;
  fontWeight?: string;
}

const Button = styled.button<StyledProps>`
  display: inline-block;
  background-color: ${props => props.bgColor || props.theme.colors.main};
  color: ${props => props.color || 'white'};
  width: ${props => props.width || '100%'};
  padding: 12px 16px 12px 16px;
  margin: ${props => props.margin || '4px'};
  border: none;
  border-radius: 4px;
  font-size: ${props => props.fontSize || ''};
  font-weight: ${props => props.fontWeight || '600'};
`;

export default Button;
