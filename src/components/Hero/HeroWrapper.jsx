import styled from '@emotion/styled'

const HeroWrapper = styled.section`
  position: relative;

  width: 100%;
  max-width: 1920px;
  height: 0;

  ${({ theme }) => theme.breakpoints.down('xl')} {
    padding-bottom: 56%;
  }
  ${({ theme }) => theme.breakpoints.up('xl')} {
    padding-bottom: 44%;
  }
`

export default HeroWrapper
