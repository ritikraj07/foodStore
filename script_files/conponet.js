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
    console.log(data)
    return data
}

function appender(data){
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

export {navbar, fetchData, appender}