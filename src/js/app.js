const menu = document.getElementById('menu')
const divHBG = document.getElementById('menu2')
const pagina = document.getElementById('setaPagina')
const numpag = document.getElementsByClassName('pag')
const tituloPromo = document.getElementById('a')
const secaoPrincipal = document.getElementById('b')
let contador2 = 0;
const passaPagina = document.getElementById('passaPagina')
const divPaginas = document.getElementById('div')
let menuAberto = document.createElement('div')
   let contaesp = 0
   let contaesp2 = 760
   let marginTop = -105
divHBG.style.left = '1500px'
divHBG.style.transition = '2.5s'
menu.style.marginLeft = '1200px'   

let contador = 1

function abrir() {
    menu.addEventListener('click', () => {
        contador++
        if (contador % 2 == 0) { 
            menu.style.transition = '1.5s'
            menu.style.marginLeft = '1100px'
            menuAberto.innerHTML = `
            <h2>menu</h2>

            <a href='#' id="promocoes" >Promoções</a><br>
            <a href='#' id="populares" >Livros populares</a><br>
            <a href='#' id="paginas" >Troca de paginas</a><br>

            
            `

            divHBG.append(menuAberto)
            divHBG.style.zIndex = '4'
            divHBG.style.transition = '1.5s'
            divHBG.style.left = '1175px'
            divHBG.style.paddingLeft = '15px'
            divHBG.style.backgroundColor = 'rgb(156, 253, 0)'
            divHBG.style.position = 'fixed'
            divHBG.style.width = '200px'
            divHBG.style.height = '1000px'

            menuNavegacao()

        }
        else if (contador % 2 != 0) {
            menu.style.transition = '1.5s'
            menu.style.marginLeft = '1200px'
            divHBG.style.transition = '2s'
            divHBG.style.left = '1570px'
        }
    })
}

abrir()

function menuNavegacao() {
    const promo = document.getElementById('promocoes')
    const popular = document.getElementById('populares')
    const pagins = document.getElementById('paginas')

        promo.addEventListener('click', (event) => {
        event.preventDefault();
        tituloPromo.scrollIntoView({
            behavior:'smooth'
            });
        });
    popular.addEventListener('click', (event) => {
        event.preventDefault();
        secaoPrincipal.scrollIntoView({
            behavior:'smooth'
            });
        });
    pagins.addEventListener('click', (event) => {
        event.preventDefault();
        passaPagina.scrollIntoView({
            behavior:'smooth'
            });
        });
    }

