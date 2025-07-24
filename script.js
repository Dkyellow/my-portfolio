// variable declaration
const chatbox = document.querySelector('.ChatBox');
let btnchat = document.querySelectorAll(".table");
let comment = document.querySelector(".Comment");
let python = document.querySelector(".Python");
let info = document.querySelector('.info-me')

// the loop for each item in the contents
btnchat.forEach((btn) =>{

   btn.addEventListener('mouseover', ()=>{
      console.log(btn.textContent)
      if (btn.textContent.includes('ChatBox')){
         info.style.animation = 'hidein 1s ease forwards'
         btn.style.border = '2px solid #3498db'
         btn.style.backgroundColor = 'white'
         chatbox.style.animation = 'easein 1s ease forwards'

      } else if ((btn.textContent.includes('Python'))){
         info.style.animation = 'hidein 1s ease forwards'
         btn.style.border = '2px solid #3498db'
         btn.style.backgroundColor = 'white'
         python.style.animation = 'easein 1s ease forwards'

      } else if ((btn.textContent.includes('Comment'))){
         info.style.animation = 'hidein 1s ease forwards'
         btn.style.border = '2px solid #3498db'
         btn.style.backgroundColor = 'white'
         comment.style.animation = 'easein 1s ease forwards'
      } else{
         info.style.animation = 'hidein 1s ease forwards'
         btn.style.border = '2px solid #3498db'
         btn.style.backgroundColor = 'white'
      } ;  
   });
   btn.addEventListener('mouseout', ()=>{
      info.style.animation = 'hideout 1s ease forwards'
      btn.style.backgroundColor = 'transparent'
      btn.style.border = 'none'
      chatbox.style.animation = 'easeout 1s ease forwards'
      comment.style.animation = 'easeout 1s ease forwards'
      python.style.animation = 'easeout 1s ease forwards'
   });
});

// _____   _____                                                 _______        _____    ____
//|_   _| |_   _|                         _                     |   ___  \     [_   _]  [_  _]  
//  | |     | |     _             __     | |                    |  |   \  \      | |     / /
//  | |_____| |    (_)           (__)  __| |__     ____         |  |    |  |     | |____/ /
//  |  _____  |     __            __  |__   __|   [__  ]        |  |    |  |     |  ___  /
//  | |     | |    [  |          [  |    | |        / /         |  |    |  |     | |    \ \
// _| |_   _| |_    | |    __     | |    | |___    / /_         |  |___/  /     _| |_   _\ \_
//|_____| |_____|  [___]  (_ )   [___]   |_____|  [____]        |________/     [_____] [_____]
