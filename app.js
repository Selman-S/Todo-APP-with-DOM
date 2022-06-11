
// tema kontrolü
const theme= document.getElementById('theme-img');
let sun;
// sayfa yüklenince localstorageyi kontrol eder enson kapatılan tema ile açar daha önce açmamışsa aydınlık modda açar
window.addEventListener('load',()=>{
  let theme = JSON.parse(localStorage.getItem('theme')) ;
  console.log(theme);
  
  if(theme==null) {
    localStorage.setItem('theme',true);
    sun = true;
  }
  sun = Boolean(theme) ;
  console.log(sun);
  
  if(sun==true){
    lightTheme();
    console.log("çalış");
  }else{
    darkTheme();
  }
})
  
  

// aydınlık modu fonksiyonu
function lightTheme() {
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
  document.querySelector('#add-check').style.color = 'var(--lt-very-dark-grayish-lue)';
}
  
   
//karanlık modu fonksiyonu
function darkTheme() {
 
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
    document.querySelector('#add-check').style.color = 'var(--lt-very-dark-grayish-lue)';
  }
    
   
  // mod butonunu çalıştırır
  theme.addEventListener('click',()=>{
    if(sun==true){
    darkTheme();
    sun = false;
    localStorage.setItem('theme',sun);
    
  }else if(sun==false){
    lightTheme();
    sun = true;
    localStorage.setItem('theme',sun);
  }
  })
    
    
  

    
    
    
    
    
    
  
   
    
    
 

