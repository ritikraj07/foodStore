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
        console.log(element)
        var div = document.createElement("div")
        var image = document.createElement("img")
        image.src = element.strMealThumb
        var name = document.createElement("p")
        name.innerText = element.strMeal
        div.append(image, name)
        cont.append(div)
        div.addEventListener('click', function(){
            if(Object.keys(element).length==3){
                var id = element.idMeal
                fetchData(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then(function(res){
                    window.location.href = res.meals[0].strYoutube
                })
            }else{
                window.location.href = element.strYoutube
            }
            
        })
    });
}





function set_status(){
    var check_user = localStorage.getItem('user_status')
    var btm = document.getElementById("sig-log-btm")
    if(check_user == null){
        btm.innerText = "SignUp"
        window.location.href = "signUp.html"
    }else if(check_user == "LogOut"){
        window.location.href = "login.html"
    }
    
    else if(check_user == "SignUp" || check_user == "LogOut"){
        // btm.innerText = "LogIn"
        // window.location.href = "login.html"
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

function stickynavbar(){
    const navbar = document.querySelector("#navbar")
    let top1 = navbar.offsetTop;
    if(window.scrollY >= top1){
        navbar.classList.add('sticky');
    }else{
        // navbar.classList.remove('sticky');
    }
}


export {navbar, fetchData, appender, onclick_btm, set_status, stickynavbar}