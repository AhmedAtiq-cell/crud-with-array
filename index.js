import express from "express";
const app = express();
app.use(express.json());
let products = [
    {
        id: 1,
        name: "HP HS45 Headphone",
        price: 4500,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8gWBYEsEc-BIBkLfkTItnNdjABTkmYTqibZh4E10XHg&s=10a",
        desc: "A comfortable and high-quality gaming headset.",
    },
    {
        id: 2,
        name: "RTX 3060",
        price: 115000,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVIBiZBc7wP6BPnFX6dBG-HzbvRevZh5rghpzMbmyNA&s=10",
        desc: "A powerful graphics card from NVIDIA.",
    },
];
app.get("/products", (req, res)=>{
    try{
        res.status(200).json(products);
    }
    catch(err){
        res.status(500).json({message:"Something went wrong."});
    }
});
app.post("/products", (req, res)=>{
    const newProduct = req.body;
    products.push(newProduct);
    res.status(201).json(newProduct);
});
app.delete("/products/:id", (req, res)=>{
    const { id } = req.params;
    products = products.filter((product)=> product.id !== parseInt(id));
    res.status(204).send();
});
app.listen(5050, ()=>{
    console.log("Server is running on Port 5050.");
});
