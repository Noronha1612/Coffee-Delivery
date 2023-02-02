import styled from "styled-components";

export const SectionHeader = styled.header`
  display: flex;
  gap: 0.5rem;

  h3,
  h6 {
    font-weight: 400;
    line-height: 130%;
  }

  h3 {
    margin-bottom: 0.125rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.baseSubtitle};
  }

  h6 {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.baseText};
  }
`;

export const RadioWrapper = styled.div`
  margin-top: 2rem;
`;
