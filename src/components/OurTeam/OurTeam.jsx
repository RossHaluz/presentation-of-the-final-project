import SectionTitle from 'components/SectionTitle';
import user1 from './img/user1.jpg';
import user2 from './img/user2.jpg';
import user3 from './img/user3.jpg';
import user4 from './img/user4.jpg';
import user5 from './img/user5.jpg';
import user6 from './img/user6.jpg';
import user7 from './img/user7.png';
import user8 from './img/user8.jpg';
import user9 from './img/user9.jpg';
import user10 from './img/user10.jpg';

import {
  OurTeamList,
  OurTeamItem,
  OurTeamDescWrapper,
  OurTeamName,
  OurTeamDesc,
  Img,
} from './OurTeam.styled';

const OurTeam = () => {
  return (
    <div>
      <SectionTitle num="06">Our team</SectionTitle>
      <OurTeamList>
        <OurTeamItem>
          <Img src={user1} alt="Member" width="316" height="422" />
          <OurTeamDescWrapper>
            <OurTeamName>Rostyslav Haluzinskyi</OurTeamName>
            <OurTeamDesc>Team leader - Fron-end</OurTeamDesc>
            <p>
              <strong>Full-stack developer</strong>
            </p>
          </OurTeamDescWrapper>
        </OurTeamItem>
        <OurTeamItem>
          <Img src={user2} alt="Member" width="316" height="422" />

          <OurTeamDescWrapper>
            <OurTeamName>Фалач Наталья</OurTeamName>
            <OurTeamDesc>Developer</OurTeamDesc>
            <p>
              <strong>Front-end developer</strong>
            </p>
          </OurTeamDescWrapper>
        </OurTeamItem>
        <OurTeamItem>
          <Img src={user3} alt="Member" width="316" height="422" />

          <OurTeamDescWrapper>
            <OurTeamName>Рамірес Ерік</OurTeamName>
            <OurTeamDesc>Developer</OurTeamDesc>
            <p>
              <strong>Front-end developer</strong>
            </p>
          </OurTeamDescWrapper>
        </OurTeamItem>
        <OurTeamItem>
          <Img src={user5} alt="Member" width="316" height="422" />

          <OurTeamDescWrapper>
            <OurTeamName>Vlad</OurTeamName>
            <OurTeamDesc>Developer</OurTeamDesc>
            <p>
              <strong>Front-end developer</strong>
            </p>
          </OurTeamDescWrapper>
        </OurTeamItem>
        <OurTeamItem>
          <Img src={user6} alt="Member" width="316" height="422" />

          <OurTeamDescWrapper>
            <OurTeamName>Соколянський Ігор </OurTeamName>
            <OurTeamDesc>Developer</OurTeamDesc>
            <p>
              <strong>Front-end developer</strong>
            </p>
          </OurTeamDescWrapper>
        </OurTeamItem>
        <OurTeamItem>
          <Img src={user7} alt="Member" width="316" height="422" />

          <OurTeamDescWrapper>
            <OurTeamName>Denys Borysiuk</OurTeamName>
            <OurTeamDesc>Developer</OurTeamDesc>
            <p>
              <strong>Front-end developer</strong>
            </p>
          </OurTeamDescWrapper>
        </OurTeamItem>
        <OurTeamItem>
          <Img src={user10} alt="Member" width="316" height="422" />

          <OurTeamDescWrapper>
            <OurTeamName>Микола</OurTeamName>
            <OurTeamDesc>Developer</OurTeamDesc>
            <p>
              <strong>Front-end developer</strong>
            </p>
          </OurTeamDescWrapper>
        </OurTeamItem>
        <OurTeamItem>
          <Img src={user4} alt="Member" width="316" height="422" />

          <OurTeamDescWrapper>
            <OurTeamName>Пилипчук Олександра</OurTeamName>
            <OurTeamDesc>Team leader - Back-end</OurTeamDesc>
            <p>
              <strong>Back-end developer</strong>
            </p>
          </OurTeamDescWrapper>
        </OurTeamItem>
        <OurTeamItem>
          <Img src={user8} alt="Member" width="316" height="422" />

          <OurTeamDescWrapper>
            <OurTeamName>Галина Данилко</OurTeamName>
            <OurTeamDesc>Developer</OurTeamDesc>
            <p>
              <strong>Back-end developer</strong>
            </p>
          </OurTeamDescWrapper>
        </OurTeamItem>
        <OurTeamItem>
          <Img src={user9} alt="Member" width="316" height="422" />

          <OurTeamDescWrapper>
            <OurTeamName>Микола Салюк</OurTeamName>
            <OurTeamDesc>Developer</OurTeamDesc>
            <p>
              <strong>Back-end developer</strong>
            </p>
          </OurTeamDescWrapper>
        </OurTeamItem>
        {/* <OurTeamItem>
          <img src={member1} alt="Member" width="316" height="422" />

          <OurTeamDescWrapper>
            <OurTeamName>Anastasiia Haluzinska</OurTeamName>
            <OurTeamDesc>Project Team leader.</OurTeamDesc>
            <p>
              <strong>Full-stack developer</strong>
            </p>
          </OurTeamDescWrapper>
        </OurTeamItem>
        <OurTeamItem>
          <img src={member1} alt="Member" width="316" height="422" />

          <OurTeamDescWrapper>
            <OurTeamName>Anastasiia Haluzinska</OurTeamName>
            <OurTeamDesc>Project Team leader.</OurTeamDesc>
            <p>
              <strong>Full-stack developer</strong>
            </p>
          </OurTeamDescWrapper>
        </OurTeamItem> */}
      </OurTeamList>
    </div>
  );
};

export default OurTeam;
