import styled from 'styled-components';
import Link from 'next/link';

import CONSTRAINTS from 'constants/constraints';

import MobileNav from 'components/navigation/MobileNav';

const NavContainer = styled.nav`
  margin-top: 20px;
  z-index: 1; // for stars
  ${CONSTRAINTS.DEFAULT_BP} {
    display: none;
  }
`
const NavContents = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
`
const NavItem = styled.li`
  margin-left: 10px;
  margin-right: 10px;

  a {
    font-size: 18px;
    text-decoration: none;
    color: white;
    font-weight: bold;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

    position: relative;
    &:hover {
      cursor: pointer;
    }
  }

  a::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: white;
    bottom: -8px;
    left: 0;
    border-radius: 3px;

    transition: transform 0.3s ease;
    transform: scaleX(0);
  }

  a:hover::before {
    transform: scaleX(1);
  }
`


function NavBar() {
  return(
    <>
    <NavContainer>
      <NavContents>
        <NavItem><Link href="#mission">Our Mission</Link></NavItem>
        <NavItem><Link href="#hackathons">Hackathons</Link></NavItem>
        <NavItem><Link href="#team">Meet the Team</Link></NavItem>
        <NavItem><Link href="#support">Support Us</Link></NavItem>
        <NavItem><Link href="#open-source">Open Source</Link></NavItem>
      </NavContents>
    </NavContainer>
    <MobileNav/>
    </>
  )
}

export default NavBar;