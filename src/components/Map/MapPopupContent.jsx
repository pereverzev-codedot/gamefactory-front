import styled from '@emotion/styled'

const MapPopupContent = styled.div`
  height: 100%;
  display: flex;

  ${({ theme }) => theme.breakpoints.down('xl')} {
    flex-direction: column;
    padding-top: 11px;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    flex-direction: row;
    padding-top: 21px;
  }
`

export default MapPopupContent
