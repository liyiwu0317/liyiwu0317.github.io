const allVer = ['limit', 'abc', 'd'];
const allBrand = ['am', 'sw', 'yes24', 'mp', 'jyp', 'mk', 'bdm', 'kms', 'k4', 'wm', 'ms', 'yzy', 'sr', 'ny'];

const backItems = [
  {
    id: 'back-feiChina-abc-am',
    ver: ['abc'],
    brand: ['am']
  },
  {
    id: 'back-feiChina-abc-mp',
    ver: ['abc'],
    brand: ['mp']
  },
  {
    id: 'back-feiChina-abc-sw',
    ver: ['abc'],
    brand: ['sw']
  },
  {
    id: 'back-feiChina-abc-jyp',
    ver: ['abc'],
    brand: ['jyp']
  },
  {
    id: 'back-feiChina-abc-yes24',
    ver: ['abc'],
    brand: ['yes24']
  },
  {
    id: 'back-feiChina-abc-bdm',
    ver: ['abc'],
    brand: ['bdm']
  },
  {
    id: 'back-feiChina-abc-wm',
    ver: ['abc'],
    brand: ['wm']
  },
  {
    id: 'back-feiChina-abc-ms',
    ver: ['abc'],
    brand: ['ms']
  },
  {
    id: 'back-feiChina-d-mk',
    ver: ['d'],
    brand: ['mk']
  },
  {
    id: 'back-gem-abc-mp',
    ver: ['abc'],
    brand: ['mp']
  },
  {
    id: 'back-gem-abc-bdm',
    ver: ['abc'],
    brand: ['bdm']
  },
  {
    id: 'back-gem-abc-d-mp-sw-bdm',
    ver: ['limit', 'abc', 'd'],
    brand: ['mp', 'sw', 'bdm']
  },
  {
    id: 'back-gem-abc-d-yes24-sw-bdm',
    ver: ['limit', 'abc', 'd'],
    brand: ['yes24', 'sw', 'bdm']
  },
  {
    id: 'back-gem-d-yes24-jyp-bdm',
    ver: ['d'],
    brand: ['yes24', 'jyp', 'bdm']
  },
  {
    id: 'back-gem-d-am',
    ver: ['d'],
    brand: ['am']
  },
  {
    id: 'back-gem-d-bdm',
    ver: ['d'],
    brand: ['bdm']
  },
  {
    id: 'back-gem-d-jyp',
    ver: ['d'],
    brand: ['jyp']
  },
  {
    id: 'back-gem-d-yes24',
    ver: ['d'],
    brand: ['yes24']
  }
]

const nonBackItems = [
  {
    id: 'non-back-abc-k4-feiChina',
    ver: ['abc'],
    brand: ['k4']
  },
  {
    id: 'non-back-abc-am-feiChina',
    ver: ['abc'],
    brand: ['am']
  },
  {
    id: 'non-back-abc-bdm-feiChina',
    ver: ['abc'],
    brand: ['bdm']
  },
  {
    id: 'non-back-abc-kms-feiChina-1',
    ver: ['abc'],
    brand: ['kms']
  },
  {
    id: 'non-back-abc-kms-feiChina-2',
    ver: ['abc'],
    brand: ['kms']
  },
  {
    id: 'non-back-abc-yzy-feiChina',
    ver: ['abc'],
    brand: ['yzy']
  },
  {
    id: 'non-back-abc-sr-feiChina',
    ver: ['abc'],
    brand: ['sr']
  },
  {
    id: 'non-back-abc-ny-feiChina',
    ver: ['abc'],
    brand: ['ny']
  },
  {
    id: 'non-back-d-k4-feiChina',
    ver: ['d'],
    brand: ['k4']
  },
  {
    id: 'non-back-d-mk-yes24-feiChina',
    ver: ['d'],
    brand: ['mk','yes24']
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

  if (!ver || !allVer.includes(ver)) {
    ver = null;
  }
  if (!brand || !allBrand.includes(brand)) {
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
  var x = document.getElementById(id);

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