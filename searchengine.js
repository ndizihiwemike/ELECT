

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
        title: 'EAR PICK',
        price: 100
    },
    {
        id: 4,
        Image: 'IMG_20230518_152248.jpg',
        title: 'EAR PIEC',
        price: 130
    },
    {
        id: 5,
        Image: 'IMG_20230518_175110.jpg',
        title: 'EAR PAD',
        price: 320
    },
    {
        id: 6,
        Image: 'IMG-20230121-WA0011.jpg',
        title: 'EAR PAST',
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
                   <h2>${price}.00</h2>
                   <button>Add to cart</button>
                </div>
            </div>`
        )
    }).join('')
};
displayitem(product);

/*var cors = require(cors());
app.use(cors());
app.options('*',cors());
var allowCrossDomain = function(req,res,next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();  
}
app.use(allowCrossDomain)*/

/*app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });*/