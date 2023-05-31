import SectionTitle from 'components/SectionTitle';
import person from './img/person.png';
import union from './img/icons/union.png';
import {
  Img,
  UserPersonaWrapper,
  UserPersonaName,
  UserPersonaItem,
  UserPersonaList,
  UserPersonaItemText,
  UserPersonaDescWrapper,
  UserPersonaContainer,
  Elipse,
} from './UserPersona.styled';

const UserPersona = () => {
  return (
    <UserPersonaContainer>
      <SectionTitle num="04">User persona</SectionTitle>
      <UserPersonaWrapper>
        <Img src={person} alt="Person" width="428" height="545" />
        <UserPersonaDescWrapper>
          <UserPersonaName>Anastasiia, 22 y.o.</UserPersonaName>
          <UserPersonaList>
            <UserPersonaItem>
              <img src={union} alt="Union" />
              <UserPersonaItemText>Lorem ipsum</UserPersonaItemText>
            </UserPersonaItem>
            <UserPersonaItem>
              <img src={union} alt="Union" />
              <UserPersonaItemText>Lorem ipsum</UserPersonaItemText>
            </UserPersonaItem>
            <UserPersonaItem>
              <img src={union} alt="Union" />
              <UserPersonaItemText>Lorem ipsum</UserPersonaItemText>
            </UserPersonaItem>
            <UserPersonaItem>
              <img src={union} alt="Union" />
              <UserPersonaItemText>Lorem ipsum</UserPersonaItemText>
            </UserPersonaItem>
            <UserPersonaItem>
              <img src={union} alt="Union" />
              <UserPersonaItemText>Lorem ipsum</UserPersonaItemText>
            </UserPersonaItem>
          </UserPersonaList>
        </UserPersonaDescWrapper>
      </UserPersonaWrapper>
      <Elipse></Elipse>
    </UserPersonaContainer>
  );
};

export default UserPersona;
