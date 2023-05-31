const {
  SectionWrapper,
  SectionNumber,
  Title,
} = require('./SectionTitle.styled');

const SectionTitle = ({ num, children }) => {
  return (
    <SectionWrapper>
      <SectionNumber>{num}</SectionNumber>
      <Title>{children}</Title>
    </SectionWrapper>
  );
};

export default SectionTitle;
