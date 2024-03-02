let elementsel=document.querySelector(".elements")
let elementsel1=document.querySelector(".elements1")
let elementsel2=document.querySelector(".elements2")
let elementsel3=document.querySelector(".elements3")
let cartitemsel =document.querySelector(".cartitems")
let subtotal=document.querySelector(".subtotal")
let itemsincart =document.querySelector(".btn-white sup")

const food = [
    {
        id:1,
        name:"Magnam Tistle",
        desc:"Lorem, deren, trataro, filede, nerada",
        price:5.95,
        stock:9,
        qty:0
    },
    {
        id:2,
        name:"Aut Luia",
        desc:"Lorem, deren, trataro, filede, nerada",
        price:14.95,
        stock:8,
        qty:0
    },
    {
        id:3,
        name:"Est Eligendi",
        desc:"Lorem, deren, trataro, filede, nerada",
        price:8.95,
        stock:12,
        qty:0
    },
    {
        id:4,
        name:"Eos Luibusdam",
        desc:"Lorem, deren, trataro, filede, nerada",
        price:12.95,
        stock:9,
        qty:0
    },
    {
        id:5,
        name:"Eos Luibusdam",
        desc:"Lorem, deren, trataro, filede, nerada",
        price:8.95,
        stock:5,
        qty:0
    },
    {
        id:6,
        name:"Laboriosam Direva",
        desc:"Lorem, deren, trataro, filede, nerada",
        price:9.95,
        stock:11,
        qty:0
    }
]

function displayfood()
{
        food.forEach((item)=>{
            elementsel.innerHTML+=
         `<div class="col">
             <div class="card h-100 border-0 bg-light">
              <img src="img/menu/${item.id}.png" class="img-fluid mx-auto d-block w-75 " alt="...">
              <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.desc}</p>
                <h5 class="text-danger">$ ${item.price} <span class="ms-5">
                <button type="button" class="btn btn-danger" onclick=addtocart(${item.id})>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                </svg></button></span></h5>
              </div>
            </div>
          </div>
         `
        })
}
displayfood()


function displayfood1()
{
        food.forEach((item)=>{
            elementsel1.innerHTML+=
         `<div class="col">
             <div class="card h-100 border-0 bg-light">
              <img src="img/menu/${item.id}.png" class="img-fluid mx-auto d-block w-75 " alt="...">
              <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.desc}</p>
                <h5 class="text-danger">$ ${item.price} <span class="ms-5">
                <button type="button" class="btn btn-danger"  onclick=addtocart(${item.id})>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                </svg></button></span></h5>
              </div>
            </div>
          </div>
         `
        })
}
displayfood1()


function displayfood2()
{
        food.forEach((item)=>{
            elementsel2.innerHTML+=
         `<div class="col">
             <div class="card h-100 border-0 bg-light">
              <img src="img/menu/${item.id}.png" class="img-fluid mx-auto d-block w-75 " alt="...">
              <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.desc}</p>
                <h5 class="text-danger">$ ${item.price} <span class="ms-5">
                <button type="button" class="btn btn-danger"  onclick=addtocart(${item.id})>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                </svg></button></span></h5>
              </div>
            </div>
          </div>
         `
        })
}
displayfood2()


function displayfood3()
{
        food.forEach((item)=>{
            elementsel3.innerHTML+=
         `<div class="col">
             <div class="card h-100 border-0 bg-light">
              <img src="img/menu/${item.id}.png" class="img-fluid mx-auto d-block w-75 " alt="...">
              <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.desc}</p>
                <h5 class="text-danger">$ ${item.price} <span class="ms-5">
                <button type="button" class="btn btn-danger" onclick=addtocart(${item.id})>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                </svg></button></span></h5>
              </div>
            </div>
          </div>
         `
        })
}
displayfood3()

let cart=JSON.parse(localStorage.getItem("CART")) || [];

updatecart();
function addtocart(id)
{
  // Check if product already exist
  if(cart.some((item)=>item.id===id))
  {
  changeqty("plus",id);
  }
  else{
    const item=food.find((product)=>product.id===id);
    cart.push({
      ...item,
      qty:1
    });
  }
  updatecart();
}

function updatecart()
{
  rendercartitems();
  rendersubtotal();
  localStorage.setItem("CART",JSON.stringify(cart));
}
function rendercartitems()
{
  cartitemsel.innerHTML="";
  cart.forEach((item)=>{
  cartitemsel.innerHTML+=
    
    `<table class="table w-100">
  <tbody>
    <tr>
      <td><img src="img/menu/${item.id}.png" height=50 width=50 alt=""></td>
      <td><p style="font-size:13px;">${item.name}</p></td>
      <td>$${item.price}</td>
      <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" onclick="changeqty('minus',${item.id})" viewBox="0 0 16 16" >
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
      <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
    </svg>${item.qty}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" onclick="changeqty('plus',${item.id})" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
  </svg></td>
      <td><i class="fa-solid fa-trash text primary" onclick="removeitem(${item.id})"></i></td>
    </tr>
  </tbody>
</table>`

  })
}
function changeqty(action,id)
{
  cart=cart.map((item)=>{
    let qty=item.qty;
    if(item.id===id)
    {
      if(action==="minus" && qty>1)
      {
        qty--;
      }
      else if(action==="plus" &&qty<item.stock)
      {
        qty++;
      }
    }
    return{
      ...item,
      qty,
    };
  })
  updatecart();
}

function rendersubtotal()
{
  let totalprice=0,totalitems=0;
  cart.forEach((item)=>{
    totalprice+=item.price*item.qty;
    totalitems+=item.qty;
  });

  subtotal.innerHTML=`Subtotal(${totalitems} items):$${totalprice.toFixed(2)}`
   itemsincart.innerHTML=totalitems;
}
function removeitem(id)
{
  cart=cart.filter((item)=>item.id!==id);
  updatecart();
}
