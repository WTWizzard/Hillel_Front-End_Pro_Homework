const element = (
  tagName,
  { classNames = [], children = [], ...additionalProps }
) => {
  const tag = document.createElement(tagName);

  tag.classList.add(...classNames);

  children.forEach((child) => {
    if (child !== null && typeof child !== "object") {
      tag.append(document.createTextNode(child));
    } else if (child !== null) {
      tag.append(child);
    }
  });

  return tag;
};

export const card = (unit) => {
    const cardWrapper = element('div', {
        classNames: ['card'],
        children: [
            element('div', {
                classNames: ['card-name'],
                children: [unit.name]
            }),
            element('div', {
                classNames: ['card-name'],
                children: [unit.level]
            })
        ]
    })
    return cardWrapper
};


