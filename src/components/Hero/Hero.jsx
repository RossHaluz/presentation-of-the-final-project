import { HeroWrapper, HeroContainer } from './Hero.styled';
import HeroBtn from './HeroBtn';
import HeroDesc from './HeroDesc';
import HeroImg from './HeroImg';
import HeroTitle from './HeroTitle';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroWrapper>
        <HeroTitle />
        <HeroDesc />
        <HeroBtn />
      </HeroWrapper>
      <HeroImg />
    </HeroContainer>
  );
};

export default Hero;
