class ProductDTO {
    constructor(product){
        this.title= product.title;        
        this.description= product.description;        
        this.code= product.code.replace(/\s/g, '').toLowerCase();        
        this.price= product.price;        
        this.status= true;        
        this.stock= product.stock;        
        this.category= product.category.toLowerCase();
    };

    isValidProduct(product) {
        return (
            product &&
            typeof product.title === 'string' &&
            typeof product.description === 'string' &&
            typeof product.category === 'string' &&
            typeof product.price === 'number' &&
            typeof product.stock === 'number' &&
            typeof product.thumbnail === 'string'
        );
    }
};

export default ProductDTO