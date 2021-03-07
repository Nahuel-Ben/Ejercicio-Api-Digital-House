window.onload = () =>{

    fetch('http://localhost:3000/api/products/latest')
    .then(response => response.json())
    .then(json => {

            let a = document.querySelectorAll('a.aLatest')
            let img = document.querySelectorAll('img.imgLatest')
            let h2 = document.querySelectorAll('h2.h2Latest')
            let span = document.querySelectorAll('span.spanLatest')
            let p = document.querySelectorAll('p.pLatest')

            for (let i = 0; i < json.meta.count; i++) {

                a[i].href = `/products/detail/${json.data[i].id}`
                img[i].src = `/images/products/${json.data[i].image}`
                img[i].alt = `${json.data[i].name}`
                h2[i].innerHTML = '$' + `${Math.trunc(json.data[i].price - json.data[i].price * json.data[i].discount /100)}`
                span[i].innerHTML = `${json.data[i].discount} % OFF`
                p[i].innerHTML = `${json.data[i].name}`
            }
        })

    .catch(err => console.log(err))

    fetch('http://localhost:3000/api/products/offers')
    .then(response => response.json())
    .then(json => {

            let a = document.querySelectorAll('a.aOffers')
            let img = document.querySelectorAll('img.imgOffers')
            let h2 = document.querySelectorAll('h2.h2Offers')
            let span = document.querySelectorAll('span.spanOffers')
            let p = document.querySelectorAll('p.pOffers')

            for (let i = 0; i < json.meta.count; i++) {

                a[i].href = `/products/detail/${json.data[i].id}`
                img[i].src = `/images/products/${json.data[i].image}`
                img[i].alt = `${json.data[i].name}`
                h2[i].innerHTML = `$ ${Math.trunc(json.data[i].price - json.data[i].price * json.data[i].discount /100)}`
                span[i].innerHTML = `${json.data[i].discount} % OFF`
                p[i].innerHTML = `${json.data[i].name}`
            }
    })

    .catch(err => console.log(err))
}