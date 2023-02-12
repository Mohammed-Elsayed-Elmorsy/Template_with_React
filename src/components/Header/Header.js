import {HeaderStyled , Ulstyle , LiStyle , AnchorStyle} from './headerStyle'
import { Link,NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <HeaderStyled> 
      <h2 style={{padding:"0px 15px"}}>Ultra</h2>
      <Ulstyle>
        <LiStyle>
            <NavLink className='Link' to="/">Home</NavLink>
        </LiStyle>
        <LiStyle>
            <NavLink className='Link' to="/about">About</NavLink>
        </LiStyle>
        <LiStyle>
        <NavLink className='Link' to="/port">Portfolio</NavLink>
        </LiStyle>
        <LiStyle>
            <NavLink className='Link' to="/contact">Contact</NavLink>
        </LiStyle>
      </Ulstyle>
    </HeaderStyled>
  )
}

export default Header
