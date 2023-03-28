
// VARIABLES
const lista = document.querySelector('.lista')
const btn_search = document.querySelector('.btn_search')
const nameU = document.querySelector('#nameU')
const caption = document.querySelector('.caption')


// FUNCTIONS
const finder = async () => {

    const url = 'http://universities.hipolabs.com/search?name=middle'
    const respone = await fetch(url)
    const data = await respone.json();

    const nameUni = nameU.value
    let resultados = ''
    let captionText = ''

    let countResultados = 0;
    for (let i = 0; i < data.length; i++) {
        let name = data[i].name

        let regex = new RegExp(nameUni, "gi");
        let result = regex.test(name)

        if (result) {
            resultados += `<li class="lista__li"> <a href="${data[i].web_pages}" target="_blank"> ${data[i].name} </a> </li>`
            countResultados++
        }
        if (countResultados == 0) {
            captionText = `No se encontró ningún resultado, intente buscar con otro nombre. :c`
            caption.innerHTML = captionText
        } else {
            captionText = `RESULTADOS`
            caption.innerHTML = captionText
        }
    }
    lista.innerHTML = resultados
}

btn_search.addEventListener('click', finder)
