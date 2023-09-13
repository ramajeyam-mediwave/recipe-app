//Declaring a empty arry
let recipe = [
    {
        id: "1694415809280",
        title: "burger",
        time: "30",
      },
]

function makerecipeDiv(recipe){
const div = document.createElement("div");
    div.setAttribute("class", "recipe-card");
    const id = `recipe-${recipe["id"]}`;
    div.setAttribute("id", id);

    const h2 = document.createElement("h2");
    h2.innerText = recipe["title"];
    const h3 = document.createElement("h3");
    h3.innerText = recipe["time"];
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Clear";
    deleteBtn.addEventListener("click", function () {
      removeMovie(recipe["id"]);
    });

    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(deleteBtn);

    return div;
}

    function updateMovieListUI() {
       
        for (let i = 0; i < recipe.length; i++) {
          const recipeDiv = makerecipeDiv(recipe[i]);
          const recipeApp = document.querySelector("#app")
          recipeApp.appendChild(recipeDiv);
        }
      }
      updateMovieListUI();