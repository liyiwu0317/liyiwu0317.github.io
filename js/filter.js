const allVer = ['abc', 'd'];
const allBrand = ['am', 'sw', 'yes24', 'mp', 'jyp', 'mk', 'bdm'];

const backItems = [
  {
    id: 'back-feiChina-abc-am',
    ver: 'abc',
    brand: ['am']
  },
  {
    id: 'back-feiChina-abc-mp',
    ver: 'abc',
    brand: ['mp']
  },
  {
    id: 'back-feiChina-abc-sw',
    ver: 'abc',
    brand: ['sw']
  },
  {
    id: 'back-feiChina-abc-jyp',
    ver: 'abc',
    brand: ['jyp']
  },
  {
    id: 'back-feiChina-abc-yes24',
    ver: 'abc',
    brand: ['yes24']
  },
  {
    id: 'back-feiChina-d-mk',
    ver: 'd',
    brand: ['mk']
  },
  // {
  //   id: 'back-feiChina-d-yes24',
  //   ver: 'd',
  //   brand: ['yes24']
  // },
  {
    id: 'back-gem-abc-mp',
    ver: 'abc',
    brand: ['mp']
  },
  {
    id: 'back-gem-abc-bdm',
    ver: 'abc',
    brand: ['bdm']
  },
  {
    id: 'back-gem-d-am',
    ver: 'd',
    brand: ['am']
  },
  {
    id: 'back-gem-d-bdm',
    ver: 'd',
    brand: ['bdm']
  },
  {
    id: 'back-gem-d-jyp',
    ver: 'd',
    brand: ['jyp']
  },
  {
    id: 'back-gem-d-yes24',
    ver: 'd',
    brand: ['yes24']
  }
]

const nonBackItems = [
  {
    id: 'non-back-feiChina-abc-k4',
    ver: 'abc',
    brand: ['k4']
  },
  {
    id: 'non-back-feiChina-abc-am',
    ver: 'abc',
    brand: ['am']
  },
  {
    id: 'non-back-feiChina-abc-bdm',
    ver: 'abc',
    brand: ['bdm']
  },
  {
    id: 'non-back-feiChina-d-k4',
    ver: 'd',
    brand: ['k4']
  },
  {
    id: 'non-back-feiChina-d-mk-yes24',
    ver: 'd',
    brand: ['mk','yes24']
  },
  {
    id: 'non-back-gem-abc-yes24',
    ver: 'abc',
    brand: ['yes24']
  },
  {
    id: 'non-back-gem-abc-sw',
    ver: 'abc',
    brand: ['sw']
  },
  {
    id: 'non-back-gem-abc-mp',
    ver: 'abc',
    brand: ['mp']
  },
  {
    id: 'non-back-gem-abc-k4',
    ver: 'abc',
    brand: ['k4']
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
    if((!ver || x.ver === ver) && (!brand || x.brand.includes(brand))) {
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