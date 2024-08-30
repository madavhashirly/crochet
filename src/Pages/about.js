import Layout from '../components/Layout';
import styled from 'styled-components';
import Image from 'next/image'; 
import heroImage from '../public/images/hero.jpg';

const AboutSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 2rem;
  flex-wrap: wrap;

  div {
    flex: 1;
    min-width: 500px;
  }

  h2 {
    color: #28a745;
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`;

export default function About() {
  return (
    <Layout>
      <AboutSection>
        <div>
          <h2>Unique handcrafted creations</h2>
          <p>
            At Shirly Handcraft, we blend traditional crochet techniques with contemporary designs to create stunning, personalized clothing and home decor items. Each piece is a unique work of art, meticulously crafted in Cape Town with love and care.
          </p>
          <p>
            Our commitment to quality ensures that every item not only represents your individual style but also celebrates the artistry of handmade craftsmanship.
          </p>
          <a href="/contact">Get in touch</a>
        </div>
        <div>
          <Image
 src={heroImage} alt="Hero Image" 
            width={500}
            height={500}
            style={{ borderRadius: '10px', objectFit: 'cover' }}
          />
        </div>
      </AboutSection>
    </Layout>
  );
}