import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';

export default function Footer() {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <NavFooter>
      <Navbar>
        <Link href="/collection" passHref>
          <StyledLinks active={'/collection' === currentRoute}>
            Collection
          </StyledLinks>
        </Link>
        <Link href="/recordbag" passHref>
          <StyledLinks active={'/recordbag' === currentRoute}>
            RecordBag
          </StyledLinks>
        </Link>
      </Navbar>
    </NavFooter>
  );
}

const StyledLinks = styled.a`
  color: ${(props) => (props.active ? '#333333' : 'white')};
  background-color: ${(props) => (props.active ? 'white' : '#333333')};
  cursor: pointer;
  text-decoration: none;
  padding: 0.2rem;
  border-radius: 3px;
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
