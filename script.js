const bgs = [
  "linear-gradient(rgba(18,18,18,0.75), rgba(18,18,18,0.75)), url(https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
  "linear-gradient(rgba(18,18,18,0.75), rgba(18,18,18,0.75)), url(https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
  "linear-gradient(rgba(18,18,18,0.75), rgba(18,18,18,0.75)), url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80)",
  "linear-gradient(rgba(18,18,18,0.75), rgba(18,18,18,0.75)), url(https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80)",
  "linear-gradient(rgba(18,18,18,0.75), rgba(18,18,18,0.75)), url(https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
];

let cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
  card.style.setProperty("background", bgs[index]);
});

document.body.addEventListener(
  "click",
  (evt) => {
    if (evt.target.className === "card") {
      clearSelection();
      evt.target.classList.add("active");
    }
  },
  false
);

function clearSelection() {
  cards.forEach((card) => {
    card.classList.remove("active");
  });
}
