import React from 'react'
import { Card, CardBody, Heading, Text } from '@jurassicfarm/jurassic-uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getDinoAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
// import { useFarms, usePriceBlzdBusd } from '../../../state/hooks'

const StyledDinoStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const DinoStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply(getDinoAddress())
  const burnedBalance = useBurnedBalance(getDinoAddress())
  // const farms = useFarms();
  // const eggPrice = usePriceBlzdBusd();
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const cakeSupply = getBalanceNumber(circSupply);
  // const marketCap = eggPrice.times(circSupply);

  // let dinoPerBlock = 0;
  // if(farms && farms[0] && farms[0].dinoPerBlock){
  //   dinoPerBlock = new BigNumber(farms[0].dinoPerBlock).div(new BigNumber(10).pow(18)).toNumber();
  // }

  return (
    <StyledDinoStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(999, 'DINO')}
        </Heading>
        <Row>
          <Text fontSize="14px">{TranslateString(536, 'Total DINO Supply')}</Text>
          {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(538, 'Total DINO Burned')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(burnedBalance)} decimals={0} />
        </Row>
        
      </CardBody>
    </StyledDinoStats>
  )
}

export default DinoStats
