async function questionTwo(file) {

    const formData = new FormData()

    formData.append('file', file)

    const responseAjax = await fetch('http://localhost:3000/decipher-commands', { method: 'POST', body: formData })

    const responseJson = await responseAjax.json()

    const addres = responseJson.data

    const div = document.createElement('div')

    div.className = 'text'

    const p = document.createElement('p')

    p.innerHTML = `Endereço encontrado: ${addres}`

    div.appendChild(p)

    document.body.appendChild(div)

}

document.addEventListener('DOMContentLoaded', function () {
    const execute = document.getElementById('question-two')

    execute.onchange = function () {
        questionTwo(execute.files[0]).then(() => {

            const element = document.documentElement

            element.scrollIntoView({ behavior: 'smooth', block: 'end' })
        })


    };
});
