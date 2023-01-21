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



let cart_Items=JSON.parse(localStorage.getItem("cartdata")) || []

let cardsData
fetch("http://localhost:7575/products")   
.then((res)=>res.json())
.then((data)=>{
    
    cardsData=data
    console.log(data[0])
    renderProducts(data)
      
})
document.querySelector("#c1").addEventListener("click",function(){
    let newData=cardsData.reverse()
    renderProducts(newData)
})
// document.querySelector("#c2").addEventListener("click",function(){
//     let newData=cardsData.sort((a,b)=>{return b.rating-a.rating});
//     renderProducts(newData)
// })
document.querySelector("#c3").addEventListener("click",function(){
    let newData=cardsData.sort((a,b)=>{return b.price-a.price});
    renderProducts(newData)
})

document.querySelector("#c4").addEventListener("click",function(){
    let newData=cardsData.sort((a,b)=>{return a.price-b.price});
    renderProducts(newData)
})


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
