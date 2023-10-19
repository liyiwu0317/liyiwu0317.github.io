const wdGemTitle = '宝石微店';
const wdGemItems = [
  {
    id: 'wd_back_sw_gem',
    ver: ['limit'],
    image: './images/item/gem/wd_back_sw_gem.jpeg',
    buyLink: 'https://weidian.com/item.html?itemID=6681661226',
    title: '【宝石】SW限量版',
    brand: ['SW'],
    hit: [],
    descLink: '',
    price: '¥ 80',
    shipping: 'back',
    onlyFelix: false,
    ribbon: '',
    fansite: 'gem',
    soldOut: true,
  },
  {
    id: 'wd_back_bdm_gem',
    ver: ['limit'],
    image: './images/item/gem/wd_back_bdm_gem.jpeg',
    buyLink: 'https://weidian.com/item.html?itemID=6680607677',
    title: '【宝石】BDM限量版',
    brand: ['BDM'],
    hit: [],
    descLink: '',
    price: '¥ 87.5',
    shipping: 'back',
    onlyFelix: false,
    ribbon: '',
    fansite: 'gem',
  },
  {
    id: 'wd_back_yes24_gem',
    ver: ['limit'],
    image: './images/item/gem/wd_back_yes24_gem.jpeg',
    buyLink: 'https://weidian.com/item.html?itemID=6680547109',
    title: '【宝石】YES24限量版',
    brand: ['YES24'],
    hit: [],
    descLink: '',
    price: '¥ 90',
    shipping: 'back',
    onlyFelix: false,
    ribbon: '',
    fansite: 'gem',
  },
  {
    id: 'wd_back_ff_gem',
    ver: ['rr'],
    image: './images/item/gem/wd_back_ff_gem.jpeg',
    buyLink: 'https://weidian.com/item.html?itemID=6736121548',
    title: '【宝石】普版',
    brand: ['JYP', 'SW', 'WM', 'MS', 'YES24'],
    hit: [],
    descLink: '',
    price: '¥ 101.5~112.5',
    shipping: 'back',
    onlyFelix: false,
    ribbon: '',
    fansite: 'gem',
    brandMix: true,
  },
  {
    id: 'wd_back_ff_3_gem',
    ver: ['rr'],
    image: './images/item/gem/wd_back_ff_3_gem.jpeg',
    buyLink: 'https://weidian.com/item.html?itemID=6735566047',
    title: '【宝石】普版',
    brand: ['JYP', 'YES24', 'MP', 'BDM', 'SW', 'WM', 'MS', 'EL', 'KMS'],
    hit: ['EL可指定成员'],
    descLink: 'https://weibo.com/5947554719/NoAfSxpnW',
    price: '¥ 90+',
    shipping: 'back',
    onlyFelix: true,
    ribbon: '',
    fansite: 'gem',
    brandMix: true,
  },
  {
    id: 'wd_non_back_ff_3_gem',
    ver: ['rr'],
    image: './images/item/gem/wd_non_back_ff_3_gem.jpeg',
    buyLink: 'https://weidian.com/item.html?itemID=6736678198',
    title: '【宝石】普版',
    brand: ['JYP', 'YES24', 'MP', 'BDM', 'SW', 'WM', 'MS', 'EL', 'KMS'],
    hit: ['EL/KMS可指定成员'],
    descLink: 'https://weibo.com/5947554719/NoAiVazaz',
    price: '¥ 90+',
    shipping: 'non-back',
    onlyFelix: true,
    ribbon: '',
    fansite: 'gem',
    brandMix: true,
  },
  {
    id: 'wd_non_back_el_kms_gem',
    ver: ['rr'],
    image: './images/item/gem/wd_non_back_el_kms_gem.jpeg',
    buyLink: 'https://weidian.com/item.html?itemID=6735195635',
    title: '【宝石】EL+KMS普版双指定',
    brand: ['EL', 'KMS'],
    hit: ['可指定成员'],
    descLink: '',
    price: '¥ 100.5',
    shipping: 'non-back',
    onlyFelix: true,
    ribbon: '',
    fansite: 'gem',
    brandMix: true,
  },
  {
    id: 'wd_non_back_sr_gem',
    ver: ['rr'],
    image: './images/item/gem/wd_non_back_sr_gem.jpeg',
    buyLink: 'https://weidian.com/item.html?itemID=6730715691',
    title: '【宝石】SR普版',
    brand: ['SR'],
    hit: ['可指定成员'],
    descLink: '',
    price: '¥ 64.5',
    shipping: 'non-back',
    onlyFelix: true,
    ribbon: '',
    fansite: 'gem',
  },
  {
    id: 'wd_non_back_am_gem',
    ver: ['rr'],
    image: './images/item/gem/wd_non_back_am_gem.jpeg',
    buyLink: 'https://weidian.com/item.html?itemID=6729850156',
    title: '【宝石】AM普版',
    brand: ['AM'],
    hit: ['可指定成员'],
    descLink: '',
    price: '¥ 64.5',
    shipping: 'non-back',
    onlyFelix: true,
    ribbon: '',
    fansite: 'gem',
  },
  {
    id: 'wd_non_back_el_gem',
    ver: ['rr'],
    image: './images/item/gem/wd_non_back_el_gem.jpeg',
    buyLink: 'https://weidian.com/item.html?itemID=6735256866',
    title: '【宝石】EL普版',
    brand: ['EL'],
    hit: ['可指定成员'],
    descLink: '',
    price: '¥ 78.5',
    shipping: 'non-back',
    onlyFelix: true,
    ribbon: '',
    fansite: 'gem',
  },
  {
    id: 'wd_non_back_kms_gem',
    ver: ['rr'],
    image: './images/item/gem/wd_non_back_kms_gem.jpeg',
    buyLink: 'https://weidian.com/item.html?itemID=6728475393',
    title: '【宝石】KMS普版',
    brand: ['KMS'],
    hit: ['可指定成员'],
    descLink: '',
    price: '¥ 75.5',
    shipping: 'non-back',
    onlyFelix: true,
    ribbon: '',
    fansite: 'gem',
  },
  {
    id: 'wd_non_back_target_gem',
    ver: ['rr'],
    image: './images/item/gem/wd_non_back_target_gem.jpeg',
    buyLink: 'https://weidian.com/item.html?itemID=6680668387',
    title: '【宝石】美网TARGET',
    brand: ['美网TARGET'],
    hit: [],
    descLink: '',
    price: '¥ 206',
    shipping: 'non-back',
    onlyFelix: false,
    ribbon: '',
    fansite: 'gem',
  },
  {
    id: 'wd_non_back_fnac_gem',
    ver: ['rr'],
    image: './images/item/gem/wd_non_back_fnac_gem.jpeg',
    buyLink: 'https://weidian.com/item.html?itemID=6689145667',
    title: '【宝石】法特Fnac',
    brand: ['法特Fnac'],
    hit: ['Fnac特典明信片'],
    descLink: '',
    price: '¥ 209',
    shipping: 'non-back',
    onlyFelix: false,
    ribbon: '',
    fansite: 'gem',
  },
]