import Image from 'next/image';
import heroImage from '../public/images/hero.jpg';
const HomePage = () => {
  return (
    <div>
      <Image
        src={heroImage} alt="Hero Image" 
        width={1000}
        height={500}
      />
    </div>
  );
};

export default HomePage;
