import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  /* height: '100vh';
    display: 'flex';
    justify-content: 'center';
    align-items: 'center'; */
  font-size: 40px;
  color: #010101;
`;

export const Link = styled(NavLink)`
  /* display: flex; */
  /* align-items: center; */
  gap: 10px;
  padding: 4px;
  border-radius: 4px;
  text-decoration: none;
  color: #000000;

  &.active {
    color: orange;
  }
`;

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  min-height: 60px;
  padding-right: 22px;
  padding-left: 22px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #2a2a2a;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
