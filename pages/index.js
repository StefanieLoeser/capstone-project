import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import trolley from '../public/assets/icons8-01-trolley-sbts2018-outline/icon-trolley-58.png';
import collection from '../public/assets/icons8-multiple-artist-collection-of-music-and-songs-from-different-distributors-tal-revivo-light/icon-collection-48.png';
import arrowUp from '../public/assets/icons8-pfeil_-lang,-hoch-sf-ultralight-filled/icon-arrow-up-50.png';
import arrowDown from '../public/assets/icon-arrow-down-50.png';

export default function Home() {
  return (
    <LandingBody>
      <NavWrapper>
        <Link href="/collection">
          <a>
            <NavLink>browse your collection</NavLink>
            <IconWrapperCollection>
              <Image
                alt="to collection"
                src={collection}
                width={30}
                height={30}
              />
              <Image alt="to collection" src={arrowUp} width={40} height={40} />
            </IconWrapperCollection>
          </a>
        </Link>
        <Slogan>
          Get ready <br />
          for your gig. <br />
          Pack your <br />
          <em>RekordBag</em>.
        </Slogan>
        <Link href="/recordbag">
          <a>
            <IconWrapperBag>
              <Image
                alt="to recordbag"
                src={arrowDown}
                width={40}
                height={40}
              />

              <Image alt="to recordbag" src={trolley} width={40} height={30} />
            </IconWrapperBag>
            <NavLink>check what&apos;s in your bag</NavLink>
          </a>
        </Link>
      </NavWrapper>
    </LandingBody>
  );
}

const LandingBody = styled.section`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #333333;
  height: 100vh;
  width: 100vw;
  z-index: 1;
`;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Source Serif Pro', serif; ;
`;

const IconWrapperCollection = styled.div`
  display: grid;
  justify-content: center;
  margin: 1rem;
  gap: 1rem;
`;

const IconWrapperBag = styled.div`
  display: grid;
  justify-content: center;
  margin: 1rem;
  gap: 1rem;
`;

const Slogan = styled.h1`
  text-align: center;
  color: white;
  width: 60vw;
  margin: 1rem;
`;

const NavLink = styled.p`
  text-decoration: none;
  text-align: center;
  border: 1px solid #fff;
  border-radius: 10px;
  width: 5.5rem;
  color: white;
  padding: 0.5rem;
  margin: 1rem;
  :hover {
    color: white;
    cursor: pointer;
    background-color: #636262;
    border: 1px solid #636262;
  }
`;
