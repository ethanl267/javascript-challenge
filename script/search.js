// fetching the API
const url = ('https://newsapi.org/v2/everything?q=tesla&apiKey=01a4ed9cbe1b4f048457868df3864029')
fetch(url)

.then((Response) => Response.json())
.then(json => console.log(json))

function myfunction() {
    var 
}