import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Link from '../Link'

const dynamicStyles = ({ theme, inView }) => css`
  color: ${inView ? theme.palette.orange[400] : 'inherit'};
`

const SpyLinkItem = styled(Link)`
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 16px;
  padding-bottom: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  height: min-content;
  outline: 0px solid transparent !important;
  border-bottom: none;
  margin-top: 0px;
  width: 100%;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.palette.orange[50]};
  }

  ${dynamicStyles}
`

export default SpyLinkItem
