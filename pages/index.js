import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import trolley from '../public/assets/icons8-01-trolley-sbts2018-outline/icon-trolley-58.png';
import collection from '../public/assets/icons8-multiple-artist-collection-of-music-and-songs-from-different-distributors-tal-revivo-light/icon-collection-48.png';

export default function Home() {
  return (
    <>
      <LandingBody>
        <NavWrapper>
          <Link href="/collection">
            <NavLink>
              browse your collection
              <Image
                alt="to collection"
                src={collection}
                // layout="responsive"
                width={80}
                height={50}
              />
            </NavLink>
          </Link>
          <Slogan>
            Get ready for your gig. Pack your <em>RecordBag</em>.
          </Slogan>
          <Link href="/recordbag">
            <NavLink>
              <Image
                alt="to recordbag"
                src={trolley}
                // layout="responsive"
                width={80}
                height={60}
              />
              check what's in your bag
            </NavLink>
          </Link>
        </NavWrapper>
      </LandingBody>
    </>
  );
}

const LandingBody = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 5rem;
  background-color: #333333;
  height: 100vh;
  width: 100vw;
  z-index: 1;
`;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 2rem;
  /* top: -4rem; */
`;

const Slogan = styled.h1`
  text-align: center;
  color: white;
  width: 60vw;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  margin: 3rem;
  :hover {
    color: hotpink;
    cursor: pointer;
  }
`;
