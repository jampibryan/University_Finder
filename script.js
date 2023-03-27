
// VARIABLES
const lista = document.querySelector('.lista')
const btn_search = document.querySelector('.btn_search')
const nameU = document.querySelector('#nameU')


// FUNCTIONS
const finder = async () => {

    const url = 'http://universities.hipolabs.com/search?name=middle'
    const respone = await fetch(url)
    const data = await respone.json();

    const nameUni = nameU.value
    let resultados = ''

    for (let i = 0; i < data.length; i++) {
        let name = data[i].name

        // let regex = new RegExp("^" + nameUni + ".", "gi");
        let regex = new RegExp(nameUni + ".", "gi");
        let result = regex.test(name)

        if (result) {
            resultados += `<li> <a href="${data[i].web_pages}"> ${data[i].name} </a> </li>`
        }
    }
    lista.innerHTML = resultados
}

btn_search.addEventListener('click', finder)
