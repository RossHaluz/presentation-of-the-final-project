import styled from '@emotion/styled';

export const TechnologiesUsedContainer = styled.div`
  width: 100%;
`;

export const TechnologiesUsedWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  margin-top: 80px;
`;

export const TechnologiesUsedDescWrapper = styled.div`
  padding: 48px 32px;
  border: 1px solid #010101;
  border-radius: 50px;
  flex-basis: calc((100% - 20px * (3 - 1)) / 3);
`;

export const TechnologiesUsedTitle = styled.h3`
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 140%;
  color: #0026d0;
  text-align: center;
  margin-bottom: 24px;
`;

export const TechnologiesUsedList = styled.ul`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  gap: 24px;
`;

export const TechnologiesUsedItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const TechnologiesUsedItemText = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 140%;
  color: #010101;
`;

export const Elipse = styled.div`
  width: 16px;
  height: 16px;
  background: #0026d0;
  border-radius: 50%;
`;
