import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Image from 'next/image';
import recordIcon from '../public/assets/icon-record.png';
import recordIconFilled from '../public/assets/icon-record.png';
import trolley from '../public/assets/icons8-01-trolley-sbts2018-outline/icon-trolley-58.png';
import collection from '../public/assets/icons8-multiple-artist-collection-of-music-and-songs-from-different-distributors-tal-revivo-light/icon-collection-48.png';

export default function Footer() {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <NavFooter>
      <Navbar>
        <Link href="/collection" passHref>
          <StyledLinks active={'/collection' === currentRoute}>
            <IconWrapperCollection>
              <Image
                alt="to collection"
                src={collection}
                width={30}
                height={30}
              />
            </IconWrapperCollection>
          </StyledLinks>
        </Link>
        <Link href="/recordbag" passHref>
          <StyledLinks active={'/recordbag' === currentRoute}>
            <IconWrapperBag>
              <Image alt="to recordbag" src={trolley} width={35} height={25} />
            </IconWrapperBag>
          </StyledLinks>
        </Link>
      </Navbar>
    </NavFooter>
  );
}

const IconWrapperBag = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  margin: 0.1rem;
  gap: 1rem;
`;

const IconWrapperCollection = styled.div`
  display: grid;
  justify-content: center;

  margin: 0.1rem;
  gap: 1rem;
`;

const StyledLinks = styled.a`
  background-color: ${(props) => (props.active ? 'gray' : '#333333')};
  /* color: white;
  text-decoration: ${(props) => (props.active ? 'line-through' : 'none')}; */
  /* color: ${(props) => (props.active ? '#333333' : 'white')};
  background-color: ${(props) => (props.active ? 'white' : '#333333')}; */
  cursor: pointer;
  text-decoration: none;
  padding: 0.2rem;
  border-radius: 50%;
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
