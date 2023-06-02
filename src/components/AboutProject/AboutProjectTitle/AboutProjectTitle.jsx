import SectionTitle from 'components/SectionTitle';
import { AboutProjectContainer } from './AboutProjectTitle.styled';

const AboutProjectTitle = () => {
  return (
    <>
      <div id="about"></div>
      <AboutProjectContainer>
        <SectionTitle num="01">About project</SectionTitle>
      </AboutProjectContainer>
    </>
  );
};

export default AboutProjectTitle;
