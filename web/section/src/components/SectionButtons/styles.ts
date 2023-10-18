import styled from 'styled-components'

export const SectionButtonsWrapper = styled.div`
  flex: 1;
  gap: 16px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 930px) {
    flex-direction: column;
  }
`
