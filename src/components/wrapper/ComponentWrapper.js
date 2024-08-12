import styled from 'styled-components';

const ComponentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 0 ${({ theme }) => theme.spacing200};
  background-color: ${({ theme }) => theme.color.yellow};
`;

export default ComponentWrapper;
