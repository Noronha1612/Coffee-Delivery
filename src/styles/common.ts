import styled from "styled-components";

export const BREAKPOINT_LG = "1200px";
export const BREAKPOINT_MD = "912px";
export const BREAKPOINT_SM = "612px";
export const BREAKPOINT_XS = "480px";

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
