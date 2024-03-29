const Options = {
  "ver": ["limit", "rr", "p", "h"],
  "brand": [
    'mix',
    "am",
    "ald",
    "bdm",
    "bdn",
    "el",
    "jyp",
    "k4",
    "kms",
    "mk",
    "mmt",
    "mp",
    "ms",
    "sw",
    "wm",
    "yes24",
    "yzy",
    "yzy-v2",
    "sr",
    "ny",
    "target",
    "bn",
    "walmart",
    "fnac"
  ],
  "shipping": ["back", "non-back"],
  "fansite": ["china", "gem"],
}
const brandMap = {
  "am": "AM",
  "ald": "阿拉丁",
  "bdm": "BDM",
  "bdn": "BDN",
  "el": "EL",
  "jyp": "JYP",
  "k4": "K4",
  "kms": "KMS",
  "mk": "MK",
  "mmt": "MMT",
  "mp": "MP",
  "ms": "MS",
  "sw": "SW",
  "wm": "WM",
  "yes24": "YES24",
  "yzy": "一直娱",
  "yzy-v2": "一直娱 2.0",
  "sr": "SR",
  "ny": "楠艺",
  "target": "美网TARGET",
  "bn": "美网BN",
  "walmart": "美网Walmart",
  "fnac": "法特Fnac",
}

let totalItems = [
  ...k4Items,
  ...srItems,
  ...bearItems,
  ...nanyiItems,
  ...yetimallItems,
  ...idoustageItems,
  ...oxbldkrItems,
  ...yzyItems,
  ...kramItems,
  ...kpopmerchItems,
  ...mmtshopItems,
  ...msItems,
  ...wdChinaItems,
  ...wdGemItems,
  ...backItems,
  ...nonBackItems,
];

function getUniqueItems (items) {
  let uniqueIDs = [];
  let uniqueItems = [];
  items.forEach(x => {
    if (!uniqueIDs.includes(x.id)) {
      uniqueIDs.push(x.id);
      uniqueItems.push(x);
    }
  })

  // reorder
  let onSaleItems = [];
  let soldOutItems = [];
  uniqueItems.forEach(x => {
    if (x.soldOut) {
      soldOutItems.push(x);
    } else {
      onSaleItems.push(x);
    }
  })

  return [...onSaleItems,...soldOutItems];
}

function findMatchItems(items, ver, brand, shipping, onlyFelix, fansite, allVersion) {
  let showItems = [];
  let hideItems = [];

  if (!ver || !Options.ver.includes(ver)) {
    ver = null;
  }
  if (!brand || !Options.brand.includes(brand)) {
    brand = null;
  }
  if (!shipping || !Options.shipping.includes(shipping)) {
    shipping = null;
  }
  if (!fansite || !Options.fansite.includes(fansite)) {
    fansite = null;
  }

  items.forEach(x => {
    if(
      (!ver || x.ver.includes(ver)) &&
      (!brand || x.brand.includes(brandMap[brand]) || (brand === 'mix' && x.brandMix)) &&
      (!shipping || x.shipping === shipping) &&
      (!onlyFelix || x.onlyFelix) &&
      (!fansite || x.fansite.includes(fansite)) &&
      (!allVersion || x.allVersion)
    ) {
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
  let x = document.getElementById(id);

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

function onFansiteChanged(option, page) {
  let brand = $(`#brandSelection`).val();
  let ver = $(`#platformSelection`).val();
  let fansite = option.value;
  let shipping = $(`#shippingSelection`).val();
  let onlyFelix = document.getElementById("onlyFelixCheckbox");
  let allVersion = document.getElementById("allVersionCheckbox");
  let items = [];

  if (page === 'search') items = totalItems;

  const objs = findMatchItems(items, ver, brand, shipping, onlyFelix ? onlyFelix.checked : null, fansite, allVersion ? allVersion.checked : null);

  for (const id of objs.showItems) {
    changeToShow(id);
  }

  for (const id of objs.hideItems) {
    changeToHide(id);
  }
}

function onShippingChanged(option, page) {
  let brand = $(`#brandSelection`).val();
  let ver = $(`#platformSelection`).val();
  let fansite = $(`#fansiteSelection`).val();
  let shipping = option.value;
  let onlyFelix = document.getElementById("onlyFelixCheckbox");
  let allVersion = document.getElementById("allVersionCheckbox");
  let items = [];

  if (page === 'search') items = totalItems;

  const objs = findMatchItems(items, ver, brand, shipping, onlyFelix ? onlyFelix.checked : null, fansite, allVersion ? allVersion.checked : null);

  for (const id of objs.showItems) {
    changeToShow(id);
  }

  for (const id of objs.hideItems) {
    changeToHide(id);
  }
}

function onPlatformChanged(option, page, otherSelection) {
  let brand = $(`#${otherSelection}`).val();
  let ver = option.value;
  let fansite = $(`#fansiteSelection`).val();
  let shipping = $(`#shippingSelection`).val();
  let onlyFelix = document.getElementById("onlyFelixCheckbox");
  let allVersion = document.getElementById("allVersionCheckbox");
  let items = [];

  if (page === 'back') items = backItems;
  else if (page === 'non-back') items = nonBackItems;
  else if (page === 'search') items = totalItems;

  const objs = findMatchItems(items, ver, brand, shipping, onlyFelix ? onlyFelix.checked : null, fansite, allVersion ? allVersion.checked : null);

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
  let fansite = $(`#fansiteSelection`).val();
  let shipping = $(`#shippingSelection`).val();
  let onlyFelix = document.getElementById("onlyFelixCheckbox");
  let allVersion = document.getElementById("allVersionCheckbox");
  let items = [];

  if (page === 'back') items = backItems;
  else if (page === 'non-back') items = nonBackItems;
  else if (page === 'search') items = totalItems;

  const objs = findMatchItems(items, ver, brand, shipping, onlyFelix ? onlyFelix.checked : null, fansite, allVersion ? allVersion.checked : null);

  for (const id of objs.showItems) {
    changeToShow(id);
  }

  for (const id of objs.hideItems) {
    changeToHide(id);
  }
}

function onCheckboxChanged(checkboxElem) {
  let brand = $(`#brandSelection`).val();
  let ver = $(`#platformSelection`).val();
  let fansite = $(`#fansiteSelection`).val();
  let shipping = $(`#shippingSelection`).val();
  let onlyFelix = checkboxElem;
  let allVersion = document.getElementById("allVersionCheckbox");
  let items = [];

  items = totalItems;

  const objs = findMatchItems(items, ver, brand, shipping, onlyFelix.checked, fansite, allVersion ? allVersion.checked : null);

  for (const id of objs.showItems) {
    changeToShow(id);
  }

  for (const id of objs.hideItems) {
    changeToHide(id);
  }
}

function onAllVerCheckboxChanged(checkboxElem) {
  let brand = $(`#brandSelection`).val();
  let ver = $(`#platformSelection`).val();
  let fansite = $(`#fansiteSelection`).val();
  let shipping = $(`#shippingSelection`).val();
  let onlyFelix = document.getElementById("onlyFelixCheckbox");
  let allVersion = checkboxElem;
  let items = [];

  items = totalItems;

  const objs = findMatchItems(items, ver, brand, shipping, onlyFelix ? onlyFelix.checked : null, fansite, allVersion.checked);

  for (const id of objs.showItems) {
    changeToShow(id);
  }

  for (const id of objs.hideItems) {
    changeToHide(id);
  }
}

function addTitle(title) {
  return `<h4 class="w3-container w3-padding-16"><b>${title}</b></h4>`;
}

function addItem(item) {
  let aa = `<div id="${item.id}" class="col">` + `<div class="card h-100 card-box">`;

  // image
  aa += `<div class="w3-display-container">`;
  if (item.soldOut) {
    aa += `<div class="sold-out-top-left"><span>售罄</span></div>`;
  }
  if (item.shipping === 'non-back') {
    aa += `<div class="non-back-top-right"><span>拆卡</span></div>`;
  }
  if (item.ribbon) {
    aa += `<div class="ribbon ribbon-top-right"><span>${item.ribbon}</span></div>`;
  }
  aa += `<img data-src="${item.image}" class="lazyload card-img-top">` + '<div class="w3-display-middle w3-display-hover">';
  if (item.modalID) {
    aa += `<button class="w3-button w3-black rounded-pill" onClick="document.getElementById('${item.modalID}').style.display='block'" >购买 <i class="fa-solid fa-arrow-right"></i></button>`;
  } else {
    aa += `<button class="w3-button w3-black rounded-pill" onClick="parent.open('${item.buyLink}')">购买 <i class="fa-solid fa-arrow-right"></i>'</button>`;
  }
  aa += '</div>' + '</div>';

  // body
  aa += `<div class="card-body">`;
  if (item.brand.length > 0) {
    aa += '<div class="w3-margin-bottom">';
  } else {
    aa += '<div>'
  }

  // title, brand
  aa += `<div class="c-title">${item.title}</div>`;
  for (const brand of item.brand) {
    aa += `<span class="badge border border-primary-subtle text-primary-emphasis badge-font-weight rounded">${brand}</span>`;
  }

  // hit
  if (item.hit.length > 0) {
    aa += '</div>';
    aa += '<ul class="w3-small c-ul">';
    for (const hit of item.hit) {
      aa += `<li>${hit}</li>`;
    }
    aa += ' </ul>';
  } else {
    aa += '</div>';
  }

  // descLink, price
  aa += '</div><div class="card-footer">';
  if (item.descLink.length > 0) {
    aa += `<span class="c-price">${item.price}</span>` + `<a href="${item.descLink}" target="_blank" class="w3-right c-a" >说明</a>`;
  } else {
    aa += `<span class="c-price">${item.price}</span>`;
  }
  aa += '</div></div></div>';

  return aa;
}