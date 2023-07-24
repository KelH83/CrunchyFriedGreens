let year = document.getElementsByClassName("year")

for(let i =0; i <year.length; i++) {
const date = new Date();
year[i].textContent = date.getFullYear();
}



let total = 0.0;
let totalItems = 0
let basketItems = [];
document.getElementById("total").textContent = total;
document.getElementById("totalItems").textContent = totalItems;


function addToCart(item){
if (item == 'salad'){
    total += 14.99;
    totalItems ++;
    basketItems.push({name: 'Superfood Salad', price: 14.99});
    document.getElementById("salad-button").textContent = "Added";
    document.getElementById("salad-button").style.backgroundColor = "#fff";
    document.getElementById("salad-button").style.color = "#00bf63";

}
else if(item == 'famfeast'){
    total += 25.99;
    totalItems++
    basketItems.push({name: 'Family Feast', price: 25.99});
    document.getElementById("feast-button").textContent = "Added";
    document.getElementById("feast-button").style.backgroundColor = "#fff";
    document.getElementById("feast-button").style.color = "#00bf63";

}
else if(item == 'poke'){
    total += 12.99;
    totalItems++
    basketItems.push({name: 'Poke Bowl', price: 12.99});
    document.getElementById("poke-button").textContent = "Added";
    document.getElementById("poke-button").style.backgroundColor = "#fff";
    document.getElementById("poke-button").style.color = "#00bf63";
}
else if(item == 'roast'){
    total += 28.99;
    totalItems++
    basketItems.push({name: 'Vegetable Roast', price: 28.99});
    document.getElementById("roast-button").textContent = "Added";
    document.getElementById("roast-button").style.backgroundColor = "#fff";
    document.getElementById("roast-button").style.color = "#00bf63";
}
else if(item == 'medmix'){
    total += 14.99;
    totalItems++
    basketItems.push({name: 'Meditteranean Mix Bowl', price: 14.99});
    document.getElementById("medmix-button").textContent = "Added";
    document.getElementById("medmix-button").style.backgroundColor = "#fff";
    document.getElementById("medmix-button").style.color = "#00bf63";
}
else if(item == 'burger'){
    total += 16.99;
    totalItems++
    basketItems.push({name: 'Meat free burger', price: 16.99});
    document.getElementById("burger-button").textContent = "Added";
    document.getElementById("burger-button").style.backgroundColor = "#fff";
    document.getElementById("burger-button").style.color = "#00bf63";
}
else if(item == 'curry'){
    total += 13.99;
    totalItems++
    basketItems.push({name: 'Veggie Curry', price: 13.99});
    document.getElementById("curry-button").textContent = "Added";
    document.getElementById("curry-button").style.backgroundColor = "#fff";
    document.getElementById("curry-button").style.color = "#00bf63";
}
else if(item == 'lasagna'){
    total += 15.99;
    totalItems++
    basketItems.push({name: 'Veggie Lasagna', price: 15.99});
    document.getElementById("lasagna-button").textContent = "Added";
    document.getElementById("lasagna-button").style.backgroundColor = "#fff";
    document.getElementById("lasagna-button").style.color = "#00bf63";
}
else if(item == 'pizza'){
    total += 11.99;
    totalItems++
    basketItems.push({name: 'Vegetable Pizza', price: 11.99});
    document.getElementById("pizza-button").textContent = "Added";
    document.getElementById("pizza-button").style.backgroundColor = "#fff";
    document.getElementById("pizza-button").style.color = "#00bf63";
}
else{
    total += 16.99
    totalItems++
    basketItems.push({name:'Veggie stuffed quiche', price: 16.99});
    document.getElementById("quiche-button").textContent = "Added";
    document.getElementById("quiche-button").style.backgroundColor = "#fff";
    document.getElementById("quiche-button").style.color = "#00bf63";
}

document.getElementById("total").textContent = Math.trunc(total*100)/100;
localStorage.setItem("total", Math.trunc(total*100)/100);
document.getElementById("totalItems").textContent = totalItems;
localStorage.setItem("numberOfItems", totalItems);
}


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

function thanks(){
    document.getElementById("contact-form").innerHTML = '<img class="customer-service" src="./images/customerservice.png" alt="customer service image"/><h2>Thank you for your message we will be in touch as soon as we can<br>If your enquiry is urgent please call us on <span class="green">01234 567 8910</span></h2>'
}


