const main = document.getElementById("axiosTodo");

let url = " https://api.vschool.io/[Devon_Grimm-Wash]/todo"

axios.get(url)
    .then( response => {
        for (let i = 0; i < response.data.length; i++){
            var title = document.createElement("h3")
            var price = document.createElement("p")
            var description = document.createElement("p")

            title.textContent = response.data[i].title
            price.textContent = response.data[i].price
            description.textContent = response.data[i].description

            document.getElementById("axiosTodo").append(title)
            document.getElementById("axiosTodo").append(price)
            document.getElementById("axiosTodo").append(description)

            if (response.data[i].completed === true) {
                title.classList.add("title")
            }

    }})
