import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading } from '@jurassicfarm/jurassic-uikit'
import useI18n from 'hooks/useI18n'
// import { useGetStats } from 'hooks/api'
import { useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'

const StyledTotalValueLockedCard = styled(Card)`
  width: 460px;
  height: 200px;
  padding: 30px 20px;
  font-size: 26px;
  border: 2px solid #ffd11d;
  border-radius: 10px;
  text-align: center;
  margin-top: 10px;
`

const LockedValue = styled.div`
  color: #26f674;
  font-size: 36px;
  font-weight: 700;
  font-family: fontBold;
`

const TotalValueLockedCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const totalValue = useTotalValue()
  // const tvl = totalValue.toFixed(2);

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading size="lg" mb="24px">
          {TranslateString(999, 'Total Value Locked:')}
        </Heading>
        <LockedValue>
          <CardValue value={totalValue.toNumber()} prefix="$" decimals={2} />
          {/* <Text color="textSubtle">{TranslateString(999, 'Across all Farms and Pools')}</Text> */}
        </LockedValue>
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
