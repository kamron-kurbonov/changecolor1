function changeColor(){
    let el = document.getElementById("box")
    let a= "#"+ (Math.floor(Math.random()*15728640)+1048576).toString(16)
    el.style.background = a
    document.getElementById('color').innerText=a
}
const btn = document.getElementById("btn");
btn.onclick = changeColor
    box.innerHTML.background = ("#" + Math.floor(1000000*Math.random() + 9999)).toString(16);
