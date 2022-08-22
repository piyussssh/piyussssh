document.getElementById("clickLight").onclick = function() {
    clickLight()
};
function clickLight(){

    let Clicklight = document.getElementById('clickLight');
    Clicklight.style.display = 'none';


    let ClickDark = document.getElementById('clickDark');
    ClickDark.style.display ="block";

    let text = document.querySelector('.home');
    text.style.color = '#fff';
    // console.log(text)


    document.body.style.background = '#404040';
    let logoimg = document.querySelector(".logoimg");
    logoimg.innerHTML = `<img src="img/GFXLOGOW.png" alt="">`;
    
    let icon = document.querySelectorAll('.icons');
    for (i=0;i<icon.length;i++){
        icon[i].style.color ='#fff'
        // console.log(icon)
    }

};

document.getElementById("clickDark").onclick = function() {
    clickDark()
};
function clickDark(){

    let Clicklight = document.getElementById('clickLight');
    Clicklight.style.display = 'block';


    let ClickDark = document.getElementById('clickDark');
    ClickDark.style.display ="none"

    let text = document.querySelector('.home');
    text.style.color = '#404040';
    console.log(text)


    document.body.style.background = '#ffff';
    let logoimg = document.querySelector(".logoimg");
    logoimg.innerHTML = `<img src="img/GFXLOGO.png" alt="">`;
    
    let icon = document.querySelectorAll('.icons');
    for (i=0;i<icon.length;i++){
        icon[i].style.color ='#404040'
        // console.log(icon)
    }

}