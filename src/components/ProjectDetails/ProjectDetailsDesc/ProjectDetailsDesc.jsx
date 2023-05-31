import ProjectDetailsImg from '../ProjectDetailsImg/ProjectDetailsImg';
import {
  ProjectDetailsDescList,
  ProjectDetailsDescItem,
  ProjectDetailsDescTitle,
  ProjectDetailsDescText,
  ProjectDetailsImgWrapper,
} from './ProjectDetailsDesc.styled';

const ProjectDetailsDesc = () => {
  return (
    <ProjectDetailsDescList>
      <ProjectDetailsDescItem>
        <ProjectDetailsDescTitle>The problem was:</ProjectDetailsDescTitle>
        <ProjectDetailsDescText>
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem
          ipsumLorem ipsum Lorem ipsum
        </ProjectDetailsDescText>

        <ProjectDetailsImg />
      </ProjectDetailsDescItem>
      <ProjectDetailsDescItem>
        <ProjectDetailsDescTitle>
          To solve the problem, we:
        </ProjectDetailsDescTitle>
        <ProjectDetailsDescText>
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem
          ipsumLorem ipsum Lorem ipsum
        </ProjectDetailsDescText>
        <ProjectDetailsImgWrapper>
          <ProjectDetailsImg />
        </ProjectDetailsImgWrapper>
      </ProjectDetailsDescItem>
    </ProjectDetailsDescList>
  );
};

export default ProjectDetailsDesc;
