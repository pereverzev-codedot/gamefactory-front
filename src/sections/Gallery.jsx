import * as React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import GalleryModalViewer from '../components/GalleryModalViewer'
import SectionWrapper from '../components/SectionWrapper'
import Container from '../components/Container'
import GalleryTabsStack from '../components/Gallery/GalleryTabsStack'
import GalleryTabsStackItem from '../components/Gallery/GalleryTabsStackItem'
import GalleryTabsStackItemTitle from '../components/Gallery/GalleryTabsStackItemTitle'
import GalleryPanelsStack from '../components/Gallery/GalleryPanelsStack'
import GalleryPanelsStackItem from '../components/Gallery/GalleryPanelsStackItem'
import GalleryPanelsStackItemImage from '../components/Gallery/GalleryPanelsStackItemImage'
import GalleryBottom from '../components/Gallery/GalleryBottom'
import GalleryContainer from '../components/Gallery/GalleryContainer'
import Button from '../components/Button'
import useMedia from '../hooks/use-media'
import useElementOnScreen from '../hooks/use-element-on-screen'

const Gallery = ({
  url,
  galleries,
  buttonUrl,
  buttonText,
  sectionId = '#gallery',
  showCount = 9,
}) => {
  const [rendered, setRendered] = React.useState(false)
  const [containerRef, isOnScreen] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  })
  const gutter = useMedia(
    ['(max-width: 768px)'],

    ['10px'],
    '20px',
  )
  const [currImg, setCurrImg] = React.useState(0)
  const [isOpen, setIsOpen] = React.useState(false)

  const modalOpenHandler = () => {
    setIsOpen(true)
  }

  const [activeGallery, setActiveGallery] = React.useState(galleries[0].id)
  const [activePages, setActivePages] = React.useState({
    [activeGallery]: 1,
  })

  const handlerSetActiveGallery = (id) => {
    setActiveGallery(id)
    if (!activePages[id]) {
      setActivePages({ ...activePages, [id]: 1 })
    }
  }

  const handlerSetActivePages = (id) => {
    setActivePages({ ...activePages, [id]: activePages[id] + 1 })
  }

  React.useEffect(() => {
    if (isOnScreen && !rendered) {
      setRendered(true)
    }
  }, [isOnScreen])

  return (
    <SectionWrapper ref={containerRef} id={sectionId} color="gray">
      {rendered && (
        <GalleryContainer disableGutters>
          <Container>
            <GalleryTabsStack>
              {galleries.map((el) => (
                <GalleryTabsStackItem
                  key={el.id}
                  active={el.id === activeGallery}
                  onClick={() => {
                    handlerSetActiveGallery(el.id)
                  }}
                >
                  <GalleryTabsStackItemTitle>{el.tabTitle}</GalleryTabsStackItemTitle>
                </GalleryTabsStackItem>
              ))}
            </GalleryTabsStack>
          </Container>
          <Container>
            <GalleryPanelsStack>
              {galleries.map((el) => (
                <GalleryPanelsStackItem active={el.id === activeGallery} key={el.id}>
                  <ResponsiveMasonry columnsCountBreakPoints={{ 320: 2, 768: 3 }}>
                    <Masonry gutter={gutter}>
                      {el.images.slice(0, activePages[el.id] * showCount).map((image, i) => {
                        return (
                          <div
                            key={image.id}
                            onClick={() => {
                              setCurrImg(i)
                              modalOpenHandler()
                            }}
                          >
                            <GalleryPanelsStackItemImage {...image} />
                          </div>
                        )
                      })}
                    </Masonry>
                  </ResponsiveMasonry>
                </GalleryPanelsStackItem>
              ))}
            </GalleryPanelsStack>
          </Container>
          {((!buttonUrl &&
            activePages[activeGallery] * showCount <=
              galleries.find((el) => el.id === activeGallery).images.length) ||
            buttonUrl) && (
            <GalleryBottom>
              <Button
                handler={() => handlerSetActivePages(activeGallery)}
                to={url !== '/' ? url + buttonUrl : buttonUrl}
              >
                {buttonText}
              </Button>
            </GalleryBottom>
          )}
          <GalleryModalViewer
            isOpen={isOpen}
            currImg={currImg}
            photos={galleries.find((el) => el.id === activeGallery).images}
            closeHandler={setIsOpen}
            showCounter={activePages[activeGallery] * showCount}
          />
        </GalleryContainer>
      )}
    </SectionWrapper>
  )
}

export default Gallery
