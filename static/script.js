// Make page
const boxes= document.querySelectorAll('.box')

function getRandomNumber(){
  return Math.floor(Math.random()*10)
}

function makeColor(){
  let str='#'
  for (let i =0;i<6;i++){
    str+=String(getRandomNumber())
  }
  return str
}

boxes.forEach(box=>{
  box.style.backgroundColor=makeColor()
})
// Make page

// Initialize
let banner,modal,okButton,configureButton,closeBtn,saveBtn,body,google,mixpanel,hubspot,checkboxes

function initializationWithNoCookies(){
    banner=document.getElementById('banner')
    modal=document.getElementById('modal')
    body = document.body;
    google=document.getElementById('google')
    mixpanel=document.getElementById('mixpanel')
    hubspot=document.getElementById('hubspot')
    checkboxes=document.querySelectorAll('.checkbox-checkbox')
}

function initializationWithCookies(){
    document.getElementById('banner').style.display="none"
}
// Initialize
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

getCookie("scripts")?initializationWithCookies():initializationWithNoCookies()


//Add listeners on checkboxes
function onChangeHandler(){}
//Add listeners on checkboxes



async function onOkHandler(){
    const checkboxesArr=Array.from(checkboxes)
    const checkboxObj=checkboxesArr.reduce((acc,checkbox)=>{
        acc[checkbox.id]=checkbox.checked
        return acc
    },{})
    await fetch('http://localhost:5000/check',{
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(checkboxObj)
    })
    banner.style.display="none"
}
function onConfigureHandler(){
    modal.style.display="flex"
    banner.style.display="none"
    disableScroll();
}
// Work with banners and modals

function onCloseHandler(){
    modal.style.display="none"
    enableScroll();
    banner.style.display="block"
}
function onSaveHandler(){

    modal.style.display="none"
    enableScroll();

    banner.style.display="block"
}



// Work with banners and modals



// Пример использования:
// setCookie('user', 'John', {secure: true, 'max-age': 3600});

//Work with enable/disable scroll
function  disableScroll() {
	let pagePosition = window.scrollY;
	document.body.classList.add('disable-scroll');
	document.body.dataset.position = pagePosition;
	document.body.style.top = -pagePosition + 'px';
}

function enableScroll  () {
	let pagePosition = parseInt(document.body.dataset.position, 10);
	document.body.style.top = 'auto';
	document.body.classList.remove('disable-scroll');
	window.scroll({ top: pagePosition, left: 0 });
	document.body.removeAttribute('data-position');
}
//Work with enable/disable scroll

