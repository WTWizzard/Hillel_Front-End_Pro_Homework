import { div, a, img, span, card } from "./utils";

const url = "https://rickandmortyapi.com/api/character";

const getUsers = (url: string) => fetch(url);

const app: HTMLDivElement = document.getElementById("app");

const getJsonFromResponse = (response: Body) => response.json();

const data = getUsers(url).then(getJsonFromResponse);

data.then((gottenData) => {
  let currentSlide = 0;
  let characters = gottenData.results;
  let cards:HTMLElement[], dots: HTMLElement[];

  const setActualSlide = (index: number) => {
    cards.forEach((card) => card.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    cards[index].classList.add("active");
    dots[index].classList.add("active");
    currentSlide = index;
  };

  const wrapper = div({
    classNames: ["slideshow-container"],
    children: [
      a({
        classNames: ["prev"],
        listeners: {
          click: () => setActualSlide(!currentSlide ? 0 : currentSlide - 1),
        },
        children: ["❮"],
      }),
      a({
        classNames: ["next"],
        listeners: {
          click: () =>
            setActualSlide(
              currentSlide === characters.length - 1
                ? currentSlide + 1
                : currentSlide + 1
            ),
        },
        children: ["❯"],
      }),
      ...(cards = characters.map((user: object, i:number) => card(user, i, characters))),
    ],
  });

  const dotsWrapper = div({
    classNames: ["dots-wrapper"],
    children: (dots = characters.map((_: any, i: number) =>
      span({
        classNames: ["dot", !i ? "active" : "not-active"],
        listeners: {
          click: () => setActualSlide(i),
        },
      })
    )),
  });

  app.append(wrapper);
  app.append(dotsWrapper);
});
