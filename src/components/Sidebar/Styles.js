import styled from 'styled-components'

export const SidebarNav = styled.div`
    position: fixed;  
    left: 0; 
    top: 0; 
    background-color: #302d46;
    min-height: 100vh; 
    width: 250px; 
    display: flex; 
    flex-direction: column; 
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    z-index: 10; 
`

export const Logo = styled.div`
    height: 60px; 
    display: flex; 
    align-items: center; 
    padding-left: 15px; 
    color: #eeeeee;
    
`

export const NavItemList = styled.div`
  
`

export const NavItem = styled.p`
    display: flex; 
    align-items: center; 
    padding: 15px 0px 15px 15px; 
    margin: 0px; 
    color: #92a1d5;
   
    font-weight: bold; 
    transition: 0.15s ease-in; 

    &:hover{
        background-color: #59566A;
    }
`