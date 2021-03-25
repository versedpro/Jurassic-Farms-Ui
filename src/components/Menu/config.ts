import { MenuEntry } from '@jurassicfarm/jurassic-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x9510b145010f0eac5a3aefd9a5a07a0a14b2241d',
        external: true,
      },
      {
        label: 'Liquidity',
        href:
          'https://exchange.pancakeswap.finance/#/add/BNB/0x9510b145010f0eac5a3aefd9a5a07a0a14b2241d',
        external: true,
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x9510b145010f0eac5a3aefd9a5a07a0a14b2241d',
        external: true,
      },
    ],
  },
  {
    label: 'Github',
    icon: 'GithubIcon',
    href: 'https://github.com/TheLostWorldFarm',
    external: true,
  },
  {
    label: 'Blog',
    icon: 'MediumIcon',
    href: 'https://medium.com/jurassicfarm',
    external: true,
  },
  {
    label: 'Vaults',
    icon: 'VaultIcon',
    href: '/vaults',
  }
]

export default config
