
// fetching the API

// const url = ('https://newsapi.org/v2/everything?q=tesla&apiKey=01a4ed9cbe1b4f048457868df3864029')

// fetch api data
function myFunction(){
    // get user input
    let stuff;
    const searchThing = document.getElementsByTagName("input")[0].value;
    // const proxy = "http://cors-anywhere.herokuapp.com/"
    const url = `https://newsapi.org/v2/everything?q=${searchThing}&apiKey=01a4ed9cbe1b4f048457868df3864029`
    console.log(searchThing)
    // const all = proxy + url
    const request = new Request(url)
    
    // console.log(searchThing)
    fetch(request)
    
    .then((Response) => Response.json())
    .then(json => {
        console.log("------>",json)
        stuff=json.articles;
        
        for (i in stuff){
            console.log(stuff[i]);
            
            document.getElementById("show").innerHTML += `
            <div>
                <img src=${stuff[i].urlToImage}/>
                <p>${stuff[i].description}</p>
            </div>
            `
        }
    })
//     .catch(error => {
//         console.log(error);
// });

}

//  display data through browser
showSearch = search => {
    const searchDiv = document.getElementById('#search');
    articles.forEach(search=> {
        const stuff = document.getElementById("show").innerHTML;
        stuff+=search;

        
    })
}

