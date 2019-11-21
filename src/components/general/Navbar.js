import React from 'react';
import styled from 'styled-components';
import { ReactComponent as AlgopitSVG } from '../../assets/Algopit.svg';
import { useTheme } from '@aragon/ui';

const StyledSection = styled.section`
  position: relative;
  z-index: 99;
  width: 100vw;
  height: 64px;
  background: ${props => props.theme.colors.white};
  border-bottom: 1px solid ${props => props.borderColor || ''};
  display: flex;
  align-items: center;
  padding: 16px;
  .separator {
    flex-grow: 1;
  }
`;

const Icon = styled(AlgopitSVG)`
  width: 48px;
  height: 48px;
  margin-right: 32px;
`;

const LinkList = styled.ul`
  color: black;
  > li {
    display: inline;
    position: relative;
    z-index: 101;
    font-weight: 600;
    font-size: 16px;
    margin: 0 16px 0 16px;
    transition: 100ms;
    ::after {
      position: absolute;
      z-index: -1;
      top: -20%;
      left: -10%;
      content: '';
      background: rgba(51, 112, 185, 0);
      width: 120%;
      height: 150%;
      border-radius: 4px;
      transition: 100ms;
    }
    :hover {
      color: white;
      ::after {
        position: absolute;
        z-index: -1;
        top: -20%;
        left: -10%;
        content: '';
        background: ${props => props.hoverColor};
        width: 120%;
        height: 150%;
        border-radius: 4px;
      }
    }
  }
`;

const PlaceholderIcon = styled.div`
  width: 48px;
  height: 48px;
  background: #ec6b9e;
  border-radius: 50%;
`;

const Navbar = () => {
  const theme = useTheme();
  return (
    <StyledSection id="navbar" borderColor={theme.border}>
      <div className="separator" />
      <Icon />
      <LinkList hoverColor={theme.accent}>
        <li>Problems</li>
        <li>Lists</li>
        <li>Challenges</li>
      </LinkList>
      <div className="separator" />
      <PlaceholderIcon />
      <div className="separator" />
    </StyledSection>
  );
};

export default Navbar;
