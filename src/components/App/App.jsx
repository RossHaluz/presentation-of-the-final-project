import AboutProject from 'components/AboutProject';
import AppBar from '../AppBar';
import Hero from '../Hero';
import { Section } from './App.styled';
import ProjectDetails from 'components/ProjectDetails';
import ProjectPurpose from 'components/ProjectPurpose';

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
    </>
  );
};

export default App;
