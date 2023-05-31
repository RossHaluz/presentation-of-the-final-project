import {
  AboutProjectWrapper,
  AboutProjectContainer,
  AboutProjectNumber,
  Title,
} from './AboutProjectTitle.styled';

const AboutProjectTitle = () => {
  return (
    <AboutProjectContainer>
      <AboutProjectWrapper>
        <AboutProjectNumber>01</AboutProjectNumber>
        <Title>About project</Title>;
      </AboutProjectWrapper>
    </AboutProjectContainer>
  );
};

export default AboutProjectTitle;
