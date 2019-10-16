/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as AlgopitSVG } from '../../assets/Algopit.svg';

const StyledSection = styled.section`
  position: relative;
  z-index: 99;
  width: 100vw;
  height: 64px;
  background: ${props => props.theme.colors.main};
  display: flex;
  align-items: center;
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
  color: white;
  > li {
    display: inline;
    position: relative;
    z-index: 101;
    font-family: 'Poppins', Helvetica, sans-serif;
    font-weight: 600;
    font-size: 16px;
    margin: 0 16px 0 16px;
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
      transition: 0.3s;
    }
    :hover {
      ::after {
        position: absolute;
        z-index: -1;
        top: -20%;
        left: -10%;
        content: '';
        background: rgba(51, 112, 185, 0.3);
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
  background: #82abdd;
  border-radius: 50%;
`;

const Navbar: React.FC = () => {
  return (
    <StyledSection id="navbar">
      <div className="separator" />
      <Icon />
      <LinkList>
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
