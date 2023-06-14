import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';

const HeaderNav = () => {
  const Router = useRouter();

  return (
    <HeaderNavWrapper>
      <NavLink active={Router.pathname === "/"} href="/">
        Campaigns
      </NavLink>
      <NavLink active={Router.pathname === "/createcampaign"} href="/createcampaign">
        Create Campaign
      </NavLink>
      <NavLink active={Router.pathname === "/dashboard"} href="/dashboard">
        Dashboard
      </NavLink>
    </HeaderNavWrapper>
  );
};

const HeaderNavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.bgDiv};
  padding: 6px;
  height: 50%;
  border-radius: 10px;
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.active ? props.theme.bgSubDiv : props.theme.bgDiv)};
  height: 100%;
  font-family: 'Roboto';
  margin: 5px;
  border-radius: 10px;
  padding: 0 5px 0 5px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  font-size: small;
  text-decoration: none;
  color: inherit;

  &:hover {
    background-color: ${(props) => props.theme.bgSubDiv};
  }
`;

export default HeaderNav;
