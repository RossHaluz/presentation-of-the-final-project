import AboutProject from 'components/AboutProject';
import AppBar from '../AppBar';
import Hero from '../Hero';
import { Section } from './App.styled';

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
    </>
  );
};

export default App;
