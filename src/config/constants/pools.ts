import tokens from './tokens'
import { PoolCategory, PoolConfig } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 1,
    stakingToken: tokens.dino,
    earningToken: tokens.bnb,
    contractAddress: {
      97: '',
      56: '0x481055C4182B9A5e90d8E7EDe9f65b957dC0Ec22',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.002480',
    sortOrder: 999,
    isFinished: false,
  },
  {
    sousId: 2,
    stakingToken: tokens.dino,
    earningToken: tokens.bifi,
    contractAddress: {
      97: '',
      56: '0x95b3389f41dbf513De5710A68220efF5a42dB068',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00009920',
    sortOrder: 999,
    isFinished: false,
  },
]

export default pools
