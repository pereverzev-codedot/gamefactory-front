import styled from '@emotion/styled'
import { css } from '@emotion/react'

const dynamicStyle = ({ theme, active }) => css`
  ${active
    ? `text-decoration-color: ${theme.palette.orange[400]};`
    : 'text-decoration-color: transparent;'}

  &:hover {
    color: ${({ theme }) => theme.palette.orange[400]};
  }
`

const GalleryTabsStackItem = styled.button`
  line-height: 1;
  max-width: 50%;
  padding: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration-style: solid;
  text-decoration-line: underline;
  text-underline-offset: 10px;
  text-decoration-thickness: 4px;
  transition: 0.5s;

  ${dynamicStyle}
`

export default GalleryTabsStackItem
