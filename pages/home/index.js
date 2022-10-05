/* Desenvolva sua lógica aqui ... */

class Dom {
    static gender(elem) {
        let div = document.querySelector('.genders')
        let button = document.createElement("button")

        button.innerText = elem

        button.classList.add('button__genders')

        div.append(button)
    }

    static product(array) {
        let container = document.querySelector('.products')

        let li = document.createElement('li')
        let info = document.createElement('div')
        let img = document.createElement('img')
        let band = document.createElement('h5')
        let year = document.createElement('h5')
        let title = document.createElement('h3')
        let price = document.createElement('h2')
        let button = document.createElement('button')

        li.id = array.id


        img.src = array.img
        img.alt = `${array.title} - ${array.band}`

        band.innerText = array.band
        year.innerText = array.year
        title.innerText = array.title
        price.innerText = array.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        button.innerText = 'Comprar'

        li.classList.add('products__product')
        info.classList.add('products__container__info')
        title.classList.add('products__title')
        price.classList.add('products__price')
        img.classList.add('products__img')
        band.classList.add('products__band')
        year.classList.add('products__year')
        button.classList.add('button__products')

        container.append(li)
        li.append(img, info)
        info.append(band, year, title, price, button)
    }
}



class Render {

    static genders(array) {
        array.forEach(element => {
            Dom.gender(element)
        });
    }

    static products(array) {
        array.forEach(elem => {
            Dom.product(elem)
        })
    }

    static filter(array, gender, price) {
        let container = document.querySelector('.products')
        container.innerHTML = ''

        let result = array.filter(elem => {
            if (gender && price) {
                return elem.price <= price && elem.category == gender
            }
            else if (price) {
                return elem.price <= price
            }
            return elem.category == gender
        })
        Render.products(result)
    }

    static darkMode() {

        let button = document.querySelector('#dark__mode')
        let html = document.querySelector('html')
        let a = localStorage.getItem('dark_mode')

        if (a) {
            html.classList.toggle('dark__mode')
            button.innerText = 'light_mode'
        }

        button.addEventListener('click', () => {

            html.classList.toggle('dark__mode')

            let a = localStorage.getItem('dark_mode')

            if (!a) {
                localStorage.setItem('dark_mode', true)
                button.innerText = 'light_mode'
            } if (a) {
                localStorage.removeItem('dark_mode')
                button.innerText = 'dark_mode'
            }
        })


    }
}



class action {
    static filter(array) {

        let button = document.querySelectorAll('.button__genders')
        let price = document.querySelector('#price')
        let priceText = document.querySelector('.filter__price')
        let gender
        let priceSlider

        console.log(button)

        button.forEach((elem, index) => {
            button[index].addEventListener('click', (event) => {
                event.preventDefault()

                let indexGender = categories.indexOf(button[index].innerText)

                gender = indexGender

                Render.filter(array, gender, priceSlider)

            })
        })

        price.oninput = function () {
            price.innerHTML = ''
            price.min = '0'
            price.max = '300'

            priceSlider = price.value

            Render.filter(array, gender, priceSlider)

            priceText.innerText = `Até R$ ${price.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
        }

    }
}

Render.genders(categories)
Render.products(products)
Render.darkMode()
action.filter(products)


const input = document.querySelector('#price')


function handleInputChange(e) {
    let target = e.target
    if (e.target.type !== 'range') {
        target = document.getElementById('price')
    }
    const min = target.min
    const max = target.max
    const val = target.value

    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

input.addEventListener('input', handleInputChange)


// font style input range: https://nikitahl.com/style-range-input-css#:~:text=To%20style%20the%20range%20input,selectors%20for%20the%20range%20input











