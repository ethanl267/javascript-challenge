let products = [];
function getPosts() {
  // Get element to change
  let list = document.getElementById("li-items");

  // Fetch the data
  fetch(`https://newsapi.org/v2/everything?q=${searchThing}&apiKey=01a4ed9cbe1b4f048457868df3864029`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      json.article.forEach((item) => {
        products.push(item);
        createsaleItem(item);
      });
    });
}

function createsaleItem(article) {
  const listitem = `<li>
  <div class="product-card">
  <img src=${article.urlToImage}/>
  <h1 class="itemName">${article.title}</h1>
  <p class="price">${article.desciption}</p>
</div></li>`;
  let list = document.getElementById("li-items");
  list.innerHTML += listitem;
}

getPosts();

function searchProducts() {
    // Get data from form
    let form = document.getElementById("search-form");
    let searchTerm = form.getElementsByTagName("input")[0].value;
    // Create Regular Expression
    let searchRegEx = new RegExp(searchTerm, "i");
    // Fetch data to search from
    fetch("https://shielded-woodland-34724.herokuapp.com/show-records/")
      .then((response) => response.json())
      .then((json) => {
        // Filter data
        let result = json.filter((product) => {
          return article
        }); 
        // Check if there are found results
        if (result.length > 0) {
          // Render items that matched
          document.getElementById("li-items").innerHTML = "";
          result.forEach((product) => createsaleItem(product));
        } else {
          // Alert nothing found
          alert("nothing found");
        }
      })
      .catch((err) => {
        // Log any error from back end
        console.log(err);
      });
  }

















// ----------------------

function searchProducts() {
    // Get data from form
    let form = document.getElementById("search-form");
    let searchTerm = form.getElementsByTagName("input")[0].value;
    // Create Regular Expression
    let searchRegEx = new RegExp(searchTerm, "i");
    // Fetch data to search from
    fetch("https://shielded-woodland-34724.herokuapp.com/show-records/")
      .then((response) => response.json())
      .then((json) => {
        // Filter data
        let result = json.article.filter((product) => {
          return product.product_name.search(searchRegEx) !== -1;
        });
        // Check if there are found results
        if (result.length > 0) {
          // Render items that matched
          document.getElementById("li-items").innerHTML = "";
          result.forEach((product) => createsaleItem(product));
        } else {
          // Alert nothing found
          alert("nothing found");
        }
      })
      .catch((err) => {
        // Log any error from back end
        console.log(err);
      });
  }