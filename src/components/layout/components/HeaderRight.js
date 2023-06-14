import React from 'react'
import styled from 'styled-components'
import Brightness6Icon from '@mui/icons-material/Brightness6';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import {App} from '../Layout';
import { useContext } from 'react';
import Wallet from './Wallet';


const HeaderRight = () => {
    const ThemeToggler = useContext(App);
  return (
    <HeaderRightWrapper>
        <Wallet/>
        <ThemeToggle>
        {ThemeToggler.theme === 'light' ? <DarkModeIcon onClick={ThemeToggler.changeTheme}/> :<Brightness6Icon onclick={ThemeToggler.changeTheme}/> }
        </ThemeToggle>

    </HeaderRightWrapper>
  )
}

const HeaderRightWrapper = styled.div`
display: flex;
align-items: center;
justify-content:center;
margin-right: 25px;
height: 60%;


`

const ThemeToggle = styled.div`
display: flex;
align-items: center;
justify-content:center;
border-radius: 12px;
background-color: ${(props)=> props.theme.bgDiv};
height: 100%;
padding: 5px;
width: 45px;
cursor: pointer;


`
export default HeaderRight
