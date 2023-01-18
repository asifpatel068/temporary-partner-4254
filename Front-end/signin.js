document.querySelector(".signin").addEventListener("click",login)
document.querySelector(".createacc").addEventListener("click",register)


async function login(event){
    event.preventDefault()
    try{
        let email=document.querySelector("#lemail").value
        let password=document.querySelector("#lpassword").value

        let logdata={
            email,password
        }
        let logurl="http://localhost:7575/users/login"

        let res=await fetch(logurl,{
            method:"POST",
            body:JSON.stringify(logdata),
            headers:{
                "Content-type":"application/json"
            }
        })
        let data=await res.json()
        alert("login Success")
        window.location=("index.html")

    }catch(err){
        console.log("err",err)
    }

}


async function register(event){
    event.preventDefault()
    try{
        let firstName=document.querySelector("#firstName").value
        let lastName=document.querySelector("#lastName").value
        let email=document.querySelector("#email").value

        let password=document.querySelector("#password").value
        let cpassword=document.querySelector("#cpassword").value

        if(password!=cpassword){
            alert("Password and Confirm_Password does not match")
            return
        }

        let regdata={
            firstName,lastName,email,password
        }
        let regurl="http://localhost:7575/users/register"

        let res=await fetch(regurl,{
            method:"POST",
            body:JSON.stringify(regdata),
            headers:{
                "Content-type":"application/json"
            }
        })
        let data=await res.json()
        alert("Registered Successfully")
        

    }catch(err){
        console.log("err",err)
    }
    
   
  
}