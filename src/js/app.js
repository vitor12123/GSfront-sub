const menu = document.getElementById('menu')
const divHBG = document.getElementById('menu2')
let menuAberto = document.createElement('div')

divHBG.style.left = '1500px'
divHBG.style.transition = '2.5s'
menu.style.marginLeft = '1200px'

let contador = 1

function abrir() {
    menu.addEventListener('click', () => {
        contador++
        if (contador % 2 == 0) { 
            menu.style.transition = '2s'
            menu.style.marginLeft = '1060px'
            menuAberto.innerHTML = `
            <h1>Menu</h1>
            
            <button id='mudarTema'> mudar tema para noturno </button>
            <button id='mudarTema2'> mudar para tema claro </button>

            <a href = # >contato</a>
            
            `
            divHBG.append(menuAberto)
            divHBG.style.zIndex = '2'
            divHBG.style.transition = '2s'
            divHBG.style.left = '1175px'
            divHBG.style.paddingLeft = '15px'
            divHBG.style.backgroundColor = 'rgb(253, 164, 30)'
            divHBG.style.position = 'fixed'
            divHBG.style.width = '200px'
            divHBG.style.height = '1000px'
        }
        else if (contador % 2 != 0) {
            menu.style.transition = '2s'
            menu.style.marginLeft = '1200px'
            divHBG.style.transition = '2s'
            divHBG.style.left = '1570px'
        }
    })
}

abrir()