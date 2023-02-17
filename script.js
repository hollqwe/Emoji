import { data } from './data.js';

const grid = document.querySelector('.grid');
// document.body.append(grid);
const input = document.querySelector('input');

function Box(data) {
    for (let el of data) {
        createCard(el)
    }
}
Box(data)


function createCard (obj) {
    const wrap = document.createElement('div');
    wrap.className = 'content';

    const symbol = document.createElement('p');
    symbol.textContent = obj.symbol;
    symbol.className = 'symbol'

    const title = document.createElement('p');
    title.textContent = obj.title;
    title.className = 'title'

    const keywords = document.createElement('p');
    keywords.textContent = obj.keywords;
    keywords.className = 'keywords'

    
    wrap.append(symbol, title, keywords);
    grid.append(wrap);
  }
  

  function inputSearch(event) {
    grid.innerHTML = "";
    let value = event.target.value.toLowerCase().trim();
    data
    .filter(
        (item) => 
        item.title.toLowerCase().trim().includes(value) || 
        item.keywords.toLowerCase().trim().includes(value)
        )
    .forEach((item) => grid.append(createCard(item)));
  }
    

input.addEventListener('input', inputSearch);

data.forEach((card) => grid.append(createCard(card)));