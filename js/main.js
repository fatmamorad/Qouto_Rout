var Qotes=[
  { 
    "quto":"“Be yourself; everyone else is already taken.”",
    "Name":"― Oscar Wilde"
  },
  { 
    "quto":"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    "Name":"― Marilyn Monroe"
  },
  { 
    "quto":"“So many books, so little time.”",
    "Name":"― Frank Zappa"
  },
  { 
    "quto":"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    "Name":"― Albert Einstein"
  },
  { 
    "quto":"“A room without books is like a body without a soul.”",
    "Name":"― Marcus Tullius Cicero"
  },
  { 
    "quto":"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    "Name":"― Bernard M. Baruch"
  },
  { 
    "quto":"“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”",
    "Name":"― William W. Purkey"
  },
  { 
    "quto":"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    "Name":"― Dr. Seuss"
  },
  { 
    "quto":"“You only live once, but if you do it right, once is enough.”",
    "Name":"― Mae West"
  },
  { 
    "quto":"“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
    "Name":"― J.K. Rowling, Harry Potter and the Goblet of Fire"
  },
  
]
function getquto(){

   var x = Math.floor(Math.random() * Qotes.length);
   console.log(x)
console.log(Qotes[x].Name)
 document.getElementById("qutoSection").innerHTML=Qotes[x].quto
 document.getElementById("qutoName").innerHTML=Qotes[x].Name
}
