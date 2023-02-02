import styled from "styled-components";

export const InteractableBaseComponent = styled.button`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  gap: 0.25rem;

  border-radius: 6px;

  cursor: pointer;

  border: none;
  background: ${({ theme }) => theme.baseButton};
`;
