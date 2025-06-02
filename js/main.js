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
    "quto":"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    "Name":"― Albert Einstein"
  },
  { 
    "quto":"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    "Name":"― Albert Einstein"
  },
  { 
    "quto":"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    "Name":"― Albert Einstein"
  },
  { 
    "quto":"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    "Name":"― Albert Einstein"
  },
  { 
    "quto":"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    "Name":"― Albert Einstein"
  },
  { 
    "quto":"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    "Name":"― Albert Einstein"
  },
  { 
    "quto":"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    "Name":"― Albert Einstein"
  },
  { 
    "quto":"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    "Name":"― Albert Einstein"
  },
  { 
    "quto":"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    "Name":"― Albert Einstein"
  },
  { 
    "quto":"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    "Name":"― Albert Einstein"
  }
]
function getquto(){

   var x = Math.floor(Math.random() * Qotes.length);
   console.log(x)
console.log(Qotes[x].Name)
 document.getElementById("qutoSection").innerHTML=Qotes[x].quto
 document.getElementById("qutoName").innerHTML=Qotes[x].Name
}