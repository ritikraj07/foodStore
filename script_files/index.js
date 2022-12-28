import {navbar, fetchData, appender} from '../script_files/conponet.js'
document.getElementById("navbar").innerHTML = navbar();
let data = async(Name) => {
    let x = await fetchData(`https://www.themealdb.com/api/json/v1/1/search.php?s=${Name}`)
    x = x.meals;
    appender(x)
    return x;
}

window.addEventListener('load', function(){
    document.getElementById("sea-reci").style.display = 'block'
})

document.getElementById("sea-reci").addEventListener('click', Sec_food)

function Sec_food(){
   let name =  document.getElementById("sea-reci").value;
    data(name).then(function(ele){
        console.log(ele)
    })
    // console.log(data(name))
    
}
