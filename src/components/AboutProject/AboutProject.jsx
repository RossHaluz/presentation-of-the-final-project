import {
  AboutProjectWrapper,
  AbpoutProjectContainer,
} from './AboutProject.styled';
import AboutProjectDesc from './AboutProjectDesc';
import AboutProjectImg from './AboutProjectImg';
import AboutProjectTitle from './AboutProjectTitle';

const AboutProject = () => {
  return (
    <AbpoutProjectContainer>
      <AboutProjectWrapper>
        <AboutProjectTitle />
        <AboutProjectDesc />
      </AboutProjectWrapper>
      <AboutProjectImg />
    </AbpoutProjectContainer>
  );
};

export default AboutProject;
