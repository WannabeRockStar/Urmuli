let menus = [
    {
        id: 1,
        title: 'ხინკალი "ქალაქური"',
        price: '1.00',
        url: './../assets/images/khinkali.jpg',
        recipes: 'Chicken breast . spiced bread crumbs . chips or mashed potatoes . aioli sauce lorem ipsum dolor'
    },
    {
        id: 2,
        title: 'ღორის მწვადი',
        price: '12.00',
        url: './../assets/images/bbq2.jpg',
        recipes: 'Chicken breast . spiced bread crumbs . chips or mashed potatoes . aioli sauce lorem ipsum dolor'
    },
    {
        id: 3,
        title: 'სალათა',
        price: '8.00',
        url: './../assets/images/salad.jpg',
        recipes: 'Chicken breast . spiced bread crumbs . chips or mashed potatoes . aioli sauce lorem ipsum dolor'
    },
    {
        id: 4,
        title: 'მადამ ბოვარი',
        price: '17.00',
        url: './../assets/images/omlet.jpg',
        recipes: 'Chicken breast . spiced bread crumbs . chips or mashed potatoes . aioli sauce lorem ipsum dolor'
    },
    {
        id: 5,
        title: 'ქაბაბი',
        price: '12.00',
        url: './../assets/images/bbq.jpg',
        recipes: 'Chicken breast . spiced bread crumbs . chips or mashed potatoes . aioli sauce lorem ipsum dolor'
    },
    {
        id: 6,
        title: 'ფხალის ასორტი',
        price: '15.00',
        url: './../assets/images/salad2.jpg',
        recipes: 'Chicken breast . spiced bread crumbs . chips or mashed potatoes . aioli sauce lorem ipsum dolor'
    },
    {
        id: 7,
        title: 'შემწვარი კალმახი',
        price: '12.00',
        url: './../assets/images/food.jpg',
        recipes: 'Chicken breast . spiced bread crumbs . chips or mashed potatoes . aioli sauce lorem ipsum dolor'
    },
    {
        id: 8,
        title: 'შემწვარი ორაგული',
        price: '6.50',
        url: './../assets/images/food3.jpg',
        recipes: 'Chicken breast . spiced bread crumbs . chips or mashed potatoes . aioli sauce lorem ipsum dolor'
    },
    {
        id: 9,
        title: 'ქოთნის ლობიო',
        price: '5.00',
        url: './../assets/images/food2.jpg',
        recipes: 'Chicken breast . spiced bread crumbs . chips or mashed potatoes . aioli sauce lorem ipsum dolor'
    },
    {
        id: 10,
        title: 'მექსიკური კარტოფილი',
        price: '8.00',
        url: './../assets/images/mexican.jpg',
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
                
                    <h3 class="menu-page-title">${data[i].title}<br class="br-class" /></h3>
                    <h3 class="menu-page-title">₾ ${data[i].price}</h3>
                
                
            </div>
        </div>`
    }

    // <div class="menu-page-text">
    //     ${data[i].recipes}
    // </div>

    pageLists.innerHTML = pageContent
    menuContainer.innerHTML = content
    // pageItems[0].classList.add('active')
}

initActivePageItem(1)



function setActivePageItem(e) {
    const pageItems = document.getElementsByClassName('pagination-item')

    initActivePageItem(parseInt(e.target.dataset.index))

    console.log(e.target)
    
    e.target.classList.add('active')
    
}