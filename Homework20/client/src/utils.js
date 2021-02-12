export const div = (el) =>{
    const wrapper = document.createElement('div');
    wrapper.className = 'card';
    let  cardName = `<div class="card__name">${el.name}</div>`;
    let cardLevel = `<div class="card__level">${el.level}</div>`;
    wrapper.innerHTML = cardName + cardLevel
    return wrapper;
} 