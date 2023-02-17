import { data } from './data.js';

const grid = document.createElement('div')
document.body.append(grid);

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