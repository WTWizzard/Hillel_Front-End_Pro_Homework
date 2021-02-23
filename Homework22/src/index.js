const cross = document.querySelector(".cross-wrapp");

document.addEventListener("mousemove", (e) => {
  let x = e.clientX - 200;
  let y = e.clientY - 200;

  cross.style.left = x + "px";
  cross.style.top = y + "px";
});
