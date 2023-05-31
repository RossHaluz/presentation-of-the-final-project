import {
  FooterContainer,
  FooterText,
  FooterWrapper,
  Img,
} from './Footer.styled';
import footer_dog from './img/footer-dog.png';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterText>Thanks for watching!</FooterText>
        <Img src={footer_dog} alt="Dog" width="450" height="370" />
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
