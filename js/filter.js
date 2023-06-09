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
    "mmt",
    "mp",
    "ms",
    "sw",
    "wm",
    "yes24",
    "yzy",
    "yzy-v2",
    "sr",
    "ny"
  ],
  "shipping": ["back", "non-back"]
}
const brandMap = {
  "am": "AM",
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
  "sr": "星河",
  "ny": "楠艺"
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
  ...wdItems,
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
  return uniqueItems;
}

function findMatchItems(items, ver, brand, shipping, onlyFelix) {
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

  items.forEach(x => {
    if(
      (!ver || x.ver.includes(ver)) &&
      (!brand || x.brand.includes(brandMap[brand])) &&
      (!shipping || x.shipping === shipping) &&
      (!onlyFelix || x.onlyFelix)
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

function onShippingChanged(option, page) {
  let brand = $(`#brandSelection`).val();
  let ver = $(`#platformSelection`).val();
  let shipping = option.value;
  let onlyFelix = document.getElementById("onlyFelixCheckbox");
  let items = [];

  if (page === 'search') items = totalItems;

  const objs = findMatchItems(items, ver, brand, shipping, onlyFelix ? onlyFelix.checked : null);

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
  let shipping = $(`#shippingSelection`).val();
  let onlyFelix = document.getElementById("onlyFelixCheckbox");
  let items = [];

  if (page === 'back') items = backItems;
  else if (page === 'non-back') items = nonBackItems;
  else if (page === 'search') items = totalItems;

  const objs = findMatchItems(items, ver, brand, shipping, onlyFelix ? onlyFelix.checked : null);

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
  let shipping = $(`#shippingSelection`).val();
  let onlyFelix = document.getElementById("onlyFelixCheckbox");
  let items = [];

  if (page === 'back') items = backItems;
  else if (page === 'non-back') items = nonBackItems;
  else if (page === 'search') items = totalItems;

  const objs = findMatchItems(items, ver, brand, shipping, onlyFelix ? onlyFelix.checked : null);

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
  let shipping = $(`#shippingSelection`).val();
  let onlyFelix = checkboxElem;
  let items = [];

  items = totalItems;

  const objs = findMatchItems(items, ver, brand, shipping, onlyFelix.checked);

  for (const id of objs.showItems) {
    changeToShow(id);
  }

  for (const id of objs.hideItems) {
    changeToHide(id);
  }
}

function addTitle(title) {
  return `<h3 class="w3-container w3-padding-16"><b>${title}</b></h3>`;
}

function addItem(item) {
  let aa = `<div id="${item.id}" class="col">` + `<div class="card h-100">`;

  // image
  aa += `<div class="w3-display-container">`;
  if (item.ribbon) {
    aa += `<div class="ribbon ribbon-top-right"><span>${item.ribbon}</span></div>`;
  }
  aa += `<img src="${item.image}" class="card-img-top">` + '<div class="w3-display-middle w3-display-hover">';
  if (item.modalID) {
    aa += `<button class="w3-button w3-black" onClick="document.getElementById('${item.modalID}').style.display='block'" >购买 <i class="fa fa-shopping-cart"></i></button>`;
  } else {
    aa += `<button class="w3-button w3-black" onClick="parent.open('${item.buyLink}')">购买 <i class="fa fa-shopping-cart"></i>'</button>`;
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
    aa += `<span class="badge bg-primary-subtle border border-primary-subtle text-primary-emphasis rounded-pill">${brand}</span>`;
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