import SectionTitle from 'components/SectionTitle';
import union from './icon/union.png';
import {
  ProjectPurposeItem,
  ProjectPurposeList,
  ProjectPurposeWrapper,
  Elips,
  Img,
  ProjectPurposeDesc,
} from './ProjectPurpose.styled';
import pug from './icon/pug.png';

const ProjectPurpose = () => {
  return (
    <ProjectPurposeWrapper>
      <SectionTitle num="03">Project purpose</SectionTitle>
      <ProjectPurposeList>
        <ProjectPurposeItem>
          <img src={union} alt="Union" />
          <ProjectPurposeDesc>search for a pet</ProjectPurposeDesc>
        </ProjectPurposeItem>
        <ProjectPurposeItem>
          <img src={union} alt="Union" />
          <ProjectPurposeDesc>
            search for the owner of the animal
          </ProjectPurposeDesc>
        </ProjectPurposeItem>
        <ProjectPurposeItem>
          <img src={union} alt="Union" />
          <ProjectPurposeDesc>
            getting the latest news related to pets
          </ProjectPurposeDesc>
        </ProjectPurposeItem>
        <ProjectPurposeItem>
          <img src={union} alt="Union" />
          <ProjectPurposeDesc>
            create your own page with your pets and favorite ads
          </ProjectPurposeDesc>
        </ProjectPurposeItem>
        <ProjectPurposeItem>
          <img src={union} alt="Union" />
          <ProjectPurposeDesc>
            familiarization with all possible offers/announcements related to
            pets
          </ProjectPurposeDesc>
        </ProjectPurposeItem>
      </ProjectPurposeList>
      <Img src={pug} alt="Pug" width="769" height="615" />
      <Elips></Elips>
    </ProjectPurposeWrapper>
  );
};

export default ProjectPurpose;
