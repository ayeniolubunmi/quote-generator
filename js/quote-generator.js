const authorText = document.getElementById('author');
const quoteText = document.getElementById('quote');
const newQuoteBtn = document.querySelector('.new-quote');
const twitterBtn = document.getElementById('twitter');
const quoteContainer = document.getElementById('quote-container');
let apiQuotes=[];
function newQuote(){
    const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
    if(!quote.author){
        authorText.textContent='Unknown'
    }else{
        authorText.textContent=quote.author
    }

    if(quote.text.length>120){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent=quote.text
}
function twitteQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent}-${authorText.textContent}`;
    window.open(twitterUrl,'_blank');
}
newQuoteBtn.addEventListener('click', twitteQuote);
async function getQuote(){
    const apiUrl = 'https://type.fit/api/quotes/'
    try{
        const reponse = await fetch(apiUrl);
        apiQuotes = await reponse.json();
        newQuote();
    }catch{
        alert('error')
    }
}
getQuote();

