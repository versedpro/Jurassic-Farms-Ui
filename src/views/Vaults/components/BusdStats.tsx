import React from 'react'
import { Card, CardBody, Heading, Text } from '@jurassicfarm/jurassic-uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getBusdAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
// import { useFarms, usePriceBlzdBusd } from '../../../state/hooks'

const StyledBusdStats = styled(Card)`
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

const BusdStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply(getBusdAddress())
  const burnedBalance = useBurnedBalance(getBusdAddress())
  // const tokenBalance = useTokenBalance(getBusdAddress())
  // const farms = useFarms();
  // const eggPrice = usePriceBlzdBusd();
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const cakeSupply = getBalanceNumber(circSupply);
  // const marketCap = eggPrice.times(circSupply);

  return (
    <StyledBusdStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(999, 'BUSD')}
        </Heading>
        <Row>
          <Text fontSize="14px">{TranslateString(999, 'Total Supply')}</Text>
          {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(999, 'Total Burned')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(burnedBalance)} decimals={0} />
        </Row>
      </CardBody>
    </StyledBusdStats>
  )
}

export default BusdStats
