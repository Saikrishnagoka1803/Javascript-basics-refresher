// // understand and explain hoisting

// var a = 10;
// console.log(a);
// let c = 33;
// function krishna() {
//   var b = 20;
//   let k = 20;
//   const l = 120;
//   console.log(b);
//   console.log(k);
//   console.log(this);
// }
// krishna();

// var getName = () => {jcn};
// getName();
// dh
// function krishna2(){
//   let p = "Sai"
  
// }
function k(){
  let k = 33;
  function a(){
    var b = 10;
    console.log(k)
    c();
    function c(){
        console.log(b)
    }
}
a();
}
k();

setTimeout( () => {
  console.log("hey  anany")
}, 5000);

// create a callback

// function parentfunc(y){
//   console.log("I am from parent")
//   y();
// }
// parentfunc(function callbackfun(){
//   console.log("I am a callback")
// })

function counternew(){
  let count = 0;
  document.getElementById("goka")
  .addEventListener("click", function ccc(){
    console.log("counter clicked" , ++count);
  });
};
counternew();



function callAPromise(){
  const prom = new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve("hey I am a promise resolved")
    }, 1000);
  })
  return prom;
}
console.log(callAPromise());

// callback Hell

addToCart(cartId, function(orderId){
  proceedToPayment(orderId, function(status_id){
    transactionStatus(status_id)
  })
})

//Promise usage
const createOrder = createOrderPromise(cart) // this function returns a promise

createOrder.then(function (orderId){
  return proceedTpPayment(orderId)
})
.then(function(paymentInfo){
  return showOrderSummary(paymentInfo)
})
.then(function(walletInfo){
  return updateWalletInfo(walletInfo)
})

function createOrderPromise(cart){
  const p = new Promise((resolve, reject) => {
    setTimeout(function seee(){
      resolve("12345")
    }, 2000)
  });
  return p;
}



