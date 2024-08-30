import Link from 'next/link';
import styled from 'styled-components';


// NavbarContainer styled component
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2e3b27;
  padding: 1rem 2rem;
  color: white;
  width: 100%; // Make sure it spans the full width
  box-sizing: border-box;
  position: fixed; // Fixes the navbar at the top
  top: 0;
  left: 0;
  z-index: 2000;
`;

// NavLinks styled component
const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Navbar = () => (
  <NavbarContainer>
    <div>SHIRLY HANDCRAFT</div>
    <NavLinks>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/products">Products</Link>
      <Link href="/contact">Contact</Link>
    </NavLinks>
  </NavbarContainer>
);

export default Navbar;
