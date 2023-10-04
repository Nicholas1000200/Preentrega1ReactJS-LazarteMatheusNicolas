const products = [
    {
        id: '1',
        name:'Funko Darth Tropper con Grogu',
        price:2500,
        category: 'funko',
        img:'',
        stock:25,
        description:'Juguete Funko de Darth Tropper con Grogu '
    },
    {
        id: '2',
        name:'Funko Moff Gideon',
        price:2500,
        category: 'funko',
        img:'',
        stock:25,
        description:'Juguete Funko de Moff Gideon '
    },
    {
        id: '3',
        name:'Funko Darth Vader(Edicion Especial)',
        price:7000,
        category: 'funko',
        img:'',
        stock:25,
        description:'Juguete Funko de Darth Vader(Edicion Especial) '
    },
    {
        id: '4',
        name:'Funko Ahsoka',
        price:2500,
        category: 'funko',
        img:'',
        stock:25,
        description:'Juguete Funko de Ahsoka '
    },
    {
        id: '5',
        name:'Lego Caza Imperial',
        price:8000,
        category: 'lego',
        img:'',
        stock:10,
        description:'Juguete Lego Caza Imperial '
    },
    {
        id: '6',
        name:'Lego Darth Vader Castillo',
        price:15000,
        category: 'lego',
        img:'',
        stock:5,
        description:'Juguete Lego Darth Vader Castillo'
    },
    {
        id: '7',
        name:'LEGO AT-T',
        price:10000,
        category: 'lego',
        img:'',
        stock:7,
        description:'Juguete LEGO AT-T '
    },
    {
        id: '8',
        name:'Plushie Darth Vader',
        price:1000,
        category: 'accesorios',
        img:'',
        stock:25,
        description:'Peluche Darth Vader '
    },
    {
        id: '9',
        name:'Llavero',
        price:500,
        category: 'accesorios',
        img:'',
        stock:25,
        description:'Llavero de Star Wars '
    },
]
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}
export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products.find(prod => prod.category === productCategory))
        },500)
    })
}