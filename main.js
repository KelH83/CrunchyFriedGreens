let year = document.getElementsByClassName("year")

for(let i =0; i <year.length; i++) {
const date = new Date();
year[i].textContent = date.getFullYear();
}



let total = 0.0;
let totalItems = 0
let delivery;
let finalTotal;
let basketItems = [];
let saladCount = 0;
let feastCount = 0;
let pokeCount = 0;
let roastCount = 0;
let medMixCount = 0;
let burgerCount = 0;
let curryCount = 0;
let lasagnaCount = 0;
let pizzaCount = 0;
let quicheCount = 0;

document.getElementById("total").textContent = total;
document.getElementById("totalItems").textContent = totalItems;

//Menu page
//Add items to cart
function addToCart(item){
if (item == 'salad'){
    total += 14.99;
    totalItems ++;
    saladCount ++;
    basketItems.push({name:'Superfood salad', price: 14.99});
    document.getElementById("salad-box").textContent = saladCount;
    
}
else if(item == 'famfeast'){
    total += 25.99;
    totalItems++
    feastCount ++;
    basketItems.push({name: 'Family Feast', price: 25.99});
    document.getElementById("feast-box").textContent = feastCount;

}
else if(item == 'poke'){
    total += 12.99;
    totalItems++;
    pokeCount ++;
    basketItems.push({name: 'Poke Bowl', price: 12.99});   
    document.getElementById("poke-box").textContent = pokeCount;
   
}
else if(item == 'roast'){
    total += 28.99;
    totalItems++;
    roastCount++;
    basketItems.push({name: 'Vegetable Roast', price: 28.99});
    document.getElementById("roast-box").textContent = roastCount;
    
}
else if(item == 'medmix'){
    total += 14.99;
    totalItems++;
    medMixCount ++;
    basketItems.push({name: 'Meditteranean Mix Bowl', price: 14.99});
    document.getElementById("medMix-box").textContent = medMixCount;
}
else if(item == 'burger'){
    total += 16.99;
    totalItems++;
    burgerCount ++;
    basketItems.push({name: 'Meat free burger', price: 16.99});
    document.getElementById("burger-box").textContent = burgerCount;
}
else if(item == 'curry'){
    total += 13.99;
    totalItems++;
    curryCount++;
    basketItems.push({name: 'Veggie Curry', price: 13.99});
    document.getElementById("curry-box").textContent = curryCount;
}
else if(item == 'lasagna'){
    total += 15.99;
    totalItems++;
    lasagnaCount ++;
    basketItems.push({name: 'Veggie Lasagna', price: 15.99});
    document.getElementById("lasagna-box").textContent = lasagnaCount;
}
else if(item == 'pizza'){
    total += 11.99;
    totalItems++;
    pizzaCount ++;
    basketItems.push({name: 'Vegetable Pizza', price: 11.99});
    document.getElementById("pizza-box").textContent = pizzaCount;
}
else{
    total += 16.99
    totalItems++;
    quicheCount ++
    basketItems.push({name:'Veggie stuffed quiche', price: 16.99});
    document.getElementById("quiche-box").textContent = quicheCount;
}
flashOn();
document.getElementById("total").textContent = Math.trunc(total*100)/100;
localStorage.setItem("total", Math.trunc(total*100)/100);
document.getElementById("totalItems").textContent = totalItems;
}
//
//Remove items from cart

function remove(item){
    if (item == 'salad'){
        total -= 14.99;
        totalItems --;
        saladCount --;
        document.getElementById("salad-box").textContent = saladCount;
        let removeThis = basketItems.find(o => o.name === 'Superfood salad');
        let itemIndex = basketItems.indexOf(removeThis);
        basketItems.splice(itemIndex, 1);
    }
    else if(item == 'famfeast'){
        total -= 25.99;
        totalItems--;
        feastCount --;
        document.getElementById("feast-box").textContent = feastCount;
        let removeThis = basketItems.find(o => o.name === 'Family Feast');
        let itemIndex = basketItems.indexOf(removeThis);
        basketItems.splice(itemIndex, 1);
    
    }
    else if(item == 'poke'){
        total -= 12.99;
        totalItems--;
        pokeCount --;
        document.getElementById("poke-box").textContent = pokeCount;
        let removeThis = basketItems.find(o => o.name === 'Poke Bowl');
        let itemIndex = basketItems.indexOf(removeThis);
        basketItems.splice(itemIndex, 1);
       
    }
    else if(item == 'roast'){
        total -= 28.99;
        totalItems--;
        roastCount--;
        document.getElementById("roast-box").textContent = roastCount;
        let removeThis = basketItems.find(o => o.name === 'Vegetable Roast');
        let itemIndex = basketItems.indexOf(removeThis);
        basketItems.splice(itemIndex, 1);
        
    }
    else if(item == 'medmix'){
        total -= 14.99;
        totalItems--;
        medMixCount --;
        document.getElementById("medMix-box").textContent = medMixCount;
        let removeThis = basketItems.find(o => o.name === 'Meditteranean Mix Bowl');
        let itemIndex = basketItems.indexOf(removeThis);
        basketItems.splice(itemIndex, 1);
    }
    else if(item == 'burger'){
        total -= 16.99;
        totalItems--;
        burgerCount --;
        document.getElementById("burger-box").textContent = burgerCount;
        let removeThis = basketItems.find(o => o.name === 'Meat free burger');
        let itemIndex = basketItems.indexOf(removeThis);
        basketItems.splice(itemIndex, 1);
    }
    else if(item == 'curry'){
        total -= 13.99;
        totalItems--;
        curryCount--;
        document.getElementById("curry-box").textContent = curryCount;
        let removeThis = basketItems.find(o => o.name === 'Veggie Curry');
        let itemIndex = basketItems.indexOf(removeThis);
        basketItems.splice(itemIndex, 1);
    }
    else if(item == 'lasagna'){
        total -= 15.99;
        totalItems--;
        lasagnaCount --;
        document.getElementById("lasagna-box").textContent = lasagnaCount;
        let removeThis = basketItems.find(o => o.name === 'Veggie Lasagna');
        let itemIndex = basketItems.indexOf(removeThis);
        basketItems.splice(itemIndex, 1);
    }
    else if(item == 'pizza'){
        total -= 11.99;
        totalItems--;
        pizzaCount --;
        document.getElementById("pizza-box").textContent = pizzaCount;
        let removeThis = basketItems.find(o => o.name === 'Vegetable Pizza');
        let itemIndex = basketItems.indexOf(removeThis);
        basketItems.splice(itemIndex, 1);
    }
    else{
        total -= 16.99
        totalItems--;
        quicheCount --;
        document.getElementById("quiche-box").textContent = quicheCount;
        let removeThis = basketItems.find(o => o.name === 'Veggie stuffed quiche');
        let itemIndex = basketItems.indexOf(removeThis);
        basketItems.splice(itemIndex, 1);
    }
    flashOn();
    document.getElementById("total").textContent = Math.trunc(total*100)/100;
    localStorage.setItem("total", Math.trunc(total*100)/100);
    document.getElementById("totalItems").textContent = totalItems;
    
    }

//

//Flash function

function flashOn(){
    let changeColor = document.getElementById("basketBar").classList;
    changeColor.add("flashOn");
    setTimeout(flashOff,300);
}
      
function flashOff(){
    let changeColor = document.getElementById("basketBar").classList;
    changeColor.remove("flashOn");
}

//End of menu page



//Start of reviews page
function intervalStart(){
    setInterval(reviews, 8000);
}

function reviews(){
const showReview = Math.floor(Math.random()*6)
console.log(showReview);

    if(showReview == 1){
    review1();
    }
    else if(showReview == 2){
    review2();
    }
    else if(showReview == 3){
    review3();
    }
    else if(showReview == 4){
    review4();
    }
    else{
    review5(); 
    }
}



function review1(){
document.getElementById("reviewText").innerHTML = '<img src="./images/pizza.jpg" class="review-images" alt="pizza image" /><h2 class="green">Amazing food!</h2><h3>We ordered a veggie pizza and veggie burger meal, so tasty and great value!</h3><h2 class="green">~Jane</h2>';
}

function review2(){
document.getElementById("reviewText").innerHTML = '<img src="./images/vegcurry.jpg" class="review-images" alt="curry image" /><h2 class="green">Blown away!!!</h2><h3>First time trying a strictly vegetarian restaurant, was not disappointed!</h3><h2 class="green">~Charles</h2>';
}

function review3(){
document.getElementById("reviewText").innerHTML = '<img src="./images/vegburger.jpg" class="review-images" alt="poke bowl image" /><h2 class="green">So tasty</h2><h3>I\'m such a fan of CFG, they have the best veggie burgers in town</h3><h2 class="green">~Lily</h2>';
}

function review4(){
document.getElementById("reviewText").innerHTML = '<img src="./images/lasagna.jpg" class="review-images" alt="lasagna image" /><h2 class="green">No meat?!</h2><h3>I can\'t believe the lasagna has no meat in it, it was incredible!</h3><h2 class="green">~Josie</h2>';
}

function review5(){
document.getElementById("reviewText").innerHTML = '<img src="./images/quiche.jpg" class="review-images" alt="quiche image" /><h2 class="green">Everything is great</h2><h3>I think I\'ve tried everything from CFG and it has all been great, customer for life!</h3><h2 class="green">~Nick</h2>';
}

//End of reviews page

//Start of support page

function thanks(){
    document.getElementById("contact-form").innerHTML = '<img class="customer-service" src="./images/customerservice.png" alt="customer service image"/><h2>Thank you for your message we will be in touch as soon as we can<br>If your enquiry is urgent please call us on <span class="green">01234 567 8910</span></h2>'
}

//End of support page

//Start of basket page

function goToBasket(){
    localStorage.setItem("basketItems", JSON.stringify(basketItems));
}


function moveBasketAcross(){
let total = localStorage.getItem("total");

document.getElementById("subtotal").textContent = total;
if (total <50){
let cartTotal = Number(total);
let delivery = 3.99;
let calculateTotal = cartTotal+delivery;
finalTotal = Math.trunc(calculateTotal*100)/100;
document.getElementById("delivery").textContent = delivery;
document.getElementById("final-total").textContent = finalTotal;
listBasketItems();
listBasketPrices()
}
else{
let cartTotal = Number(total);
let delivery = 0;
let calculateTotal = cartTotal + delivery;
finalTotal = Math.trunc(calculateTotal*100)/100;
document.getElementById("delivery").textContent = delivery;
document.getElementById("final-total").textContent = finalTotal;
listBasketItems();
listBasketPrices()
document.getElementById("fruit-platter").textContent = "*Plus FREE fruit platter";
}

}


function listBasketItems(){
    let basketContentItems = document.getElementById("basket-content");
    cartItems = JSON.parse(localStorage.getItem("basketItems")) || [];
    for (let i=0; i<cartItems.length; i++) {
        const newElement = document.createElement("li");
        newElement.textContent = cartItems[i].name;
        basketContentItems.appendChild(newElement);
    }
  }

  function listBasketPrices(){
    let basketContentPrices = document.getElementById("basket-prices");
    cartItems = JSON.parse(localStorage.getItem("basketItems")) || [];
    for (let i=0; i<cartItems.length; i++) {
        const newElement = document.createElement("li");
        newElement.textContent = cartItems[i].price;
        basketContentPrices.appendChild(newElement);
    }
  }


