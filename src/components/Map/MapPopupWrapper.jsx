import styled from '@emotion/styled'

const MapPopupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  padding: 10px 10px 15px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 290px;
    min-height: 230px;
    gap: 10px;
  }

  ${({ theme }) => theme.breakpoints.between('md', 'xl')} {
    width: 400px;
    min-height: 300px;
    gap: 15px;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    width: 587px;
    min-height: 235px;
    gap: 20px;
  }
`

export default MapPopupWrapper
