let favrecipe = [];
//creating a division and setting a attribute==>1
function makerecipeDiv(recipe) {
  const div = document.createElement("div");
  div.setAttribute("class", "recipe-card");
  const id = `recipe-${recipe["id"]}`;
  div.setAttribute("id", id);
  // link img-division
  const imgDiv = document.createElement("div");
  const image = document.createElement("img");

  image.setAttribute("class", "class-img");
  image.src = recipe["img_link"];
  div.appendChild(imgDiv);
  imgDiv.appendChild(image);
  //used to create the division by using js===>2
  const textDiv = document.createElement("div");
  textDiv.setAttribute("class", "textDiv");
  div.appendChild(textDiv);
  const h2 = document.createElement("h2");
  h2.innerText = recipe["rec_title"];
  const h3 = document.createElement("h3");
  h3.innerText = recipe["rec_time"];
  const h4 = document.createElement("h4");
  h4.innerText = recipe["rec_steps"];

  

  //delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener("click", function () {
    removeRecipe(recipe["id"]);
  });

  //appending the elements to the main division===>4
  textDiv.appendChild(h2);
  textDiv.appendChild(h3);
  textDiv.appendChild(h4);
  textDiv.appendChild(deleteBtn);

  return div;
}

//function for remove movie
function removeRecipe(recipeId) {
  console.log("Deleting ", recipeId);
  const filteredArray = favrecipe.filter((recipe) => recipe.id != recipeId);
  favrecipe = filteredArray;
  updaterecipeListUI();
  //By adding this we can directly remove from local
  saveToLocalStorage();
}

// for loop used to ===>5
function updaterecipeListUI() {
  clearApp();
  const recipeApp = document.querySelector("#app");
  for (let i = 0; i < favrecipe.length; i++) {
    const recipeDiv = makerecipeDiv(favrecipe[i]);
    recipeApp.appendChild(recipeDiv);
    // to find total card
    //count
    const totalcount = document.querySelector("#value");
    totalcount.innerText = favrecipe.length;
  }
}
//doubt
function addrecipe(recipe) {
  favrecipe.push(recipe);
  updaterecipeListUI();
  saveToLocalStorage();
}
//rest the input tag
function clear() {
  document.querySelector("#recipe-form").reset();
}
//clear app() is used to clear the exsisting data that present into the variable
function clearApp() {
  const app = document.querySelector("#app");
  app.innerHTML = "";
}
// form used to enter the value for the recipe card
function form() {
  const form = document.querySelector("#recipe-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const title = document.querySelector("#recipe-title").value;
    const time = document.querySelector("#prepare-time").value;
    const steps = document.querySelector("#steps").value;
    //fectching image link
    const img_link = document.querySelector("#img-link").value;
    if (!title || !time || !steps || !img_link) {
      alert("Enter all fields");
    } else {
      const recipe = {
        id: new Date().getTime(),
        rec_title: title,
        rec_time: time,
        rec_steps: steps,
        img_link: img_link,
      };
      addrecipe(recipe);
      clear();
    }
  });
}
// sending and getting data from local storage
function saveToLocalStorage() {
  const str = JSON.stringify(favrecipe);
  localStorage.setItem("my-recipe-list", str);
}
function getFromLocalStorage() {
  const str = localStorage.getItem("my-recipe-list");
  if (!str) {
    favrecipe = [];
  } else {
    favrecipe = JSON.parse(str);
  }
}
getFromLocalStorage();
updaterecipeListUI();
form();
