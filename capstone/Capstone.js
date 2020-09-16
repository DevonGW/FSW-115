const main = document.getElementById("axiosTodo");

let baseURL = "https://api.vschool.io/[Devon_Grimm-Wash]/todo"

function get(){
    axios.get(baseURL)
        .then( response => {
            for (let i = 0; i < response.data.length; i++){
                const title = document.createElement("h3")                
                const description = document.createElement("p")
                const completeBox = document.createElement("input")
                const completeSpan = document.createElement("span")
                const incompleteBox = document.createElement("input")
                const incompleteSpan = document.createElement("span")
// editTitle = document.createElement("input")
// document.createElement("br")
// editDescription = document.createElement("input")
// editButton = document.createElement("button")
                const deleteButton = document.createElement("button")
                deleteButton.className = "deleteButton"
                

                title.textContent = response.data[i].title
                title.style.color = "Navy"    
                title.style.paddingTop = "40px"         
                title.style.borderTop = "2px solid lightgray" 
                completeBox.className = "boxComplete"
                completeBox.type = "checkbox"
                completeSpan.textContent = "Complete"
                incompleteBox.className = "boxIncomplete"
                incompleteBox.type = "checkbox"
                incompleteSpan.textContent = "Incomplete"
                description.textContent = response.data[i].description  
          
                deleteButton.textContent = "Delete"    
                deleteButton.style.backgroundColor = "lightgray"

                document.getElementById("axiosTodo").appendChild(title)                
                document.getElementById("axiosTodo").appendChild(description)
                document.getElementById("axiosTodo").appendChild(completeSpan)
                document.getElementById("axiosTodo").appendChild(completeBox)
                document.getElementById("axiosTodo").appendChild(incompleteSpan)
                document.getElementById("axiosTodo").appendChild(incompleteBox)
                document.getElementById("axiosTodo").appendChild(deleteButton)
              


    // Put Complete
                if (response.data[i].completed === true) {
                title.classList.add("title")
                }

                var completedTask = {
                  completed: true
                };
                var incompletedTask = {
                  completed: false
                };

                var completedItem = document.getElementsByClassName("boxComplete")                
                  completedItem[i].addEventListener("click", (event) => {
                    event.preventDefault()
                    id = response.data[i]._id
                    axios.put(baseURL + id, completedTask)
                      .then((response) => console.log(response.data))
                      .catch((error) => console.log(error));
                });
              
    // Put Incomplete
                var boxIncomplete = document.getElementsByClassName("boxIncomplete")              
                boxIncomplete[i].addEventListener("click", (event) => {
                  event.preventDefault()
                  id = response.data[i]._id
                  axios.put(baseURL + id, incompletedTask)
                    .then((response) => console.log(response.data))
                    .catch((error) => console.log(error));
                });



    // Delete            
                deleteButton.addEventListener("click", (event) => {
                 event.preventDefault();
                  id = response.data[i]._id;
                  axios
                    .delete(baseURL + id)
                      .then((response) => console.log(response.data))
                      .catch((error) => console.log(error));
                });
  }})
}
get()
   

//Post
const submitButton = document.myForm;

submitButton.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log("hello")
  const newTodo = {
    title: submitButton.title.value,
    description: submitButton.description.value
  };

  axios.post(baseURL, newTodo)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));

})

