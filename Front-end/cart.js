document.querySelector("#signin").addEventListener("click",function s(){
    window.location="signin.html"
})

document.querySelector("#cart").addEventListener("click",function c(){
    window.location="cart.html"
})

document.querySelector("#logo").addEventListener("click",function l(){
    window.location="index.html"
})


let p=document.querySelectorAll(".b2>div")

for(i=0;i<p.length;i++){
  p[i].addEventListener("click",cate)
}

function cate(){
  window.location="product.html"
}


let cart_Items =JSON.parse(localStorage.getItem("cartdata")) || []


let total=localStorage.getItem("total")|| 0;

console.log("11")
displayItem(cart_Items)


function displayItem(data){
    total=0
document.querySelector(".container").textContent=""
document.querySelector("#stotal").innerHTML=0
data.map(function (ele,i){
 
    let divx = document.createElement("div");

    let div1 = document.createElement("div");
    let image = document.createElement("img")
    image.setAttribute("src",ele.img)

    let brand = document.createElement("p")
    brand.textContent = ele.brand
    brand.setAttribute("class","brandFont")

    let name = document.createElement("p")
    name.textContent = ele.title
    name.setAttribute("class","nameFont")

    let price = document.createElement("p")
    price.textContent=  ele.price
    price.setAttribute("class","price")
    

    console.log(ele.price)

    let button = document.createElement("button")
    button.textContent="Remove"
    button.addEventListener("click", function(){
      
    
        removItem(ele,i)
    
    })
    let button1 = document.createElement("button")
    button1.textContent="Add to wishlist"
    
    let divButton = document.createElement("div");
    divButton.setAttribute("class","divButton")

    let hr = document.createElement("hr");

    let div2 = document.createElement("div");
    // let quantity = document.createElement("p");
    // quantity.textContent=1
    let plusbtn=document.createElement("button")
            plusbtn.setAttribute("id","plusbtn")
            plusbtn.innerText="+"
            plusbtn.addEventListener("click",(e)=>{
                e.preventDefault()
                quantity.innerText++
                price2.textContent= `₹${quantity.innerText*Number(ele.price)}`;

                total+=Number(ele.price);
                localStorage.setItem("total",total)
                document.querySelector("#stotal").innerHTML=`₹${total}`
                
            })
            let quantity=document.createElement("span")
            quantity.innerText=1

            let minusbtn=document.createElement("button")
            minusbtn.setAttribute("id","minusbtn")
            minusbtn.innerText="-"
            minusbtn.addEventListener("click",(e)=>{
                e.preventDefault()
                quantity.innerText--
                price2.textContent= `₹${quantity.innerText*Number(ele.price)}`;

                total-=Number(ele.price);
                localStorage.setItem("total",total)
                document.querySelector("#stotal").innerHTML=`₹${total}`

                if(quantity.innerText<0){
                    quantity.innerText="0"
                }
                
            })

    let price2 = document.createElement("p")
    price2.textContent= `₹${quantity.textContent*Number(ele.price)}`;

    let  divy = document.createElement("div");

    div1.append(image)
    divButton.append(button,button1)
    div2.append(brand,name,divButton)

    let  div3 = document.createElement("div");

    div3.append(minusbtn,quantity,plusbtn)
    divx.append(div1,div2)
    divy.append(div3,price2)

    let  divU = document.createElement("div");


    divU.append(divx,divy)
    document.querySelector(".container").append(divU,hr)

    total+=Number(ele.price);
            localStorage.setItem("total",total)
            document.querySelector("#stotal").innerHTML=`₹${total}`



})


}
function removItem(ele,i){
    cart_Items.splice(i,1)
    displayItem(cart_Items)
    localStorage.setItem("cartdata",JSON.stringify(cart_Items))
}

let count1=1
setInterval(myTimer, 2000);

function myTimer() {
 if(count1%2==0){
    document.querySelector(".topnav>p").innerHTML = "";
    document.querySelector(".topnav>p").innerHTML = "NOW OR NEVER SALE 40% TO 60% OFF SHOP NOW! | Details | View All Deals";
 }
 else{
    document.querySelector(".topnav>p").innerHTML = "";
    document.querySelector(".topnav>p").innerHTML = "AMAZING DEALS STARTING FROM $12.99 | Details | View All Deals";
 }
count1++
}