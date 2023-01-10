import styled from '@emotion/styled'
import { css } from '@emotion/react'

const dynamicStyle = ({ theme, color }) => css`
  background-color: ${(color === 'gray' && theme.palette.gray[10]) || theme.palette.white};
`

const SectionWrapper = styled.section`
  ${({ theme }) => theme.breakpoints.down('md')} {
    padding-top: 45px;
    padding-bottom: 45px;
  }

  ${({ theme }) => theme.breakpoints.between('md', 'lg')} {
    padding-top: 70px;
    padding-bottom: 70px;
  }

  ${({ theme }) => theme.breakpoints.up('lg')} {
    padding-top: 90px;
    padding-bottom: 90px;
  }

  ${dynamicStyle}
`

export default SectionWrapper
