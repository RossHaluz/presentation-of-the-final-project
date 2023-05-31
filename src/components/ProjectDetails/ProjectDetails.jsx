import SectionTitle from 'components/SectionTitle';
import ProjectDetailsDesc from './ProjectDetailsDesc';
import { ProjectDetailsWrapper, Elips } from './ProjectDetails.styled';

export const ProjectDetails = () => {
  return (
    <ProjectDetailsWrapper>
      <SectionTitle num="02">Project details</SectionTitle>
      <ProjectDetailsDesc />
      <Elips></Elips>
    </ProjectDetailsWrapper>
  );
};

export default ProjectDetails;
