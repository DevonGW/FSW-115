async function getData(){
    try{
        const name = await axios.get("https://rickandmortyapi.com/api/character/1/")
        const status = await axios.get("https://rickandmortyapi.com/api/character/1/")
        const species = await axios.get("https://rickandmortyapi.com/api/character/1/")
             listPlanetsToDOM(name, status, species)
    }   
    catch(error){
        console.log(error)
    }
}
getData()
function listPlanetsToDOM(name, status, species) {
    const p = document.createElement('p')
    p.textContent = name.data.name
    document.body.appendChild(p)

    const p2 = document.createElement('p')
    p2.textContent = status.data.status
    document.body.appendChild(p2)

    const p3 = document.createElement('p')
    p3.textContent = species.data.species
    document.body.appendChild(p3)
}