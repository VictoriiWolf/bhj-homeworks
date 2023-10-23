const url = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';
const items = document.querySelector('#items');
let xhr = new XMLHttpRequest();

xhr.open('GET', url);

xhr.onreadystatechange = function(event) {
  if(this.readyState === 4 && this.status === 200) {
    let responseText = this.responseText;
    let parsedResponse = JSON.parse(responseText);
    let valuteList = parsedResponse.response.Valute;

    for(const item in valuteList) {
      if(valuteObj.hasOwnProperty(item)) {
        const currencyItem = valuteList[item];

        const itemCode = document.createElement('div');
        itemCode.className = 'item__code';
        itemCode.innerHTML = currencyItem.CharCode;

        const itemValue = document.createElement('div');
        itemValue.className = 'item__value';
        itemValue.innerHTML = currencyItem.Value;

        const itemCurrency = document.createElement('div');
        itemCurrency.className = 'item__currency';
        itemCurrency.innerHTML = 'руб.';

        const itemString = document.createElement('div');
        itemString.className = 'item';


        itemString.appendChild(itemCode);
        itemString.appendChild(itemValue);
        itemString.appendChild(itemCurrency);
        items.appendChild(itemString);
      };
    };

    loader.classList.toggle('loader_active');
  };
};

xhr.send();