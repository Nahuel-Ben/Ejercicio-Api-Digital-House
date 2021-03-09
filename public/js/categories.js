
window.addEventListener('load', (e) => {
    e.preventDefault();
    
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
        h2[i].innerHTML = '$' + /* `${Math.trunc(json.data[i].price - json.data[i].price * json.data[i].discount /100)}` */'gatito'
        span[i].innerHTML = `${json.data[i].discount} % OFF`
        p[i].innerHTML = /* `${json.data[i].name}` */ 'Desde la api'
    }}

    fetch('http://localhost:3000/api/products')
            .then(response => response.json())
            .then(json => {

                rewrite(json)
            })

    let outdoors = document.getElementById('Outdoors');
    outdoors.onclick = () => {
        
        fetch('http://localhost:3000/api/products/' + outdoors.innerHTML)
            
            .then(response => response.json())
            .then(json => {

               rewrite(json)
    })
    }

    let computers = document.getElementById('Computers');
    computers.onclick = () => {
        
        fetch('http://localhost:3000/api/products/' + computers.innerHTML)
            
            .then(response => response.json())
            .then(json => {

                rewrite(json)
            }
        )
    }

    let industrial = document.getElementById('Industrial');
    industrial.onclick = () => {
        
        fetch('http://localhost:3000/api/products/' + industrial.innerHTML)
            
            .then(response => response.json())
            .then(json => {

                rewrite(json)
            }
        )
    }

    let home = document.getElementById('Home');
    home.onclick = () => {
        
        fetch('http://localhost:3000/api/products/' + home.innerHTML)
            
            .then(response => response.json())
            .then(json => {

                rewrite(json)
            }
        )
    }

    let tools = document.getElementById('Tools');
    tools.onclick = () => {
        
        fetch('http://localhost:3000/api/products/' + tools.innerHTML)
            
            .then(response => response.json())
            .then(json => {

                rewrite(json)
            }
        )
    }

    let garden = document.getElementById('Garden');
    garden.onclick = () => {
        
        fetch('http://localhost:3000/api/products/' + garden.innerHTML)
            
            .then(response => response.json())
            .then(json => {

                rewrite(json)
            }
        )
    }

    let toys = document.getElementById('Toys');
    toys.onclick = () => {
        
        fetch('http://localhost:3000/api/products/' + toys.innerHTML)
            
            .then(response => response.json())
            .then(json => {

                rewrite(json)
            }
        )
    }

    let music = document.getElementById('Music');
    music.onclick = () => {
        
        fetch('http://localhost:3000/api/products/' + music.innerHTML)
            
            .then(response => response.json())
            .then(json => {

                rewrite(json)
            }
        )
    }

    let shoes = document.getElementById('Shoes');
    shoes.onclick = () => {
        
        fetch('http://localhost:3000/api/products/' + shoes.innerHTML)
            
            .then(response => response.json())
            .then(json => {

                rewrite(json)
            }
        )
    }
})