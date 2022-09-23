import Link from 'next/link';
import styled from 'styled-components';

export default function Footer() {
  return (
    <NavFooter>
      <Navbar>
        <Link href="/">
          <Navlinks>Collection</Navlinks>
        </Link>
        <Link href="/recordbag.js">
          <Navlinks>RecordBag</Navlinks>
        </Link>
      </Navbar>
    </NavFooter>
  );
}

const Navlinks = styled.a`
  /* background-image: ; */
  color: white;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

const NavFooter = styled.footer`
  background-color: #333333;
  width: 100%;
  height: 48px;
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  margin: 0;
  z-index: 1;
`;
