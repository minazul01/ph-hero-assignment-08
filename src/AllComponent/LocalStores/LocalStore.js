import toast from "react-hot-toast";


/* get all product */
const allProduct = () => {
    const all = localStorage.getItem('product')
    if (all) {
        const addProduct = JSON.parse(all);
        return addProduct;
    } else {
        // console.log([])
        return [];
    }
}
/* add product from local sotores */
const addProduct = product => {
    const addedLocalStore = allProduct();
    const exit = addedLocalStore.find(item => item.id == product.id)
    if(exit){
        return toast.error('This is an error!');
    }
   
    addedLocalStore.push(product);
    localStorage.setItem('product', JSON.stringify(addedLocalStore));
    toast.success('Successfully created!');
}


/* remove product form local stores */
// const removeProduct = id => {
//     const addedLocalStore = allProduct();
//     const remove = filter(product => product != )

// }




/* wishlist product */
const allWishlist = () => {
    const all = localStorage.getItem('wishlist');
    if(all){
        const wishlistProduct = JSON.parse(all);
        return wishlistProduct;
    }else{
        return [];
    }
}
/* add wishlist product*/
const handleWishlistProducts = product => {
    const addWishlist = allWishlist();
    const exit = addWishlist.find(item => item.id == product.id);
    if(exit){
        return toast.error('This is an error!');
    }
    addWishlist.push(product);
    localStorage.setItem('wishlist', JSON.stringify(addWishlist));
    toast.success('Successfully created!');
}

export { addProduct, allProduct, handleWishlistProducts}