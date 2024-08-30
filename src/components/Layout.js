import Head from 'next/head';
import styled from 'styled-components';
import Navbar from './Navbar'; // Import Navbar here


// Container styled component
const Container = styled.div`
  padding: 0 2rem;
`;

// Main styled component
const Main = styled.main`
  min-height: 200vh;
  padding: 4rem 9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// Footer styled component
const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
`;

const Layout = ({ children }) => (
  <Container>
    <Head>
      <title>Shirly Handcraft</title>
     
    </Head>
    <Navbar /> {/* Include Navbar here */}
    <Main>{children}</Main>
    <Footer>
      <p>&copy; 2024 Shirly Handcraft. All rights reserved.</p>
    </Footer>
  </Container>
);

export default Layout;
