export const div = (el) =>{
    const wrapper = document.createElement('div');
    wrapper.className = 'card';
    
    const cardName = document.createElement('div');
    cardName.className = 'card__name';
    cardName.innerText = el.name

    const cardLevel = document.createElement('div');
    cardLevel.className = 'card__level';
    cardLevel.innerText = el.level

    wrapper.append(cardName)
    wrapper.append(cardLevel)
    return wrapper;
} 