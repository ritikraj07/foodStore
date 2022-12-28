let navbar = () => {
    return `<div>
    <div><a href="index.html">Home</a> </div>
    <div><a href="recipe.html">Receipe</a></div>
    <div><a href="recipeOFday.html">Receipe of Day</a></div>
</div>
<div>
    <input placeholder="Search Receipe" type="text" id="sea-reci">
</div>
<div>
    <button id="sig-log-btm">SignUp</button>
</div>`
}

let fetchData = async (url) =>{
    let data = await fetch(url)
    data = await data.json();
    // console.log(data)
    return data
}

function appender(data){
    if(data==null)return;
    var cont = document.getElementById("containter")
    cont.innerHTML = null;
    data.forEach(element => {
        // console.log(element)
        var div = document.createElement("div")
        var image = document.createElement("img")
        image.src = element.strMealThumb
        var name = document.createElement("p")
        name.innerText = element.strMeal
        div.append(image, name)
        cont.append(div)
    });
}





function set_status(){
    var check_user = localStorage.getItem('user_status')
    var btm = document.getElementById("sig-log-btm")
    if(check_user == null){
        btm.innerText = "SignUp"
    }else if(check_user == "SignUp" || check_user == "LogOut"){
        btm.innerText = "LogIn"
    }else{
        btm.innerText = "LogOut"
    }
}


function onclick_btm(){
    var check_user = localStorage.getItem('user_status')
    var btm = document.getElementById("sig-log-btm")
    if(check_user == null){
        window.location.href = "signUp.html"
    }else if(check_user == "SignUp" || check_user == "LogOut"){
        window.location.href = "login.html"
    }else{
        localStorage.setItem('user_status', "LogOut") 
        window.location.reload()
    }
}



export {navbar, fetchData, appender, onclick_btm, set_status}