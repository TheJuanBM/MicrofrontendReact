import styled from 'styled-components'

export const TableWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .table {
    gap: 16px;
    height: 60vh;
    width: 400px;
    display: flex;
    padding: 16px;
    border-radius: 10px;
    flex-direction: column;
    overflow: hidden scroll;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

    @media (max-width: 930px) {
      width: 100%;
    }

    @media (max-height: 740px) {
      height: 43vh;
    }
  }

  .table__item {
    gap: 10px;
    display: flex;
    align-items: center;
  }

  .table__item__image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: contain;
    background-color: #000;
  }
`
