// object property shorthand

const name = 'himanshu'
const userAge = 19
const user = {
     name,
    age: userAge,
    location: 'delhi'
}
console.log(user)

// object destructuring

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const label = product.label
// const stock = product.stock

// const{label:productLabel, stock, rating=5} = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, { label, stock = 0 } = {}) => {
    console.log(type, label, stock)
}
transaction('order', product)