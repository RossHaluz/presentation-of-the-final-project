import styled from '@emotion/styled';

export const UserPersonaContainer = styled.div`
  position: relative;
`;

export const Elipse = styled.div`
  position: absolute;
  width: 137px;
  height: 137px;
  left: 1303px;
  top: 724px;
  background: #0026d0;
  filter: blur(100px);
`;

export const Img = styled.img`
  margin-top: 48px;
  margin-left: 46px;
  width: 428px;
  height: 545px;
`;

export const UserPersonaWrapper = styled.div`
  display: flex;
  gap: 139px;
`;

export const UserPersonaDescWrapper = styled.div`
  margin-top: 55px;
`;

export const UserPersonaName = styled.h3`
  font-weight: 300;
  font-size: 32px;
  line-height: 140%;
  color: #0026d0;
  margin-bottom: 48px;
`;

export const UserPersonaList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 49px;
`;

export const UserPersonaItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const UserPersonaItemText = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 140%;
  color: #010101;
`;
