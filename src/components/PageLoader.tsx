import React from 'react'
import Lottie from 'react-lottie'
import styled from 'styled-components'
import animationData from '../lotties/dinosaur.json'
import Page from './layout/Page'

const Wrapper = styled(Page)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const PageLoader: React.FC = () => (
  <Wrapper>
    <Lottie options={defaultOptions} height={500} width={500} />
  </Wrapper>
)

export default PageLoader