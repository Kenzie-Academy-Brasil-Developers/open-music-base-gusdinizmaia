/* Desenvolva sua lógica aqui ... */

class Dom{
    static gender(elem){
        let div = document.querySelector('.genders')
        let button = document.createElement("button")
        
        button.innerText = elem

        button.classList.add('.button__genders')

        div.append(button)
    }

    // title: "Both Sides",
    // category: 4,
    // price: 22.0,
    // img: "../../assets/img/4.jpg",
    // band: "Phil Collins",
    // year: 1993,
    // id: 3,
    // title,category,price,img,band,year,id
    static product(array){
        let container = document.querySelector('.products')

        let div = document.createElement('div')
        let info = document.createElement('div')
        let img = document.createElement('img')
        let band = document.createElement('h5')
        let year = document.createElement('h5')
        let title = document.createElement('h3')
        let price = document.createElement('h2')
        let button = document.createElement('button') 

        img.src = array.img
        img.alt = `${array.title} - ${array.band}`

        band.innerText = array.band
        year.innerText = array.year
        title.innerText = array.title
        price.innerText = array.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        button.innerText = 'Comprar'

        div.classList.add('products__product')
        info.classList.add('products__container__info')
        title.classList.add('products__title')
        // category.classList.add('products__category')
        price.classList.add('products__price')
        img.classList.add('products__img')
        band.classList.add('products__band')
        year.classList.add('products__year')
        // id.classList.add('products__id')
        button.classList.add('button__products')

        container.append(div)
        div.append(img,info)
        info.append(band,year,title,price,button)
    }
}


categories.forEach(element => {
    Dom.gender(element)
});

products.forEach(elem => {
    Dom.product(elem)
})

