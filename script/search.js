
// fetch api data
function myFunction(){

    let stuff;
    const searchThing = document.getElementsByTagName("input")[0].value;

    const url = `https://newsapi.org/v2/everything?q=${searchThing}&apiKey=01a4ed9cbe1b4f048457868df3864029`
    console.log(searchThing)

    const request = new Request(url)
    
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


}

//  display data through browser
showSearch = search => {
    const searchDiv = document.getElementById('#search');
    articles.forEach(search=> {
        const stuff = document.getElementById("show").innerHTML;
        stuff+=search;

        
    })
}

