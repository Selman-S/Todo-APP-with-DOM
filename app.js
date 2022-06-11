const theme= document.getElementById('theme-img');
let sun= true;
window.addEventListener('load',()=>{
  theme.setAttribute('data-theme','true')
})

theme.addEventListener('click',()=>{
  if(sun==true){
    //karanlık modu
    theme.src= './images/icon-sun.svg';
    document.querySelector('body').style.backgroundImage= 'url(./images/bg-desktop-dark.jpg)';
    document.querySelector('body').style.backgroundColor ='var(--dt-very-dark-blue)'
    
    



    sun = false;
  }else {
    // aydınlık modu
    theme.src= './images/icon-moon.svg';
    document.querySelector('body').style.backgroundImage= 'url(./images/bg-desktop-light.jpg)';
    document.querySelector('body').style.backgroundColor ='var(--lt-very-light-gray)'


    sun = true;
  }
  console.log(sun);
  
  
})