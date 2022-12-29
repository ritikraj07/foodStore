import {navbar, fetchData, appender, onclick_btm, set_status, stickynavbar} from '../script_files/conponet.js'


window.addEventListener('scroll', stickynavbar)
document.getElementById("navbar").innerHTML = navbar();
let data = async(Name) => {
    let x = await fetchData(`https://www.themealdb.com/api/json/v1/1/search.php?s=${Name}`)
    x = x.meals;
    return x;
}

window.addEventListener('load', function(){
    document.getElementById("sea-reci").style.display = 'block'

})

// document.getElementById("sea-reci").addEventListener('click', Sec_food)
document.getElementById("sea-reci").addEventListener('input', Sec_food)
var id;
function Sec_food(){
   if(id){
        clearTimeout(id)
   }
   setTimeout(function(){
    let name =  document.getElementById("sea-reci").value;
    data(name).then(function(rex){
        appender(rex)
    }, function(err){
        console.log(err)
    })
   }, 2000)
    // data(name).then(function(ele){
    //     console.log(ele)
    // })
}


window.addEventListener('load', set_status)
var btm = document.getElementById("sig-log-btm")
btm.addEventListener('click', onclick_btm)