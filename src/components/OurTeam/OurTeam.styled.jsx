import styled from '@emotion/styled';

export const Img = styled.img`
  height: 422px;
`;

export const OurTeamList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 48px;
  justify-content: space-between;
`;

export const OurTeamItem = styled.li`
  border: 1px solid #010101;
  border-radius: 30px;
  overflow: hidden;
  flex-basis: calc((100% - 20px * (4 - 1)) / 4);
`;

export const OurTeamDescWrapper = styled.div`
  padding: 17px;
`;

export const OurTeamName = styled.h3`
  font-weight: 300;
  font-size: 18px;
  line-height: 140%;
  color: #0026d0;
  margin-bottom: 16px;
`;

export const OurTeamDesc = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 140%;
  color: #010101;
  margin-bottom: 10px;
`;
