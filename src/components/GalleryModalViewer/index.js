import * as React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs, Navigation, Zoom, Autoplay, FreeMode } from 'swiper'
import { ScaleUpIcon, ScaleDownIcon, CloseIcon, PlayIcon, PauseIcon } from '../../icons'
import GalleryModalViewerButtonWrapper from './GalleryModalViewerButtonWrapper'
import GalleryModalViewerControls from './GalleryModalViewerControls'
import GalleryModalViewerWrapper from './GalleryModalViewerWrapper'
import GalleryModalViewerButtonIcon from './GalleryModalViewerButtonIcon'
import GalleryModalViewerImage from './GalleryModalViewerImage'
import GalleryModalViewerImageThumb from './GalleryModalViewerImageThumb'
import useMedia from '../../hooks/use-media'

export default function GalleryModalViewer({ isOpen, photos, currImg, closeHandler, showCounter }) {
  const swiperRef = React.useRef(null)
  const [autoplay, setAutoplay] = React.useState(null)
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null)
  const [zoomed, setZoomed] = React.useState(false)
  const isLargerThan768 = useMedia(['(min-width: 768px)'], [true], false)
  const onKeyDown = (e) => {
    if (e.key === 'Escape' && isOpen) {
      modalCloseHandler()
    }
  }

  React.useEffect(() => {
    if (isOpen) document.addEventListener('keydown', onKeyDown)
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(currImg + 1, 1, true)
    }
  }, [isOpen, currImg])

  React.useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.swiper &&
      swiperRef.current.swiper.autoplay.running &&
      typeof autoplay === 'null'
    ) {
      swiperRef.current.swiper.autoplay.stop()
      setAutoplay(false)
    }
  }, [swiperRef.current?.swiper.autoplay.running])

  React.useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop()
      swiperRef.current.swiper.zoom.out()
      document
        .getElementById('photo-slider')
        .getElementsByClassName('swiper-button-prev')[0]
        .addEventListener('click', () => {
          changeSlideHandler()
        })
      document
        .getElementById('photo-slider')
        .getElementsByClassName('swiper-button-next')[0]
        .addEventListener('click', () => {
          changeSlideHandler()
        })
    }

    setZoomed(false)
  }, [isOpen])

  const autoplayHandler = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      if (swiperRef.current.swiper.autoplay.running) {
        swiperRef.current.swiper.autoplay.stop()
      } else {
        swiperRef.current.swiper.autoplay.start()
      }
      swiperRef.current.swiper.zoom.out()
    }
    setZoomed(false)
  }

  const modalCloseHandler = () => {
    setAutoplay(false)
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop()
      swiperRef.current.swiper.zoom.out()
    }
    document.removeEventListener('keydown', onKeyDown)
    document
      .getElementById('photo-slider')
      .getElementsByClassName('swiper-button-prev')[0]
      .removeEventListener('click', () => {
        changeSlideHandler()
      })
    document
      .getElementById('photo-slider')
      .getElementsByClassName('swiper-button-next')[0]
      .removeEventListener('click', () => {
        changeSlideHandler()
      })
    setZoomed(false)
    closeHandler(false)
  }

  const changeSlideHandler = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.zoom.out()
      swiperRef.current.swiper.autoplay.stop()
    }
    setZoomed(false)
    setAutoplay(false)
  }

  const zoomToggleHandler = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.zoom.toggle()
      swiperRef.current.swiper.autoplay.stop()
    }
    setZoomed(!zoomed)
    setAutoplay(false)
  }

  return (
    <>
      <GalleryModalViewerWrapper isOpen={isOpen}>
        <GalleryModalViewerControls>
          <GalleryModalViewerButtonWrapper
            onClick={() => {
              if (autoplay) setAutoplay(false)
              else setAutoplay(true)
              autoplayHandler()
            }}
          >
            <GalleryModalViewerButtonIcon showIcon={autoplay}>
              <PauseIcon />
            </GalleryModalViewerButtonIcon>
            <GalleryModalViewerButtonIcon showIcon={!autoplay}>
              <PlayIcon />
            </GalleryModalViewerButtonIcon>
          </GalleryModalViewerButtonWrapper>

          <GalleryModalViewerButtonWrapper onClick={zoomToggleHandler}>
            <GalleryModalViewerButtonIcon showIcon={zoomed}>
              <ScaleUpIcon />
            </GalleryModalViewerButtonIcon>
            <GalleryModalViewerButtonIcon showIcon={!zoomed}>
              <ScaleDownIcon />
            </GalleryModalViewerButtonIcon>
          </GalleryModalViewerButtonWrapper>

          <GalleryModalViewerButtonWrapper onClick={modalCloseHandler}>
            <GalleryModalViewerButtonIcon showIcon={true}>
              <CloseIcon />
            </GalleryModalViewerButtonIcon>
          </GalleryModalViewerButtonWrapper>
        </GalleryModalViewerControls>

        <Swiper
          className="photo-slider"
          id="photo-slider"
          style={{ '--swiper-navigation-color': '#FB792B' }}
          spaceBetween={0}
          slidesPerView={1}
          centeredSlides={true}
          navigation={true}
          loop={true}
          modules={[Thumbs, Navigation, Zoom, Autoplay]}
          thumbs={{ swiper: thumbsSwiper }}
          ref={swiperRef}
          zoom={{
            toggle: isLargerThan768,
          }}
          onSliderMove={() => {
            if (autoplay) {
              setAutoplay(false)
              if (swiperRef.current && swiperRef.current.swiper) {
                swiperRef.current.swiper.autoplay.stop()
              }
            }
            if (zoomed) {
              setZoomed(false)
              swiperRef.current.swiper.zoom.out()
            }
          }}
          speed={1000}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: false,
            waitForTransition: false,
            disableOnInteraction: false,
          }}
        >
          {photos.slice(0, showCounter).map((img) => {
            return (
              <SwiperSlide key={img.id}>
                <div className="swiper-zoom-container">
                  <GalleryModalViewerImage
                    className="swiper-zoom-target"
                    {...img}
                    objectFit="cover"
                  />
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>

        <Swiper
          className="thumbs-slider"
          slidesPerView={'auto'}
          spaceBetween={10}
          centerInsufficientSlides={true}
          modules={[Thumbs, FreeMode]}
          watchSlidesProgress
          onSwiper={setThumbsSwiper}
          freeMode
          watchSlidesVisibility
        >
          {photos.slice(0, showCounter).map((img) => {
            return (
              <SwiperSlide key={img.id}>
                <GalleryModalViewerImageThumb {...img} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </GalleryModalViewerWrapper>

      {isOpen && (
        <style
          dangerouslySetInnerHTML={{
            __html: `
      body {overflow: hidden}
    `,
          }}
        />
      )}
    </>
  )
}
