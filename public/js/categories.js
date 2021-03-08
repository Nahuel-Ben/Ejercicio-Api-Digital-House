
window.addEventListener('load', (e) => {
    e.preventDefault();
    var outdoors = document.getElementById('Outdoors');
    let computers = document.getElementById('Computers');
    let industrial = document.getElementById('Industrial');
    let home = document.getElementById('Home');
    let tools = document.getElementById('Tools');
    let garden = document.getElementById('Garden');
    let toys = document.getElementById('Toys');
    let music = document.getElementById('Music');
    let shoes = document.getElementById('Shoes');

    function rewrite(json) {
    let section = document.querySelectorAll('section.product-box')
    let a = document.querySelectorAll('a.aCategory')
    let img = document.querySelectorAll('img.imgCategory')
    let h2 = document.querySelectorAll('h2.h2Category')
    let span = document.querySelectorAll('span.spanCategory')
    let p = document.querySelectorAll('p.pCategory')
        for (let i = 0; i < (section.length - json.data.length); i++){
            section[i].innerHTML = ''
        }

    for (let i = 0; i < json.meta.count; i++) {

        a[i].href = `/products/detail/${json.data[i].id}`
        img[i].src = `/images/products/${json.data[i].image}`
        img[i].alt = `${json.data[i].name}`
        h2[i].innerHTML = '$' + `${Math.trunc(json.data[i].price - json.data[i].price * json.data[i].discount /100)}`
        span[i].innerHTML = `${json.data[i].discount} % OFF`
        p[i].innerHTML = `${json.data[i].name}`
    }}

    fetch('http://localhost:3000/api' + window.location.pathname)
            .then(response => response.json())
            .then(json => {

                rewrite(json)
    })

    
    outdoors.onclick = () => {
        
        fetch('http://localhost:3000/api/products/categories/' + outdoors.innerHTML)
            
            .then(response => response.json())
            .then(json => {

                rewrite(json)
    })
    }

    computers.onclick = () => {
        
        fetch('http://localhost:3000/api/products/' + computers.innerHTML)
            
            .then(response => response.json())
            .then(json => {

                rewrite(json)
            }
        )
    }

    industrial.onclick = () => {
        
        fetch('http://localhost:3000/api/products/' + industrial.innerHTML)
            
            .then(response => response.json())
            .then(json => {

                rewrite(json)
            }
        )
    }

    home.onclick = () => {
        
        fetch('http://localhost:3000/api/products/' + home.innerHTML)
            
            .then(response => response.json())
            .then(json => {

                rewrite(json)
            }
        )
    }

    tools.onclick = () => {
        
        fetch('http://localhost:3000/api/products/' + tools.innerHTML)
            
            .then(response => response.json())
            .then(json => {

                rewrite(json)
            }
        )
    }

    garden.onclick = () => {
        
        fetch('http://localhost:3000/api/products/' + garden.innerHTML)
            
            .then(response => response.json())
            .then(json => {

                rewrite(json)
            }
        )
    }

    toys.onclick = () => {
        
        fetch('http://localhost:3000/api/products/' + toys.innerHTML)
            
            .then(response => response.json())
            .then(json => {

                rewrite(json)
            }
        )
    }

    music.onclick = () => {
        
        fetch('http://localhost:3000/api/products/' + music.innerHTML)
            
            .then(response => response.json())
            .then(json => {

                rewrite(json)
            }
        )
    }

    shoes.onclick = () => {
        
        fetch('http://localhost:3000/api/products/' + shoes.innerHTML)
            
            .then(response => response.json())
            .then(json => {

                rewrite(json)
            }
        )
    }
})