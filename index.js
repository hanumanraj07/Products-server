const express = require("express")
const cors = require("cors")
const app = express();

app.use(express.json())
app.use(cors())

const products = [
    {
        id: 1,
        name: "Wireless Mouse",
        category: "Electronics",
        price: 799,
        stock: 25,
        rating: 4.3
    },
    {
        id: 2,
        name: "Running Shoes",
        category: "Footwear",
        price: 2499,
        stock: 40,
        rating: 4.5
    },
    {
        id: 3,
        name: "Laptop Stand",
        category: "Accessories",
        price: 999,
        stock: 30,
        rating: 4.2
    },
    {
        id: 4,
        name: "Smart Watch",
        category: "Electronics",
        price: 4999,
        stock: 12,
        rating: 4.4
    },
    {
        id: 5,
        name: "Backpack",
        category: "Fashion",
        price: 1599,
        stock: 50,
        rating: 4.1
    },

    // New 15 Products

    {
        id: 6,
        name: "Bluetooth Speaker",
        category: "Electronics",
        price: 1999,
        stock: 20,
        rating: 4.6
    },
    {
        id: 7,
        name: "Gaming Keyboard",
        category: "Electronics",
        price: 3499,
        stock: 18,
        rating: 4.7
    },
    {
        id: 8,
        name: "Water Bottle",
        category: "Home",
        price: 499,
        stock: 60,
        rating: 4.0
    },
    {
        id: 9,
        name: "Office Chair",
        category: "Furniture",
        price: 7999,
        stock: 10,
        rating: 4.3
    },
    {
        id: 10,
        name: "T-Shirt",
        category: "Fashion",
        price: 699,
        stock: 70,
        rating: 4.2
    },
    {
        id: 11,
        name: "Power Bank",
        category: "Electronics",
        price: 1299,
        stock: 35,
        rating: 4.4
    },
    {
        id: 12,
        name: "Sunglasses",
        category: "Fashion",
        price: 899,
        stock: 45,
        rating: 4.1
    },
    {
        id: 13,
        name: "Headphones",
        category: "Electronics",
        price: 2999,
        stock: 22,
        rating: 4.5
    },
    {
        id: 14,
        name: "Notebook",
        category: "Stationery",
        price: 199,
        stock: 100,
        rating: 4.0
    },
    {
        id: 15,
        name: "Coffee Mug",
        category: "Home",
        price: 349,
        stock: 80,
        rating: 4.3
    },
    {
        id: 16,
        name: "LED Desk Lamp",
        category: "Home",
        price: 1499,
        stock: 28,
        rating: 4.4
    },
    {
        id: 17,
        name: "Fitness Band",
        category: "Electronics",
        price: 2799,
        stock: 16,
        rating: 4.2
    },
    {
        id: 18,
        name: "Denim Jacket",
        category: "Fashion",
        price: 3599,
        stock: 14,
        rating: 4.5
    },
    {
        id: 19,
        name: "Study Table",
        category: "Furniture",
        price: 5999,
        stock: 8,
        rating: 4.3
    },
    {
        id: 20,
        name: "Wall Clock",
        category: "Home",
        price: 799,
        stock: 33,
        rating: 4.1
    }
];

app.get("/products", (req, res) => {
    res.status(200).json(products);
})

app.get("/products/:id", (req, res) => {

    const item = Number(req.params.id)
    let product = {};

    for (let i = 0; i < products.length; i++) {
        if (products[i].id === item) {
            product = products[i];
        }
    }
    res.status(200).json(product);
})

app.get("/products/category/:categoryName", (req, res) => {

    const productName = req.params.categoryName.toLowerCase();
    let product = [];

    for (let i = 0; i < products.length; i++) {

        if (products[i].category.toLowerCase() === productName) {

            product.push(products[i]);
        }
    }
    res.status(200).json(product);
})

app.post("/products", (req, res) => {

    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        stock: req.body.stock,
        rating: req.body.rating
    }

    products.push(newProduct);

    res.status(201).json("Product added Successfully")
})


app.put("/products/:id", (req, res) => {

    const productId = Number(req.params.id)
    let index = 0;

    for (let i = 0; i < products.length; i++) {
        if (products[i].id === productId) {
            index = i;
        }
    }

    if (productId === -1) {
        res.status(401).json({ message: "Product not found" });
    }

    products[index] = {
        id: productId,
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        stock: req.body.stock,
        rating: req.body.rating
    };

    res.status(200).json({
        message: "Product updated",
        field: products[index]
    })
})

app.put("/products/:id/stock", (req, res) => {

    const productId = Number(req.params.id);
    const newStock = req.body.stock;
    let index = 0;

    for (let i = 0; i < products.length; i++) {
        if (products[i].id === productId) {
            index = i;
        }
    }

    products[index].stock = newStock;

    res.status(200).json({
        message: "Stock updated",
        stock: products[index]
    })
})

app.put("/products/:id/price",(req,res)=>{

    const productId = Number(req.params.id)
    const priceOf = req.body.price;
    let index = 0;

    for(let i=0; i<products.length; i++){
        if(products[i].id === productId)
            index = i;
    }

    products[index].price=priceOf
    
    res.status(200).json({
        message:"Price Updated",
        price:products[index]
    })
})


app.listen(5000, () => {
    console.log("Server started on port 3000")
})