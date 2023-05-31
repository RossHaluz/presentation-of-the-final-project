import about_bg from '../img/about-bg.png';
import { Img, Elips } from './AboutProjectImg.styled';

const AboutProjectImg = () => {
  return (
    <>
      <Elips></Elips>
      <Img src={about_bg} alt="About bg" width="1047" height="700" />;
    </>
  );
};

export default AboutProjectImg;
