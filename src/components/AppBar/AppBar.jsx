import Navigation from 'components/Navigatio';
import { MainHeader, MainHeaderContainer } from './AppBar.styled';

const AppBar = () => {
  return (
    <MainHeader>
      <MainHeaderContainer>
        <Navigation />
      </MainHeaderContainer>
    </MainHeader>
  );
};

export default AppBar;
