window.onload = () =>{
    fetch('http://localhost:3000/api/products/latest')
    .then(response => response.json())
    .then(json => {

        let product = json.data;
        let latestProducts = document.getElementById('latest-products')

            for(let i= 0; i < latestProducts.childElementCount; i++) {
                latestProducts.children[i].querySelector('a').href = '/products/detail/' + product[i].id;
                latestProducts.children[i].querySelector('img').src = '/images/products/' + product[i].image;
                latestProducts.children[i].querySelector('img').alt = product[i].name;
                latestProducts.children[i].querySelector('h2').innerText = '$ ' + Math.trunc(product[i].price * product.discount / 100);
                latestProducts.children[i].querySelector('span').innerText = product[i].discount + '% OFF';
                latestProducts.children[i].querySelector('p').innerText = product[i].name;
        }
    })

    .catch(err => console.log(err))

    fetch('http://localhost:3000/api/products/offers')
    .then(response => response.json())
    .then(json => {

        let product = json;
        let offersProducts = document.getElementById('offers-products')

            for(let i= 0; i < offersProducts.childElementCount; i++) {
                offersProducts.children[i].querySelector('a').href = '/products/detail/' + product[i].id;
                offersProducts.children[i].querySelector('img').src = '/images/products/' + product[i].image;
                offersProducts.children[i].querySelector('img').alt = product[i].name;
                offersProducts.children[i].querySelector('h2').innerText = '$ ' + Math.trunc(product[i].price * products.discount / 100);
                offersProducts.children[i].querySelector('span').innerText = products[i].discount + '% OFF';
                offersProducts.children[i].querySelector('p').innerText = products[i].name;
        }
    })

    .catch(err => console.log(err))
}
