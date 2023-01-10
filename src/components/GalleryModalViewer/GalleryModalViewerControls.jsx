import styled from '@emotion/styled'

const GalleryModalViewerControls = styled.div`
  justify-content: space-between;
  display: flex;
  z-index: 11;
  position: fixed;
  right: 20px;
  top: 20px;

  ${({ theme }) => theme.breakpoints.down('lg')} {
    width: 150px;
  }

  ${({ theme }) => theme.breakpoints.between('lg', 'xl')} {
    width: 200px;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    width: 250px;
  }
`

export default GalleryModalViewerControls
