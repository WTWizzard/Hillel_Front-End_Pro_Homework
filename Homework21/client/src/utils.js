import { chain } from "lodash";

export const addClasses = (el, classes = []) => {
  const newElement = el.cloneNode();

  newElement.classList.add(...classes);

  return newElement;
};

export const appendChildren = (el, children = []) => {
  const newElement = el.cloneNode();

  children.forEach((child) => {
    if (child !== null && typeof child !== "object") {
      newElement.append(document.createTextNode(child));
    } else if (child !== null) {
      newElement.append(child);
    }
  });

  return newElement;
};

const addAttributeSrc = (el, src = "") => {
  const newElement = el.cloneNode();
  newElement.setAttribute("src", src);
  return newElement;
};

export const element = (
  tagName,
  {
    classNames = [],
    children = [],
    listeners = {},
    src = "",
    ...additionalProps
  }
) =>
  chain(document.createElement(tagName))
    .thru((el) => addAttributeSrc(el, src))
    .thru((el) => addClasses(el, classNames))
    .thru((el) => appendChildren(el, children))
    .tap((el) => {
      Object.entries(listeners).forEach(([listner, cb]) => {
        el.addEventListener(listner, cb);
      });
    })
    .value();

export const div = (props) => element("div", props);
export const a = (props) => element("a", props);
export const img = (props) => element("img", props);
export const span = (props) => element("span", props);

export const card = (user, i, data) =>
  div({
    classNames: ["mySlides", "fade", !i ? "active" : "hide"],
    children: [
      div({
        classNames: ["numbertext"],
        children: [`${i + 1}/${data.length}`],
      }),
      img({
        classNames: ["slider-image"],
        src: user.image,
      }),
      div({
        classNames: ["text"],
        children: [user.name],
      }),
    ],
  });
