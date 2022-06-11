const theme= document.getElementById('theme-img');
let sun;
window.addEventListener('load',()=>{
  let theme = localStorage.getItem('theme');
  if(theme==null) {
    localStorage.setItem('theme',true);
    sun = true;
  }
  sun = Boolean(theme) ;
  
  
  
})
function changeTheme() {
  if(sun==true){
    //karanlık modu
    theme.src= './images/icon-sun.svg';
    document.querySelector('body').style.backgroundImage= 'url(./images/bg-desktop-dark.jpg)';
    document.querySelector('body').style.backgroundColor ='var(--dt-very-dark-blue)';
    document.querySelector('#add-div').style.backgroundColor = 'var(--dt-very-dark-desaturated-blue)';
    
    



    
   
  }else {
    // aydınlık modu
    theme.src= './images/icon-moon.svg';
    document.querySelector('body').style.backgroundImage= 'url(./images/bg-desktop-light.jpg)';
    document.querySelector('body').style.backgroundColor ='var(--lt-very-light-gray)';
    document.querySelector('#add-div').style.backgroundColor = 'var(--lt-very-light-gray)';
    
    
    
    sun = true;
    localStorage.setItem('theme',sun)
  }
  console.log(sun);
}

theme.addEventListener('click',()=>{
  if(sun==true){
    //karanlık modu
    theme.src= './images/icon-sun.svg';
    document.querySelector('body').style.backgroundImage= 'url(./images/bg-desktop-dark.jpg)';
    document.querySelector('body').style.backgroundColor ='var(--dt-very-dark-blue)';
    document.querySelector('#add-div').style.backgroundColor = 'var(--dt-very-dark-desaturated-blue)';
    document.querySelectorAll('.check').forEach((e)=>{
      e.style.border='1px solid var(--dt-very-dark-grayish-blue)'
    });
    document.querySelector('.todo-container').style.backgroundColor ='var(--dt-very-dark-desaturated-blue)';
    document.querySelectorAll('.todo-item').forEach((e)=>{
      e.style.borderBottom ='1px solid var(--dt-very-dark-grayish-blue)'
    });
    document.querySelector('.todo-container').style.boxShadow = '0px 2px 100px -40px var(--dt-very-dark-desaturated-blue)';
    document.querySelector('.todo-container').style.color = 'var(--dt-light-grayish-blue)';
    document.querySelector('.middle-poz').style.backgroundColor = 'var(--dt-very-dark-desaturated-blue)';
    
    
    
    
    
    
    sun = false;
    localStorage.setItem('theme',sun);
  }else {
    // aydınlık modu
    theme.src= './images/icon-moon.svg';
    document.querySelector('body').style.backgroundImage= 'url(./images/bg-desktop-light.jpg)';
    document.querySelector('body').style.backgroundColor ='var(--lt-very-light-gray)';
    document.querySelector('#add-div').style.backgroundColor = 'var(--lt-very-light-gray)';
    document.querySelector('.check').style.border='1px solid var(--lt-very-light-grayish-blue)';
    document.querySelector('.todo-container').style.backgroundColor ='white';
    document.querySelectorAll('.check').forEach((e)=>{
      e.style.border='1px solid var(--lt-very-light-grayish-blue)'
    });
    document.querySelectorAll('.todo-item').forEach((e)=>{
      e.style.borderBottom ='1px solid var(--lt-very-light-grayish-blue)'
    });
    document.querySelector('.todo-container').style.boxShadow = '0px 2px 100px -40px var(--lt-dark-grayish-blue)';
    document.querySelector('.middle-poz').style.backgroundColor = 'white';
    document.querySelector('.todo-container').style.color = 'var(--lt-very-dark-grayish-lue)';
    
    
    sun = true;
    localStorage.setItem('theme',sun)
  }
  console.log(sun);
  

})