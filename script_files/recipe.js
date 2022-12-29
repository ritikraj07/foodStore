import {navbar, fetchData, appender, onclick_btm, set_status, stickynavbar} from '../script_files/conponet.js'
window.addEventListener('scroll', stickynavbar)
document.getElementById("navbar").innerHTML = navbar();

let data = async() => {
    let x = await fetchData(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`)
    x = x.meals;
    appender(x)
}
window.addEventListener('load', data)
window.addEventListener('load', set_status)
var btm = document.getElementById("sig-log-btm")
btm.addEventListener('click', onclick_btm)