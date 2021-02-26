import { chain } from "lodash";

export const addClasses = (el: Node, classes = []) => {
  const newElement = el.cloneNode();

  (<Element>newElement).classList.add(...classes);

  return newElement;
};

export const appendChildren = (el: Node, children = []) => {
  const newElement = el.cloneNode();

  children.forEach((child) => {
    if (child !== null && typeof child !== "object") {
      (<Element>newElement).append(document.createTextNode(child));
    } else if (child !== null) {
      (<Element>newElement).append(child);
    }
  });

  return newElement;
};

const addAttributeSrc = (el:Node, src = "") => {
  const newElement = el.cloneNode();
  (<Element>newElement).setAttribute("src", src);
  return newElement;
};

export const element = (
  tagName:string,
  {
    classNames = [],
    children = [],
    listeners = {},
    src = "",
    ...additionalProps
  }
) =>
  chain(document.createElement(tagName))
    .thru((el: HTMLElement) => addAttributeSrc(el, src))
    .thru((el: HTMLElement) => addClasses(el, classNames))
    .thru((el: HTMLElement) => appendChildren(el, children))
    .tap((el: Element) => {
      Object.entries(listeners).forEach(([listner, cb]) => {
        el.addEventListener(listner, cb);
      });
    })
    .value();

export const div = (props: object) => element("div", props);
export const a = (props: object) => element("a", props);
export const img = (props: object) => element("img", props);
export const span = (props: object) => element("span", props);

export const card = (user: object, i:number, data:object[]) =>
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
