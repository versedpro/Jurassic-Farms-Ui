import React from 'react'
import { Card, CardBody, Heading, Text } from '@jurassicfarm/jurassic-uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms } from '../../../state/hooks'

const StyledRaptorStats = styled(Card)`
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

const RaptorStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply(getCakeAddress())
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const farms = useFarms();
  // const eggPrice = usePriceBlzdBusd();
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const cakeSupply = getBalanceNumber(circSupply);
  // const marketCap = eggPrice.times(circSupply);

  // const dinoPerBlock = 0;
  if(farms && farms[0] && farms[0].dinoPerBlock){
    // dinoPerBlock = new BigNumber(farms[0].dinoPerBlock).div(new BigNumber(10).pow(18)).toNumber();
  }

  return (
    <StyledRaptorStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(999, 'RAPTOR')}
        </Heading>
        <Row>
          <Text fontSize="14px">{TranslateString(999, 'Total RAPTOR Supply')}</Text>
          {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(999, 'Total RAPTOR Burned')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(burnedBalance)} decimals={0} />
        </Row>
      </CardBody>
    </StyledRaptorStats>
  )
}

export default RaptorStats
