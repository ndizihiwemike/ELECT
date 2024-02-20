const product=[
    {
        id: 0,
        Image:'Untitled.jpeg',
        title: 'EAR PADS',
        price: 120
    },
    {
        id: 1,
        Image: '8cfeba07d93e44588e220e01780e090d.jpg',
        title: 'EAR PADS',
        price: 120
    },
    {
        id: 2,
        Image: 'Untitled.jpeg',
        title: 'EAR PADS',
        price: 120
    },
    {
        id: 3,
        Image: 'https://cdn.gethypervisual.com/images/shopify/8df39e19-3770-4b6a-9c2e-98585e364ce3/w1200_fb16_Photo_Feb_22__10_23_35_PM.jpg',
        title: 'EAR PADS',
        price: 100
    },
    {
        id: 4,
        Image: 'Untitled.jpeg',
        title: 'EAR PADS',
        price: 130
    },
    {
        id: 5,
        Image: 'IMG_20230518_175110.jpg',
        title: 'EAR PADS',
        price: 320
    },
    {
        id: 6,
        Image: 'IMG-20230121-WA0011.jpg',
        title: 'EAR PADS',
        price: 720
    },
]

const categories = [...new set(product.map((item)=> {return item}))]

document.getElementById('searchBar').addEventListener('keyup', (e)=>{
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item)=> {
        return(
            item.title.toLowerCase().includes(searchData)
        )
    })
    displayitem(filterData)
});

const displayitem = (items)=> {
    document.getElementById('root').innerHTML=items.map((item)=>{
        var {Image, title, price} = item;
        return(
            `<div class='box'>
                <div class='img-box>
                   <img class='images' src=${image}></img>
                </div>
                <div class='bottom'>
                   <p>${title}</p>
                   <h2>${price}.00</h2>
                   <button>Add to cart</button>
                </div>
            </div>`
        )
    }).join('')
};
displayitem(categories);