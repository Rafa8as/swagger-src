import { Router } from "express";
import { 
        editProduct,
        eraseProduct,
        insertProduct,
        product,
        products,
        mockingProducts
       
 } from "../controllers/products.controller.js";
 
 import roleAuth from "../middlewares/role.middleware.js";
 
 const router = Router ();

 router.get ('/', products);
 router.get ('/:pid',product);
 router.post ('/',roleAuth(['admin', 'premium']), insertProduct);
 router.put ('/:pid', roleAuth(['admin', 'premium']), editProduct);
 router.delete ('/:pid', roleAuth (['admin', 'premium']), eraseProduct);
 router.post('/mockingproducts', roleAuth(['admin', 'premium']), mockingProducts);
 console.log (products)
 
 
export default router;