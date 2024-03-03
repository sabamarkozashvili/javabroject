var number = parseInt(Math.random()*30)
console.log(number)
var num =prompt('გამოიცანი რიცხვი 1–დან 30–ამდე')
while(num!=number){if(num>=0 && num < numbeer)
    {
        alert("უფრო მაღალი")
        num =prompt()
    }
    else if(num<=30 && num > number){
        alert("უფრო დაბალი")
        num =prompt()
    }
    else{alert("შეცდომა")
    num =prompt()
}
}