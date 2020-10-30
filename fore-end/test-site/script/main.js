let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'resource/壁纸.jpg') {
      myImage.setAttribute('src', 'resource/街景.jpg');
    } else {
      myImage.setAttribute('src', 'resource/壁纸.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('请输入你的名字.');
    if( !myName || myName === null || myName === ""){
        setUserName()
    }else{
        localStorage.setItem('name', myName);
        myHeading.textContent = myName + '酷毙了!' ;
    }
    
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = storedName  + '酷毙了!' ;;
}


myButton.onclick = function(){
    setUserName()
};