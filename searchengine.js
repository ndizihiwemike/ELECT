

const product=[
    {
        id: 0,
        Image:'Capsules filling plate.jpg',
        title: 'Capscule plate',
        price: 520,
    },
    {
        id: 1,
        Image: 'Empty capscules.jpg',
        title: 'Capscules',
        price: 620
    },
    {
        id: 2,
        Image: 'Untitled.jpeg',
        title: 'MIX',
        price: 120
    },
    {
        id: 3,
        Image: 'https://cdn.gethypervisual.com/images/shopify/8df39e19-3770-4b6a-9c2e-98585e364 ce3/w1200_fb16_Photo_Feb_22__10_23_35_PM.jpg',
        title: 'HEAD SETS',
        price: 100
    },
    {
        id: 4,
        Image: 'PHONE.jpg',
        title: 'PHONE',
        price: 130
    },
    {
        id: 5,
        Image: 'POSTER.jpg',
        title: 'POSTER',
        price: 320
    },
    {
        id: 6,
        Image: 'IMG-20230121-WA0011.jpg',
        title: 'STICKER',
        price: 720
    },
]



// console.log(categories)

document.getElementById('searchBar').addEventListener('keyup', (e)=>{
    const searchData = e.target.value.toLowerCase();
    const filterData = product.filter((item)=> {
        // console.log(searchData)
        return(
            item.title.toLowerCase().includes(searchData)
        )
    })
    displayitem(filterData)
});

const displayitem = (items)=> {
// const categories = [...new setInterval(product.map((item)=>
//     {return item}))]
    let i=0;
    document.getElementById('root').innerHTML=items.map((item)=>{
        var {id,Image, title, price} = item;
        console.log(Image)
        return(
            `<div class='box'>
                <div class="img-box">
                   <img class="images" src="${Image}" alt="this">
                </div>
                <div class="bottom">
                   <p>${title}</p>
                   <h2>${price}.00</h2>`+
                   "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
                `</div>
            </div>`
        )
    }).join('')
};
displayitem(product);

var cart =[];

function addtocart(a){
    cart.push(0);
    displaycart();
}
function delElement(a){
    cart.pop(a, 1);
    displaycart();
}
function displaycart(a){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML="$ "+0+".00";

    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {Image, title, price} = items;
            total=total+price;
        document.getElementById("total").innerHTML="$ "+total+".00";

            return(
                `<div class="cart-item">
                <div class="row-ing">
                    <img class="rowing" src=${Image}>
                </div> 
                <p style='font-size:10px;'>${title}</p>
                <h2 style='font-size: 10px;'>${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+(j++)+")'></i></div>"
            );
        }).join('');
    }
}
