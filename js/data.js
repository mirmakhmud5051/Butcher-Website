// let datas = [
//   {
//     id: 1,
//     image: "./images/hero5 meat.jpg",

//     title: "Beef for Nutritions",
//     describtion: "beef for nutritions",
//     price: "12$",
//   },
//   {
//     id: 2,
//     image: "./images/hero5 meat.jpg",

//     title: "Beef for Nutritions",
//     describtion: "beef for nutritions",
//     price: "12$",
//   },
//   {
//     id: 3,
//     image: "./images/hero5 meat.jpg",

//     title: "Beef for Nutritions",
//     describtion: "beef for nutritions",
//     price: "12$",
//   },
//   {
//     id: 4,
//     image: "./images/hero5 meat.jpg",
//     title: "Beef for Nutritions",
//     describtion: "beef for nutritions",
//     price: "12$",
//   },
// ];

// let boxes = document.querySelector(".boxes");
// console.log(boxes);

// let card = null;

// datas.forEach((item) => {
//   let box = document.createElement("div");
//   box.innerHTML = `

// <img src="${item.image}" alt="">
// <h3>${item.describtion}</h3>
// <h1>${item.title}</h1>
// <mark>${item.price}</mark>
// <span>${item.id}</span>
// `;
//   boxes.appendChild(box);
//   box.style.width = "100%";
//   box.style.height = "100vh";
//   box.style.width = "400px";
//   box.style.height = "400px";
//   box.style.borderRadius = "30px";

//   box.addEventListener("click", () => {
//     card = item.id;
//     console.log("Selected Card", card);
//     window.location.href = `card.html?id=${card}`;
//     card.createElement(
//      box.text(`
//         <b> ${item.id}</b>
// <img src="${item.image}" alt="">
// <h3>${item.describtion}</h3>
// <h1>${item.title}</h1>
// <mark>${item.price}</mark>
// <span>${item.id}</span>

//       `),
//     );
//     card.style.width = '400px'
//   });
// });

// export default [datas];

let datas = [
  {
    id: 1,
    image: "./images/hero5 meat.jpg",
    title__h4: "BEEF FOR NUTRITIONS",
    title__h2: "Beef 1 Kg Pack",
    subtitle:
      "Flowbase is the largest webflow resource site, with. Flowbase is the ",
    button: "Add To Cart - $12",
  },
  {
    id: 2,
    image: "./images/hero5 meat.jpg",
    title__h4: "BEEF FOR NUTRITIONS",
    title__h2: "Beef 1 Kg Pack",
    subtitle:
      "Flowbase is the largest webflow resource site, with. Flowbase is the ",
    button: "Add To Cart - $12",
  },
  {
    id: 3,
    image: "./images/hero5 meat.jpg",
    title__h4: "BEEF FOR NUTRITIONS",
    title__h2: "Beef 1 Kg Pack",
    subtitle:
      "Flowbase is the largest webflow resource site, with. Flowbase is the ",
    button: "Add To Cart - $12",
  },
  {
    id: 4,
    image: "./images/hero5 meat.jpg",
    title__h4: "BEEF FOR NUTRITIONS",
    title__h2: "Beef 1 Kg Pack",
    subtitle:
      "Flowbase is the largest webflow resource site, with. Flowbase is the ",
    button: "Add To Cart - $12",
  },
];

let boxes = document.querySelector(".boxes");
let card = null;

datas.forEach((item) => {
  const box = document.createElement("div");
  box.innerHTML = `
  <img style="border-radius:15px" width="300px" height="400" src="${item.image}" alt=""
  <h4>${item.title__h4}</h4>
  <h2>${item.title__h2}</h2>
  <p style="width:250px; color:#656D89">${item.subtitle}</p>
  <button style="padding:12px 60px; border-radius:20px; border:2px solid #E31244; color:#E31244; background-color:#fff">${item.button}</button>
  <span>${item.id}</span>`;

  boxes.appendChild(box);
  box.style.width = "270px";
  box.style.height = "476px";
  box.style.display = "flex";
  box.style.flexDirection = "column";
  box.style.alignItems = "center";
  box.style.gap = "7px";
  box.addEventListener("click", () => {
    card = item.id;
    console.log("Selected card:", card);
    window.location.href = `card.html?id=${card}`;
  });
});
