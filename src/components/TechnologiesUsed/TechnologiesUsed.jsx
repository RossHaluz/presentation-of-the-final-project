import SectionTitle from 'components/SectionTitle';
import {
  TechnologiesUsedDescWrapper,
  TechnologiesUsedWrapper,
  TechnologiesUsedTitle,
  TechnologiesUsedList,
  TechnologiesUsedContainer,
  TechnologiesUsedItem,
  Elipse,
  TechnologiesUsedItemText,
} from './TechnologiesUsed.styled';

const TechnologiesUsed = () => {
  return (
    <TechnologiesUsedContainer>
      <SectionTitle num="05">Technologies used</SectionTitle>
      <TechnologiesUsedWrapper>
        <TechnologiesUsedDescWrapper>
          <TechnologiesUsedTitle>Front-end</TechnologiesUsedTitle>
          <TechnologiesUsedList>
            <TechnologiesUsedItem>
              <Elipse></Elipse>
              <TechnologiesUsedItemText>HTML/CSS</TechnologiesUsedItemText>
            </TechnologiesUsedItem>
            <TechnologiesUsedItem>
              <Elipse></Elipse>
              <TechnologiesUsedItemText>JavaScript</TechnologiesUsedItemText>
            </TechnologiesUsedItem>
            <TechnologiesUsedItem>
              <Elipse></Elipse>
              <TechnologiesUsedItemText>ReactJS</TechnologiesUsedItemText>
            </TechnologiesUsedItem>
            <TechnologiesUsedItem>
              <Elipse></Elipse>
              <TechnologiesUsedItemText>Material UI</TechnologiesUsedItemText>
            </TechnologiesUsedItem>
          </TechnologiesUsedList>
        </TechnologiesUsedDescWrapper>

        <TechnologiesUsedDescWrapper>
          <TechnologiesUsedTitle>Back-end</TechnologiesUsedTitle>
          <TechnologiesUsedList>
            <TechnologiesUsedItem>
              <Elipse></Elipse>
              <TechnologiesUsedItemText>Node.js</TechnologiesUsedItemText>
            </TechnologiesUsedItem>
            <TechnologiesUsedItem>
              <Elipse></Elipse>
              <TechnologiesUsedItemText>Express</TechnologiesUsedItemText>
            </TechnologiesUsedItem>
            <TechnologiesUsedItem>
              <Elipse></Elipse>
              <TechnologiesUsedItemText>MongoDB</TechnologiesUsedItemText>
            </TechnologiesUsedItem>
          </TechnologiesUsedList>
        </TechnologiesUsedDescWrapper>

        <TechnologiesUsedDescWrapper>
          <TechnologiesUsedTitle>Utilities</TechnologiesUsedTitle>
          <TechnologiesUsedList>
            <TechnologiesUsedItem>
              <Elipse></Elipse>
              <TechnologiesUsedItemText>VSCode</TechnologiesUsedItemText>
            </TechnologiesUsedItem>
            <TechnologiesUsedItem>
              <Elipse></Elipse>
              <TechnologiesUsedItemText>Parcel</TechnologiesUsedItemText>
            </TechnologiesUsedItem>
            <TechnologiesUsedItem>
              <Elipse></Elipse>
              <TechnologiesUsedItemText>Figma</TechnologiesUsedItemText>
            </TechnologiesUsedItem>
            <TechnologiesUsedItem>
              <Elipse></Elipse>
              <TechnologiesUsedItemText>Git/GitHub</TechnologiesUsedItemText>
            </TechnologiesUsedItem>
          </TechnologiesUsedList>
        </TechnologiesUsedDescWrapper>
      </TechnologiesUsedWrapper>
    </TechnologiesUsedContainer>
  );
};

export default TechnologiesUsed;
