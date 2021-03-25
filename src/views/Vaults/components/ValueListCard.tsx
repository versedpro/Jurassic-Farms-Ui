import React, {  } from 'react'
import styled from 'styled-components'
// import { Heading, Card, CardBody, Button, Text } from '@jurassicfarm/jurassic-uikit'
import { CardBody, Text } from '@jurassicfarm/jurassic-uikit'
// import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'
import { getBalanceNumber } from 'utils/formatBalance'
import useTokenBalance from 'hooks/useTokenBalance'
import { getBusdAddress, getDinoAddress } from 'utils/addressHelpers'
// import { useAllHarvest } from 'hooks/useHarvest'
// import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
// import UnlockButton from 'components/UnlockButton'
import CardValue from './CardValue'

// const StyledValueListCard = styled(Card)`
//   width: 460px;
//   height: 200px;
//   padding: 30px 20px;
//   font-size: 26px;
//   border: 2px solid #ffd11d;
//   border-radius: 10px;
//   text-align: center;
//   margin-top: 10px;
// `

// const LockedValue = styled.div`
//   color: #26f674;
//   font-size: 36px;
//   font-weight: 700;
//   font-family: fontBold;
// `

// const ListTitle = styled.p`
//   position: relative;
//   top: -40px;
// `

const BalanceList = styled.div`
  width: 400px;
  box-sizing: border-box;
`

const ListItem = styled.div`
  height: 60px;
  width: 350px;
  margin-left: 24px;
  border-radius: 12px;
  padding: 3px 10px;
  background-color: #ffffff;
  margin-top: 11px;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  color: #b1b7bc;
  font-size: 18px;
`

const ListItemInfo = styled.div`
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  background-color: #ffffff;
  min-width: 140px;
`

// const ListItemImage = styled.div`
//   margin-right: 15px;
//   width: 50px;
//   height: 50px;
//   border-radius: 50%;
//   background-color: #000;
//   display: -webkit-flex;
//   display: flex;
//   -webkit-justify-content: center;
//   justify-content: center;
//   -webkit-align-items: center;
//   align-items: center;
// `

const ItemValue = styled.span`
`

// const Block = styled.div`
//   margin-bottom: 16px;
// `
//
// const TokenImageWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 16px;
// `
//
// const CardImage = styled.img`
//   margin-right: 8px;
// `
//
// const Label = styled.div`
//   color: ${({ theme }) => theme.colors.textSubtle};
//   font-size: 14px;
// `
//
// const Actions = styled.div`
//   margin-top: 24px;
// `

const ValueListCard = () => {
  const TranslateString = useI18n()

  const busdBalance = useTokenBalance(getBusdAddress())
  const dinoBalance = useTokenBalance(getDinoAddress())
  // const raptorBalance = useTokenBalance(getRaptorAddress())
  
  return (
    <>
      <CardBody>
        <BalanceList>
          <ListItem>
            <ListItemInfo>
              {/* <ListItemImage>
              </ListItemImage> */}
              <Text color="textSubtle">{TranslateString(999, 'BUSD:')}</Text>
            </ListItemInfo>
            <ItemValue>
            <CardValue fontSize="14px" value={getBalanceNumber(busdBalance)} decimals={3} />
            </ItemValue>
          </ListItem>
          <ListItem>
            <ListItemInfo>
              {/* <ListItemImage>
              </ListItemImage> */}
              <Text color="textSubtle">{TranslateString(999, 'DINO:')}</Text>
            </ListItemInfo>
            <ItemValue>
            <CardValue fontSize="14px" value={getBalanceNumber(dinoBalance)} decimals={3} />
            </ItemValue>
          </ListItem>
          <ListItem>
            <ListItemInfo>
              {/* <ListItemImage>
              </ListItemImage> */}
              <Text color="textSubtle">{TranslateString(999, 'RAPTOR:')}</Text>
            </ListItemInfo>
            <ItemValue>
                --
            </ItemValue>
          </ListItem>
        </BalanceList>
      </CardBody>
    </>
  )
}

export default ValueListCard
