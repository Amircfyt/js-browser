let usetAgent = navigator.userAgent;


let browser;
if(usetAgent.match(/edg/i)){
    browser = "edge";
}else if(usetAgent.match(/firefox/i)){
    browser = "firefox";
}else if(usetAgent.match(/opr/i)){
    browser = "opera";
}else if(usetAgent.match(/chrome/i)){
    browser = "chrome";
}else{
    alert('مرورگرهای دیگر')
}


const logo = document.querySelector(`.logo .${browser}`)

if(logo != ""){
    logo.style.opacity = "1";
}