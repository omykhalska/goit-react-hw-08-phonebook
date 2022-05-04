import styled from '@emotion/styled';

export const CommonBtn = styled.button`
  background-color: #fdfefe;
  color: inherit;
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: capitalize;
  padding: 0.25rem 1rem;
  border: 1px solid #767676;
  border-radius: 4px;
  cursor: pointer;
  transition: all 250ms ease-out;

  &[disabled] {
    pointer-events: none;
    background-color: #cccccc;
    opacity: 0.5;
  }

  &:hover {
    background-color: #ade5e9;
  }
`;
