import AboutProject from 'components/AboutProject';
import AppBar from '../AppBar';
import Hero from '../Hero';
import { Section } from './App.styled';
import ProjectDetails from 'components/ProjectDetails';

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
    </>
  );
};

export default App;
