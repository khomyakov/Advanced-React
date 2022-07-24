import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const Logo = styled.h1`
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
  font-size: 4rem;
  margin-left: 2rem;
  z-index: 2;
  position: relative;
  background: red;
  transform: skew(-7deg);
`;

const HeaderStyles = styled.header`
  .bar {
    border-bottom: 10px solid var(--back, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: center;
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid var(--back, black);
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Logo className="logo">
          <Link href="/">Sick fits</Link>
        </Logo>
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <Nav />
    </HeaderStyles>
  );
}
