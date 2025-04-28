const elements = {
    form: document.getElementById("form_creation"),
    nameInput: document.getElementById("R-name"),
    ingredientsInput: document.getElementById("Ingrdts"),
    instructionsInput: document.getElementById("Instrcns"),
    cookingInput: document.getElementById("Time"),
    portionsInput: document.getElementById("Portions"),
    hardnessSelect: document.getElementById("recipe-hardness"),
    dishSelect: document.getElementById("recipe-dish"),
    
    form: document.getElementById("form_filters"),
    nameSearch: document.getElementById("name-search"),
    dishSearch: document.getElementById("recipe-select"),
    categorySearch: document.getElementById("Category-select"),
    
}

const formState = {
    name: "",
    ingredients: "",
    instructions: "",
    time: "",
    portions: "",
    hardness: null,
    typeofdish: null,
  }
  
function EventListeners() {
    elements.nameInput.addEventListener("input", () => {
      formState.name = elements.nameInput.value
    })
    elements.ingredientsInput.addEventListener("input", () => {
        formState.ingredients = elements.ingredientsInput.value
    })
    elements.instructionsInput.addEventListener("input", () => {
        formState.instructions = elements.instructionsInput.value
    })
  
    elements.hardnessSelect.addEventListener("change", () => {
      formState.hardness = elements.hardnessSelect.value
      
    })

    elements.dishSelect.addEventListener("change", () => {
        formState.dish = elements.dishSelect.value
        
    })

    elements.form.addEventListener("submit", handleFormSubmit)
  }

async function handleFormSubmit(e) {
e.preventDefault()

if (!formState.name || !formState.ingredients || !formState.instructions || !formState.time) {
    alert("Please fill out all required fields")
    return
}

const recipe = {
    name: formState.name,
    ingredients: formState.ingredients,
    instructions: formState.instructions,
    time: formState.time,
    portions: formState.portions,
    hardness: formState.hardness,
    typeofdish: formState.typeofdish,
}

try {
    await createRecipe(recipe)
    alert("Recipe created successfully!")
} catch (error) {
    console.error("Error saving recipe:", error)
    alert("There was an error. Please try again.")
}
}