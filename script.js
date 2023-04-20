
// VARIABLES
const lista = document.querySelector('.lista')
const nameU = document.querySelector('#nameU')
const btn_search = document.querySelector('.btn_search')
const caption = document.querySelector('.caption')
const btn_retry = document.querySelector('.btn_retry')


const loader = document.querySelector('.loader')
const sad = document.querySelector('.sad')
const error_red = document.querySelector('.error_red')
const error_fetch = document.querySelector('#error_fetch')

const fragment = document.createDocumentFragment();


// FUNCTIONS
const finder = async () => {

    try {
        fragment.textContent = ''
        lista.innerHTML = ''
        caption.textContent = ''

        loader.classList.remove('none')
        sad.classList.add('none')
        error_red.classList.add('none')

        const url = 'http://universities.hipolabs.com/search?name=middle'
        let response
        try {
            response = await fetch(url)
        } catch (error) {
            console.log(error);
            error_red.classList.remove('none')
            loader.classList.add('none')

            return;
        }
        const data = await response.json();
        loader.classList.add('none')
        error_red.classList.add('none')

        if (!response.ok) throw { status: response.status, statusText: response.statusText }

        const nameUni = nameU.value

        let countResultados = 0;
        for (let i = 0; i < data.length; i++) {
            let name = data[i].name

            let regex = new RegExp(nameUni, "gi");
            let result = regex.test(name)

            if (result) {
                const li = document.createElement('li')
                li.classList.add('lista__li')
                li.innerHTML = `<a href="${data[i].web_pages}" target="_blank"> ${data[i].name} </a>`
                fragment.appendChild(li)

                countResultados++
            }
            if (countResultados == 0) {
                sad.classList.remove('none')
                let captionText = `No se encontró ningún resultado, intenta buscar con otro nombre.`
                caption.textContent = captionText
            } else {
                caption.textContent = `RESULTADOS`
            }
        }

        lista.appendChild(fragment)

    } catch (error) {
        loader.classList.add('none')
        let message = error.statusText || 'Ocurrió un error'
        error_fetch.textContent = `Error ${error.status}: ${message}`
    }
}

btn_retry.addEventListener('click', finder)
btn_search.addEventListener('click', finder)