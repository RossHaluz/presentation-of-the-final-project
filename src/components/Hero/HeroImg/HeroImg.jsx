import { Img, ImgBloor } from './HeroImg.styled';
import hero_bg from './img/hero-bg.png';

const HeroImg = () => {
  return (
    <div>
      <ImgBloor></ImgBloor>
      <Img src={hero_bg} alt="Hero bg" width="558" height="553" />
    </div>
  );
};

export default HeroImg;
