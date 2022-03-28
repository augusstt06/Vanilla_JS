const quote_list = [
    {
        quote  : "True Knowlege exists in knowing that you know nothing.",
        author : "Socrates"
    },
    {
        quote  : "The secret of hapiness is renunciation.",
        author : "Andrew Carnegie"
    },
    {
        quote  : "Life is like riding a bicycle. To Keep your balance you must keep moving.",
        author : "Albert Einstein"
    },
    {
        quote  : "Never undersimate your own ignorance.",
        author : "Albert Einstein"
    },
    {
        quote  : "Action is the foundational key to all success.",
        author : "Pablo Picasso"
    },
    {
        quote  : "To tell the truth, you don't have to remember anything.",
        author : "Mark Twain"
    }
];

const quote  = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quote_list[Math.floor(Math.random() * quote_list.length)];

quote.innerHTML  = todayQuote.quote;
author.innerHTML = todayQuote.author;