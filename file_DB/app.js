//Top of page searchbar for products, expecting a return from server with any possible matches off name
function search_products(){
    //Grab our input in the top field
    let input = document.getElementById('searchbar').value
    //verify the string is correct
    output = String(input);
    // wanting to create server side authentication for our app
    window.alert(output);
}

function contactUs(){
    //Variables to grab data from fields in the bottom sections fields for the contact us
    let firstField = document.getElementById('exampleInputEmail1').value
    let secondField = document.getElementById('exampleMessage').value
    
    // Concatonated field for our contact us, expecting this to end up server side as a request
    formedField = "Email: " + String(firstField) + " \nMessage: " + String(secondField);
    // wanting to create server side confirmation on valid emial and message length
    window.alert(formedField);
}

//remove the cart item associated with the ui element 'x'
function remove(){
    //Grabbing parent of where 'x' is located and removes from the domm
    let cartItem = document.getElementById("itemElement");
    cartItem.remove();
}

//increment the cart item associated with ui element '+'
function incrementItem(){
    //check our current count
    let addOne = document.querySelector('#productCount').value;
    //original price as INT
    const originalPrice = parseInt(document.querySelector('#total-price').textContent, 10);

    addOne++;
    //copy of price
    let newPrice = 0;
    newPrice = addOne * originalPrice;
    console.log(newPrice.toString());
    
    // Setting our product count to the new amount for the next click
    document.querySelector('#productCount').value = addOne;

    let changeValue = document.getElementById("total-price").innerHTML;
    document.getElementById("total-price").innerHTML = changeValue.replace("17.99", newPrice.toString());
    //document.querySelector('#total-price').textContent.replace(document.querySelector('#total-price').textContent, toString(newPrice))
    // fixed messed up increment
    console.log(addOne);
}

function augmentItem(){
    let removeOne = document.querySelector('#productCount').value;
    if (removeOne > 1){
    removeOne--; 
    document.querySelector('#productCount').value = removeOne;}
    //endPrice = parseInt(document.querySelector('#total-price')) * (document.querySelector('#productCount').value);
    //document.querySelector('#total-price').value = endPrice;
}

function termsandConditions()
{
    window.alert("We don't have any!!!");
}

function authenticateUser() {
    var email = document.querySelector("input[name='email']").value;
    var password = document.querySelector("input[name='password']").value;
    let hashedValue = email + password;
    clnValue = hashedValue.replace(/[^a-zA-Z]/g, '');
    //parseInt(clnValue);
    console.log(parseInt(clnValue));
}

function addUser() {
    var email = document.querySelector("input[name='email']").value;
    var password = document.querySelector("input[name='pinput']").value;
    let hashedValue = email + password;
    clnValue = hashedValue.replace(/[^a-zA-Z]/g, '');
    //parseInt(clnValue);
    console.log(parseInt(clnValue));
    //var sql = connection.
}