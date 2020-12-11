console.log("connected");

function showCart(){
  let cart = document.getElementById('cart');



  if(cart.className === "col-lg-4 d-none"){
    cart.className = "col-lg-4"
  }else{
    cart.className = "col-lg-4 d-none"
  }
  

}


