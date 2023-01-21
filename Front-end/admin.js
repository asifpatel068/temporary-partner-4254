document.querySelector("#form1").addEventListener("submit",add)

async function add(event){
    event.preventDefault()
    try{
   
        let title=document.querySelector("#title").value
        let brand=document.querySelector("#brand").value
        let price=document.querySelector("#price").value
        let category=document.querySelector("#category").value
        let img=document.querySelector("#img").value

        let postdata={
            title,brand,price,category,img
        }

        let url="http://localhost:7575/products/add"

        let res=await fetch(url,{
            method:"POST",
            body:JSON.stringify(postdata),
            headers:{
                "Content-Type":"application/json"
            }
        })

        let data=await res.json()
        console.log(data)
        alert("Product added Successfully")
        
    }catch(err){
        console.log(err)
    }

}

document.querySelector("#form2").addEventListener("submit",ed)

async function ed(event){
event.preventDefault()
let method=document.querySelector("#method").value
try{
    if(method=="edit"){
        let id=document.querySelector("#id").value
    let item=document.querySelector("#item").value
    let input=document.querySelector("#input").value
    
    let editdata={
        [item]:input
    }
    console.log(editdata)

    let url=`http://localhost:7575/products/edit/${id}`

    let res=await fetch(url,{
        method:"PATCH",
        body:JSON.stringify(editdata),
        headers:{
            "Content-Type":"application/json"
        }
    })

    let data=await res.json()
    console.log(data)
    alert("Product Upadted Successfully")
    }
    else if(method=="delete"){

        let id=document.querySelector("#id").value
   

    let url=`http://localhost:7575/products/delete/${id}`

    let res=await fetch(url,{
        method:"DELETE",
    
        headers:{
            "Content-Type":"application/json"
        }
    })

    let data=await res.json()
    console.log(data)
    alert("Product Deleted Successfully")
    }
    
}catch(err){
    console.log(err)
}

}
// --------------------------------------------------------


fetch("http://localhost:7575/products")   
.then((res)=>res.json())
.then((data)=>{
    
    cardsData=data
    console.log(data[0])
    renderProducts(data)
      
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

            let id = document.createElement("p")
            id.textContent="id:"+ele._id
            

            let title = document.createElement("p")
            title.textContent="title:"+ele.title
            title.setAttribute("id","title")

            let category = document.createElement("p")
            category.textContent="category:"+ele.category
            title.setAttribute("id","category")

            let price = document.createElement("p")
            price.textContent="price:"+ele.price
            price.setAttribute("id","price")

       

            let Brand = document.createElement("p")
            Brand.textContent="brand:"+ele.brand
            Brand.setAttribute("id","brand")

              
            let cartdiv1=document.createElement("div")
            cartdiv1.setAttribute("id","cartdiv1")
            
            let cartdiv2=document.createElement("div")
            cartdiv2.setAttribute("id","cartdiv2")
            
    
            
            cartdiv1.append(image)
            cartdiv2.append(id,title,Brand,price,category)
            card.append(cartdiv1,cartdiv2)
            document.querySelector("#container").append(card)


    })

}


