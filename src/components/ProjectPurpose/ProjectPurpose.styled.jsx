import styled from '@emotion/styled';

export const ProjectPurposeWrapper = styled.div`
  position: relative;
`;

export const Elips = styled.div`
  position: absolute;
  width: 470px;
  height: 470px;
  left: 732px;
  top: 55px;
  border-radius: 50%;
  background: #0026d0;
`;

export const Img = styled.img`
  position: absolute;
  width: 370px;
  height: 370px;
  left: 812px;
  top: 159px;
  z-index: 999;
`;

export const ProjectPurposeList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 49px;
  margin-top: 80px;
`;

export const ProjectPurposeItem = styled.li`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const ProjectPurposeDesc = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 140%;
  color: #010101;
`;
