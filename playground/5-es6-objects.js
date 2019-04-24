// Object property shorthand

const name = 'Derek' 
const userAge = 23

const user = {
    name,
    age: userAge,
    location: 'Atlanta'
}

console.log(user)

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock

// const {label:productLabel, stock, rating = 5} = product

// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, {label: productLabel, stock}) => {
    console.log(type)
    console.log(productLabel)
    console.log(stock)
}

transaction('order', product)