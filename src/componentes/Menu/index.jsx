import { NavLink } from "react-router-dom"
import styled from "styled-components"

const MenuEstilizado = styled.ul`
    display: flex;
    gap: 25px;

    a {
    text-decoration: none;
  }

  li {
    color: #FFFFFF;
    font-size: 1.25rem;
    list-style: none;
    background-color: #262626;
    border: 2px solid #FFFFFF;
    border-radius: 15px;
    width: 180px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: SourceSansProBlack;
  }

  .active {
    li {
      border-color: #2271D1;
      color: #2271D1;
      box-shadow: inset 2px 2px 8px #2271D1, inset -2px -2px 8px #2271D1;
    }
  }
`


const Menu = () => {
    return (
            <MenuEstilizado>
                <NavLink to="/" activeclassname="active" exact="true">
                    <li>HOME</li>
                </NavLink>
                <NavLink to="/novovideo" activeclassname="active" exact="true">
                    <li>NOVO VÍDEO</li>
                </NavLink>
            </MenuEstilizado>
    )
}

export default Menu