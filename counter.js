let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')
let count = 0;
let increment = () => {
    console.log('clicked')
    count += 1;
    countEl.textContent = count
}
let save = () => {
    let countstr = count + '- ';
    saveEl.textContent += countstr;
    countEl.textContent = 0;
    count = 0;
}