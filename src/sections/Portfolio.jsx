import * as React from 'react'
import PortfolioItem from '../components/Portfolio/PortfolioItem'
import PortfolioStack from '../components/Portfolio/PortfolioStack'
import SectionWrapper from '../components/SectionWrapper'
import Container from '../components/Container'
import Title from '../components/Title'
import PortfolioBottom from '../components/Portfolio/PortfolioBottom'
import PortfolioItemOuter from '../components/Portfolio/PortfolioItemOuter'
import Button from '../components/Button'

export default function Portfolio({ buttonText, buttonUrl, sectionTitle, sectionId, url, games }) {
  const _SHOWCOUNT = buttonUrl !== null && buttonUrl !== undefined && buttonUrl !== '' ? 4 : 8
  const [clickCounter, setClickCounter] = React.useState(1)

  const showMoreHandler = () => {
    if (clickCounter * _SHOWCOUNT <= 10) {
      games.length
      setClickCounter(clickCounter + 1)
    }
  }

  return (
    <SectionWrapper id={sectionId}>
      <Container>
        <Title>{sectionTitle}</Title>
        <PortfolioStack buttonLink={buttonUrl}>
          {buttonUrl === null || buttonUrl === undefined || buttonUrl === ''
            ? games.map((el) => {
                return (
                  <PortfolioItemOuter key={el.id}>
                    <PortfolioItem el={el} url={url} />
                  </PortfolioItemOuter>
                )
              })
            : games.map((el) => {
                return <PortfolioItem el={el} url={url} key={el.id} />
              })}
        </PortfolioStack>
        <PortfolioBottom>
          <Button onClick={showMoreHandler} to={url !== '/' ? url + buttonUrl : buttonUrl}>
            {buttonText}
          </Button>
        </PortfolioBottom>
      </Container>
    </SectionWrapper>
  )
}
