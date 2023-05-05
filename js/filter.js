const Options = {
  "ver": ["limit", "abc", "d"],
  "brand": [
    "am", 
    "bdm", 
    "bdn",
    "el", 
    "jyp",
    "k4", 
    "kms", 
    "mk", 
    "mp", 
    "ms", 
    "sw", 
    "wm", 
    "yes24", 
    "yzy", 
    "sr", 
    "ny"
  ]
}

const backItems = [
  {
    id: 'back-abc-am-china',
    ver: ['abc'],
    brand: ['am']
  },
  {
    id: 'back-abc-mp-china',
    ver: ['abc'],
    brand: ['mp']
  },
  {
    id: 'back-abc-sw-china',
    ver: ['abc'],
    brand: ['sw']
  },
  {
    id: 'back-abc-yes24-china',
    ver: ['abc'],
    brand: ['yes24']
  },
  {
    id: 'back-abc-bdm-china',
    ver: ['abc'],
    brand: ['bdm']
  },
  {
    id: 'back-abc-wm-china',
    ver: ['abc'],
    brand: ['wm']
  },
  {
    id: 'back-abc-ms-china',
    ver: ['abc'],
    brand: ['ms']
  },
  {
    id: 'back-abc-sr-china',
    ver: ['abc'],
    brand: ['sr']
  },
  {
    id: 'back-abc-el-china',
    ver: ['abc'],
    brand: ['el']
  },
  {
    id: 'back-abc-kms-china',
    ver: ['abc'],
    brand: ['kms']
  },
  {
    id: 'back-abc-mp-gem',
    ver: ['abc'],
    brand: ['mp']
  },
  {
    id: 'back-abc-bdm-gem',
    ver: ['abc'],
    brand: ['bdm']
  },
  {
    id: 'back-d-am-gem',
    ver: ['d'],
    brand: ['am']
  },
  {
    id: 'back-d-bdm-gem',
    ver: ['d'],
    brand: ['bdm']
  },
  {
    id: 'back-d-jyp-gem',
    ver: ['d'],
    brand: ['jyp']
  },
  {
    id: 'back-d-yes24-gem',
    ver: ['d'],
    brand: ['yes24']
  },
  {
    id: 'back-d-yes24-jyp-bdm-gem',
    ver: ['d'],
    brand: ['yes24']
  }
]

const nonBackItems = [
  {
    id: 'non-back-abc-k4-china',
    ver: ['abc'],
    brand: ['k4']
  },
  {
    id: 'non-back-abc-am-china',
    ver: ['abc'],
    brand: ['am']
  },
  {
    id: 'non-back-abc-d-k4-sr-bdn-kms-el-china',
    ver: ['abc', 'd'],
    brand: ['k4', 'bdn', 'sr', 'kms', 'el']
  },
  {
    id: 'non-back-abc-bdm-china',
    ver: ['abc'],
    brand: ['bdm']
  },
  {
    id: 'non-back-abc-kms-china-1',
    ver: ['abc'],
    brand: ['kms']
  },
  {
    id: 'non-back-abc-kms-china-2',
    ver: ['abc'],
    brand: ['kms']
  },
  {
    id: 'non-back-abc-yzy-china',
    ver: ['abc'],
    brand: ['yzy']
  },
  {
    id: 'non-back-abc-sr-china-1',
    ver: ['abc'],
    brand: ['sr']
  },
  {
    id: 'non-back-abc-sr-china-2',
    ver: ['abc'],
    brand: ['sr']
  },
  {
    id: 'non-back-abc-ny-china',
    ver: ['abc'],
    brand: ['ny']
  },
  {
    id: 'non-back-abc-el-china',
    ver: ['abc'],
    brand: ['el']
  },
  {
    id: 'non-back-d-k4-china',
    ver: ['d'],
    brand: ['k4']
  },
  {
    id: 'non-back-abc-yes24-gem',
    ver: ['abc'],
    brand: ['yes24']
  },
  {
    id: 'non-back-abc-sw-gem',
    ver: ['abc'],
    brand: ['sw']
  },
  {
    id: 'non-back-abc-mp-gem',
    ver: ['abc'],
    brand: ['mp']
  },
  {
    id: 'non-back-abc-k4-gem',
    ver: ['abc'],
    brand: ['k4']
  },
  {
    id: 'non-back-abc-yzy-gem',
    ver: ['abc'],
    brand: ['yzy']
  }
]

function findMatchItems(items, ver, brand) {
  let showItems = [];
  let hideItems = [];

  if (!ver || !Options.ver.includes(ver)) {
    ver = null;
  }
  if (!brand || !Options.brand.includes(brand)) {
    brand = null;
  }

  items.forEach(x => {
    if((!ver || x.ver.includes(ver)) && (!brand || x.brand.includes(brand))) {
      showItems.push(x.id);
    } else {
      hideItems.push(x.id);
    }
  })

  return {
    showItems,
    hideItems
  }
}

function changeToShow(id) {
  var x = document.getElementById(id);

  if (x && x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    x.className = x.className.replace(" w3-hide", "");
  }
}

function changeToHide(id) {
  let x = document.getElementById(id);

  if (x && x.className.indexOf("w3-hide") == -1) {
    x.className += " w3-hide";
    x.className = x.className.replace(" w3-show", "");
  }
}

function onPlatformChanged(option, page, otherSelection) {
  let brand = $(`#${otherSelection}`).val();
  let ver = option.value;
  let items = [];

  if (page === 'back') items = backItems;
  else if (page === 'non-back') items = nonBackItems;

  const objs = findMatchItems(items, ver, brand);

  for (const id of objs.showItems) {
    changeToShow(id);
  }

  for (const id of objs.hideItems) {
    changeToHide(id);
  }
}

function onBrandChanged(option, page, otherSelection) {
  let brand = option.value;
  let ver = $(`#${otherSelection}`).val();
  let items = [];

  if (page === 'back') items = backItems;
  else if (page === 'non-back') items = nonBackItems;

  const objs = findMatchItems(items, ver, brand);

  for (const id of objs.showItems) {
    changeToShow(id);
  }

  for (const id of objs.hideItems) {
    changeToHide(id);
  }
}