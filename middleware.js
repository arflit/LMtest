const data = {
  displayedName: {
    displayedName: {
      value: ["Профиль маячковый ПВХ 10 мм L3м"],
      description: "Полное наименование товара для клиента",
    },
  },
  stock: {
    stocks: {
      34: {
        2: "35",
        3: "42",
        4: "58",
        5: "57",
        6: "112",
        20: "51",
        22: "78",
        26: "34",
        32: "22",
        35: "358",
        40: "28",
        43: "68",
        45: "58",
        49: "31",
        51: "29",
        56: "42",
        62: "26",
        64: "0",
        65: "57",
        86: "15",
        114: "41",
        117: "46",
        143: "46",
        162: "4",
        171: "0",
        176: "12",
      },
    },
  },
};

function getValue(data) {
  const value = data.displayedName.displayedName.value[0];
}

function getStocks(data) {
  const shopArr = Object.keys(data.stock.stocks[34]);
  const stockArr = Object.values(data.stock.stocks[34]);
  const result = shopArr.filter((shop, i) => {
    if (stockArr[i] > 0) {
      return shop;
    }
  });

  if (result.length > 0) {
    return result;
  } else {
    return "Товара нет в наличии в регионе";
  }
}

function getMaxStock(data) {
  const shopArr = Object.keys(data.stock.stocks[34]);
  const stockArr = Object.values(data.stock.stocks[34]);
  const maxStock = Math.max.apply(null, stockArr);
  const shops = shopArr.filter((shop, i) => {
    if (stockArr[i] == maxStock) {
      return shop;
    }
  });

  if (shops.length >= 1) {
    return ({ maxStock, shops });
  } else {
    return "Товара нет в наличии в регионе";
  }
}
