





const store = () => {
    const products = []
    return {
      addProduct() {
        // code here
      
    
          for (let i = 0; i < arguments.length; i++) {
            
            products.push(arguments[i])
          

       }    
    
      },
      removeProduct() {
        // code here
         
       
      },
      listProducts() {
         products
      }
    }
  }


const myStore = store();
 myStore.addProduct("t-shirts");
myStore.addProduct("cookies");
myStore.removeProduct("phones");
myStore.addProduct("Shampoo");
myStore.addProduct("Shampoo");
myStore.listProducts();
