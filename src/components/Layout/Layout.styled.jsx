import styled from '@emotion/styled';

export const Header = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  height: 76px;
  width: 100%;
  border-bottom: 2px solid inherit;
  color: white;
  background: #2878ad;
  z-index: 100;
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 24px 16px;
  width: 1200px;
`;

export const Main = styled.main`
  padding-top: 80px;
  min-height: calc(100vh - 76px);
  background-color: aliceblue;
`;
