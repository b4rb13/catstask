import styled from 'styled-components';

export const Gallery = styled.section`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  &&& img {
    width: 100%;
    box-shadow: var(--shadow);
  }
`;
