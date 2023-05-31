import AboutProject from 'components/AboutProject';
import AppBar from '../AppBar';
import Hero from '../Hero';
import { Section } from './App.styled';
import ProjectDetails from 'components/ProjectDetails';
import ProjectPurpose from 'components/ProjectPurpose';
import UserPersona from 'components/UserPersona';
import TechnologiesUsed from 'components/TechnologiesUsed';
import OurTeam from 'components/OurTeam';

const App = () => {
  return (
    <>
      <AppBar />
      <Section>
        <Hero />
      </Section>
      <Section>
        <AboutProject />
      </Section>
      <Section>
        <ProjectDetails />
      </Section>
      <Section>
        <ProjectPurpose />
      </Section>
      <Section>
        <UserPersona />
      </Section>
      <Section>
        <TechnologiesUsed />
      </Section>
      <Section>
        <OurTeam />
      </Section>
    </>
  );
};

export default App;
