import express from "express";
import db from "./config/database.js";
const app = express();
import productRoutes from "./routes/index.js";
//Impor cors agar API bisa diakses di front end
import cors from "cors";

try {
    await db.authenticate();
    console.log('Database connected');
}catch (error) {
    console.error('Connection error', error);
}

app.get('/', (req,res) => {
    res.send('Welcome Hani');
});

app.use(cors());
app.use(express.json());
app.use('/products', productRoutes);

app.listen(3000, () => console.log('Server running at port 3000'))