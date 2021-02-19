import { div, a, img, span, card } from "./utils";

const url = "https://rickandmortyapi.com/api/character";

const getUsers = (url) => fetch(url);

const app = document.getElementById("app");

const getJsonFromResponse = (response) => response.json();

const data = getUsers(url).then(getJsonFromResponse);

data.then((gottenData) => {
  let currentSlide = 0;
  const characters = gottenData.results;
  let next_url = gottenData.info.next;
  let prev_url = gottenData.info.prev;
  let cards, dots;

  const type = {
    new_data_next: "new_data_next",
    new_data_prev: "new_data_prev",
    same_data: "same_data",
  };

  const getNewList = (url, type) => {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => ({
        type: type,
        data,
      }));
  };

  const setActualSlide = (index) => {
    cards.forEach((card) => card.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    Promise.resolve(currentSlide)
      .then((slide) => {
        if (slide === characters.length) {
          return getNewList(next_url, type.new_data_next);
        } else if (slide === 0) {
          return getNewList(prev_url, type.new_data_prev);
        } else {
          return {
            type: type.same_data,
          };
        }
      })
      .then((result) => {
        switch (result.type) {
          case type.new_data_next:
            characters = [...result.data.result];
            cards[index].classList.add("active");
            dots[index].classList.add("active");
            currentSlide = index;
            break;
          case type.new_data_prev:
            characters = [...result.data.result];
            cards[index].classList.add("active");
            dots[index].classList.add("active");
            currentSlide = index;
            break;
          default:
            characters = [...result.data.result];
            cards[index].classList.add("active");
            dots[index].classList.add("active");
            currentSlide = index;
            break;
        }
      });
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
                ? currentSlide
                : currentSlide + 1
            ),
        },
        children: ["❯"],
      }),
      ...(cards = characters.map((user, i) =>
        div({
          classNames: ["mySlides", "fade", !i ? "active" : "hide"],
          children: [
            div({
              classNames: ["numbertext"],
              children: [`${i + 1}/${characters.length}`],
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
        })
      )),
    ],
  });

  const dotsWrapper = div({
    classNames: ["dots-wrapper"],
    children: (dots = characters.map((_, i) =>
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
