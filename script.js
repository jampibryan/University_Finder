
// VARIABLES
const lista = document.querySelector('.lista')

// FUNCTIONS

const finding = async () => {
    const url = 'http://universities.hipolabs.com/search?name=middle'
    const respone = await fetch(url)
    const data = await respone.json();

    let resultados = ''
    for (let i = 0; i < data.length; i++) {
        resultados += `<li> <a href="${data[i].web_pages}"> ${data[i].name} </a> </li>`
    }

    lista.innerHTML = resultados
}

finding();



