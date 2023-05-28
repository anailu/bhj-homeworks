const loader = document.getElementById('loader');
const itemsContainer = document.getElementById('items');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses', true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);

    for (const currencyCode in response.response.Valute) {
        if (response.response.Valute.hasOwnProperty(currencyCode)) {
          const currency = response.response.Valute[currencyCode];
  
          const codeElement = document.createElement('div');
          codeElement.classList.add('item__code');
          codeElement.textContent = currency.CharCode;
  
          const valueElement = document.createElement('div');
          valueElement.classList.add('item__value');
          valueElement.textContent = currency.Value;
  
          const currencyElement = document.createElement('div');
          currencyElement.classList.add('item__currency');
          currencyElement.textContent = 'руб.';
  
          itemsContainer.appendChild(codeElement);
          itemsContainer.appendChild(valueElement);
          itemsContainer.appendChild(currencyElement);
        }
    }

    hideLoader();
  }
};
xhr.send();

function hideLoader() {
    loader.classList.remove('loader_active');
}