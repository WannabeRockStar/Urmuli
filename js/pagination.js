let menus = [
    {
        id: 1,
        title: 'რაღაც კერძი',
        price: 6.50,
        url: 'https://demo.cmssuperheroes.com/themeforest/wp-gaucho/wp-content/uploads/2015/11/dish-1-large-180x180.png',
        recipes: 'Chicken breast . spiced bread crumbs . chips or mashed potatoes . aioli sauce lorem ipsum dolor'
    },
    {
        id: 2,
        title: 'რაღაც კერძი',
        price: 6.50,
        url: 'https://demo.cmssuperheroes.com/themeforest/wp-gaucho/wp-content/uploads/2015/11/dish-1-large-180x180.png',
        recipes: 'Chicken breast . spiced bread crumbs . chips or mashed potatoes . aioli sauce lorem ipsum dolor'
    },
    {
        id: 3,
        title: 'მტრედის კერძი',
        price: 6.50,
        url: 'https://demo.cmssuperheroes.com/themeforest/wp-gaucho/wp-content/uploads/2015/11/dish-1-large-180x180.png',
        recipes: 'Chicken breast . spiced bread crumbs . chips or mashed potatoes . aioli sauce lorem ipsum dolor'
    },
    {
        id: 4,
        title: 'რაღაც კერძი',
        price: 6.50,
        url: 'https://demo.cmssuperheroes.com/themeforest/wp-gaucho/wp-content/uploads/2015/11/dish-1-large-180x180.png',
        recipes: 'Chicken breast . spiced bread crumbs . chips or mashed potatoes . aioli sauce lorem ipsum dolor'
    },
    {
        id: 5,
        title: 'რაღაც კერძი',
        price: 6.50,
        url: 'https://demo.cmssuperheroes.com/themeforest/wp-gaucho/wp-content/uploads/2015/11/dish-1-large-180x180.png',
        recipes: 'Chicken breast . spiced bread crumbs . chips or mashed potatoes . aioli sauce lorem ipsum dolor'
    },
    {
        id: 6,
        title: 'რაღაც კერძი',
        price: 6.50,
        url: 'https://demo.cmssuperheroes.com/themeforest/wp-gaucho/wp-content/uploads/2015/11/dish-1-large-180x180.png',
        recipes: 'Chicken breast . spiced bread crumbs . chips or mashed potatoes . aioli sauce lorem ipsum dolor'
    },
    {
        id: 7,
        title: 'რაღაც კერძი',
        price: 6.50,
        url: 'https://demo.cmssuperheroes.com/themeforest/wp-gaucho/wp-content/uploads/2015/11/dish-1-large-180x180.png',
        recipes: 'Chicken breast . spiced bread crumbs . chips or mashed potatoes . aioli sauce lorem ipsum dolor'
    },
    {
        id: 8,
        title: 'რაღაც კერძი',
        price: 6.50,
        url: 'https://demo.cmssuperheroes.com/themeforest/wp-gaucho/wp-content/uploads/2015/11/dish-1-large-180x180.png',
        recipes: 'Chicken breast . spiced bread crumbs . chips or mashed potatoes . aioli sauce lorem ipsum dolor'
    },
    {
        id: 9,
        title: 'რაღაც კერძი',
        price: 6.50,
        url: 'https://demo.cmssuperheroes.com/themeforest/wp-gaucho/wp-content/uploads/2015/11/dish-1-large-180x180.png',
        recipes: 'Chicken breast . spiced bread crumbs . chips or mashed potatoes . aioli sauce lorem ipsum dolor'
    },
    {
        id: 10,
        title: 'რაღაც კერძი',
        price: 6.50,
        url: 'https://demo.cmssuperheroes.com/themeforest/wp-gaucho/wp-content/uploads/2015/11/dish-1-large-180x180.png',
        recipes: 'Chicken breast . spiced bread crumbs . chips or mashed potatoes . aioli sauce lorem ipsum dolor'
    },
    {
        id: 11,
        title: 'ჩვენი კერძი',
        price: 6.50,
        url: 'https://demo.cmssuperheroes.com/themeforest/wp-gaucho/wp-content/uploads/2015/11/dish-1-large-180x180.png',
        recipes: 'Chicken breast . spiced bread crumbs . chips or mashed potatoes . aioli sauce lorem ipsum dolor'
    },
    {
        id: 12,
        title: 'რაღაც კერძი',
        price: 6.50,
        url: 'https://demo.cmssuperheroes.com/themeforest/wp-gaucho/wp-content/uploads/2015/11/dish-1-large-180x180.png',
        recipes: 'Chicken breast . spiced bread crumbs . chips or mashed potatoes . aioli sauce lorem ipsum dolor'
    },
    {
        id: 13,
        title: 'რაღაც კერძი',
        price: 6.50,
        url: 'https://demo.cmssuperheroes.com/themeforest/wp-gaucho/wp-content/uploads/2015/11/dish-1-large-180x180.png',
        recipes: 'Chicken breast . spiced bread crumbs . chips or mashed potatoes . aioli sauce lorem ipsum dolor'
    },
    {
        id: 14,
        title: 'რაღაც კერძი',
        price: 6.50,
        url: 'https://demo.cmssuperheroes.com/themeforest/wp-gaucho/wp-content/uploads/2015/11/dish-1-large-180x180.png',
        recipes: 'Chicken breast . spiced bread crumbs . chips or mashed potatoes . aioli sauce lorem ipsum dolor'
    },
    {
        id: 15,
        title: 'რენდომ კერძი',
        price: 6.50,
        url: 'https://demo.cmssuperheroes.com/themeforest/wp-gaucho/wp-content/uploads/2015/11/dish-1-large-180x180.png',
        recipes: 'Chicken breast . spiced bread crumbs . chips or mashed potatoes . aioli sauce lorem ipsum dolor'
    },
    {
        id: 16,
        title: 'რაღაც კერძი',
        price: 6.50,
        url: 'https://demo.cmssuperheroes.com/themeforest/wp-gaucho/wp-content/uploads/2015/11/dish-1-large-180x180.png',
        recipes: 'Chicken breast . spiced bread crumbs . chips or mashed potatoes . aioli sauce lorem ipsum dolor'
    }
]

function initActivePageItem(num) {
    const pageItems = document.getElementsByClassName('pagination-item')
    const menuContainer = document.getElementById('menu-page-list')
    const pageLists = document.getElementById('pagination-list')
    let content = ''
    let pageContent = ''
    const pageNumber = 8
    let data = []
    let totalPages = Math.ceil(menus.length / pageNumber)
    console.log(totalPages)

    for(let i = 0; i < pageItems.length; i++) {
        pageItems[i].classList.remove('active')
        
    }

    for(let i = 0; i < totalPages; i++) {
       if(i + 1 === num) {
        pageContent += `
            <li onclick="setActivePageItem(event)" class="pagination-item active" data-index="${i + 1}"></li>
        `
       } else {
        pageContent += `
            <li onclick="setActivePageItem(event)" class="pagination-item" data-index="${i + 1}"></li>
        `
       }
    }

    data = menus.slice((num - 1) * pageNumber, num * pageNumber)

    // console.log(menus, (num - 1) * pageNumber, num * pageNumber)


    for(let i = 0; i < data.length; i++) {
        content += `<div class="menu-page-item" data-aos="fade-left" data-aos-delay="${100 * i}">
            <div class="menu-page-image">
                <img src="${data[i].url}" alt="">
            </div>
            <div class="menu-page-info">
                <h3 class="menu-page-title">
                    ${data[i].title} ${data[i].id}<br class="br-class" />
                    <span class="menu-title-border"></span>
                    <span class="menu-page-price">₾ ${data[i].price}</span>
                </h3>
                <div class="menu-page-text">
                    ${data[i].recipes}
                </div>
            </div>
        </div>`
    }

    pageLists.innerHTML = pageContent
    menuContainer.innerHTML = content
    // pageItems[0].classList.add('active')
}

initActivePageItem(1)



function setActivePageItem(e) {
    const pageItems = document.getElementsByClassName('pagination-item')

    initActivePageItem(parseInt(e.target.dataset.index))
    // console.log(e.target)
    // for(let i = 0; i < pageItems.length; i++) {
    //     pageItems[i].classList.remove('active')
        
    // }

    console.log(e.target)
    
    e.target.classList.add('active')


    // for(let i = 0; i < menus.length; i++) {
    //     content += `<div class="menu-page-item" data-aos="fade-up">
    //     <div class="menu-page-image">
    //         <img src="https://demo.cmssuperheroes.com/themeforest/wp-gaucho/wp-content/uploads/2015/11/dish-1-large-180x180.png" alt="">
    //     </div>
    //     <div class="menu-page-info">
    //         <h3 class="menu-page-title">
    //             Tex-Mex Chicken Wings
    //             <span class="menu-title-border"></span>
    //             $ 6.50
    //         </h3>
    //         <div class="menu-page-text">
    //             Chicken breast . spiced bread crumbs . chips or mashed potatoes . aioli sauce lorem ipsum dolor
    //         </div>
    //     </div>
    // </div>`
    // }

    // menuContainer.innerHTML = content
}

// setActivePageItem()