let datas = [
  {
    id: 1,
    title: "Beef for Nutritions",
    describtion: "beef for nutritions",
    price: "12$",
  },
  {
    id: 1,
    title: "Beef for Nutritions",
    describtion: "beef for nutritions",
    price: "12$",
  },
  {
    id: 1,
    title: "Beef for Nutritions",
    describtion: "beef for nutritions",
    price: "12$",
  },
  {
    id: 1,
    title: "Beef for Nutritions",
    describtion: "beef for nutritions",
    price: "12$",
  },
];

let boxes = document.getElementsByClassName('boxes')
console.log(boxes);

let card = null

datas.forEach((item) => {
  let  box = document.createElement('div')
box.innerHTML = `
<h3>${item.describtion}</h3>
<h1>${item.title}</h1>
<mark>${item.price}</mark>
<span>${item.id}</span>
`;
boxes.appendChild(box);
box.style.width = '100%'
box.style.height = '100vh'
box.style.backgroundColor = 'lightblue'

box.addEventListener("click", () => {
  card = item.id;
  console.log("Selected Card", card);
  window.location.href = `card.html?id=${card}`
  
})

})

export default [datas]

