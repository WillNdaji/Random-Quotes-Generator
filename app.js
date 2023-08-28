let btnEl = document.getElementById("btnEl")
let quoteEl = document.getElementById("quote")
let authEl = document.getElementById("auth")

btnEl.addEventListener("click", function(){
    let quotes = {
       "Eleanor Roosevelt": "No one can make you feel inferior without your consent",
       "Abraham Lincoln": "In the end, it’s not the years in your life that count. It’s the life in your years.",
        "Robert Frost": "In three words I can sum up everything I’ve learned about life: it goes on.",
        "Ralph Emerson": "Common sense is genius dressed in its working clothes",
        "Elbert Hubbard": "Don’t take life too seriously. You’ll never get out of it alive."


    }

    let authors = Object.keys(quotes)
    let author = authors[Math.floor(Math.random() * 5)]

    let quote = quotes[author]

    
    quoteEl.textContent = quote
    authEl.textContent = "-" + author




})

