const gallery = document.querySelector(".gallery");

const fruits = [
  {
    title: "kiwi",
    imageUrl:
      "img/dress2.png",
  },
  {
    title: "Boutique",
    imageUrl:
      "img/boutique1.png",
  },
  {
    title: "Boutique",
    imageUrl:
      "img/boutique2.png",
  },
  {
    title: "Ressource",
    imageUrl:
      "img/ressource1.png",
  },
  {
    title: "Ressource",
    imageUrl:
      "img/ressource2.png",
  },
  {
    title: "Evenements",
    imageUrl:
      "img/evenements1.png",
  },
  {
    title: "Evenements",
    imageUrl:
      "img/evenements2.png",
  },
  {
    title: "Crypto",
    imageUrl:
      "img/crypto1.png",
  },
  {
    title: "Crypto",
    imageUrl:
      "img/crypto2.png",
  },
  {
    title: "Web",
    imageUrl:
      "img/web1.png",
  },
  {
    title: "Web",
    imageUrl:
      "img/web2.png",
  },
  {
    title: "Coaching",
    imageUrl:
      "img/formations1.png",
  },
  {
    title: "Coaching",
    imageUrl:
      "img/formation2.png",
  },
];

fruits.map((fruit) => {
  fruitElement = document.createElement("img");
  fruitElement.src = fruit.imageUrl;
  fruitElement.alt = fruit.title;
  gallery.append(fruitElement);
});
