menubtn.addEventListener("click", () => {
  dashboard.classList.toggle("slidout");
});

menuclose.addEventListener("click", () => {
  dashboard.classList.toggle("slidout");
});

Array.from(dashboard.querySelectorAll(".ditem")).forEach((item) => {
  item.addEventListener("click", () => {
    dashboard.classList.toggle("slidout");
  });
});
