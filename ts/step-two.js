async function stepTwo() {

    const responseAjax = await fetch('http://localhost:3000/pass-range/step/2')

    const responseJson = await responseAjax.json()

    const pass = responseJson.data.existsPass

    let countLine = 0

    const content = document.getElementById('content')

    for (const value of pass) {


        if (countLine == 0 || countLine == 10) {
            var divPass = document.createElement('div')

            divPass.className = 'line-pass'

            countLine = 0
        }

        const pPass = document.createElement('p')

        pPass.className = 'pass'

        pPass.innerHTML = String(value)

        divPass.appendChild(pPass)

        content.appendChild(divPass)

        countLine++
    }

    const div = document.createElement('div')

    div.className = 'text'

    const p = document.createElement('p')

    p.innerHTML = `Total de senhas: ${pass.length}`

    div.appendChild(p)

    document.body.appendChild(div)

}

document.addEventListener('DOMContentLoaded', function () {
    const execute = document.getElementById('step-two')

    execute.onclick = function () {
        stepTwo().then(() => {
        })


    };
});
