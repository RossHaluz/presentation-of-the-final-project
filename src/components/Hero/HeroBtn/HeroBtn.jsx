import { HeroLink } from './HeroBtn.styled';
import vector from './icon/vector.png';

const HeroBtn = () => {
  return (
    <HeroLink href="">
      start the presentation
      <img src={vector} alt="Vector" width="16.5" height="16.5" />
    </HeroLink>
  );
};

export default HeroBtn;
