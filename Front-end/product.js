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


let pq=0
let cart_Items=JSON.parse(localStorage.getItem("cartdata")) || []

let topData
let cardsData
fetch("https://nice-teal-bass-ring.cyclic.app/products")   
.then((res)=>res.json())
.then((data)=>{
    console.log(data.length)
    cardsData=data
    topData=data
    console.log(data[0])
    renderProducts(data)
      
})
document.querySelector("#c1").addEventListener("click",function(){
    let new1=topData.reverse()
    renderProducts(new1)
})
document.querySelector("#c2").addEventListener("click",function(){
    let newData=cardsData.sort((a,b)=>{return b.title-a.title});
    renderProducts(newData)
})
document.querySelector("#c3").addEventListener("click",function(){
    let newData=cardsData.sort((a,b)=>{return b.price-a.price});
    renderProducts(newData)
})

document.querySelector("#c4").addEventListener("click",function(){
    let newData=cardsData.sort((a,b)=>{return a.price-b.price});
    renderProducts(newData)
})

function serachmen(){
    let sd=document.querySelector("#searchm").value

    let newarr=cardsData.filter(function (ele){
            return ele.title.toLowerCase().includes(sd.toLowerCase())||ele.brand.toLowerCase().includes(sd.toLowerCase())||ele.category.toLowerCase().includes(sd.toLowerCase())
    })
    
    renderProducts(newarr);
}

let container=document.querySelector("#container")
console.log(container)

function renderProducts(data){
    container.innerHTML=""
    data.forEach(function(ele){

        
            let card=document.createElement("div")
            card.setAttribute("id","card")

            let image = document.createElement("img")
            image.setAttribute("src",ele.img)

            let title = document.createElement("p")
            title.textContent=ele.title
            title.setAttribute("id","mrp")

            let category = document.createElement("p")
            category.textContent=ele.category
       

            let price = document.createElement("p")
            price.textContent="₹"+ele.price+".00"
            price.setAttribute("id","title")

           
            let cartdiv=document.createElement("div")
            cartdiv.setAttribute("id","cartdiv")

            let Brand = document.createElement("p")
            Brand.textContent="by "+ele.brand
            Brand.setAttribute("id","brand")

            let button = document.createElement("button")
            button.textContent="ADD TO BAG "
            button.setAttribute("id","add")

            button.addEventListener("click",function(){
                let cart_Items=JSON.parse(localStorage.getItem("cartdata")) || []
                let present=false
                for(i=0;i<cart_Items.length;i++){
                    if(cart_Items[i].price===ele.price){
                        present=true
                        break;
                    }
                }
                if(present===true){
                    alert("Product Already In Bag")
                }
                else{
                   cart_Items.push(ele)
                    localStorage.setItem("cartdata",JSON.stringify(cart_Items));
                    alert("Product Added to Bag") 
                }


                
            })    
    
            
            cartdiv.append(price,title,Brand,button)
            card.append(image,cartdiv)

            document.querySelector("#container").append(card)
   
    })

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