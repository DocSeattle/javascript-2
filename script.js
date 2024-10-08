const addToCart = document.getElementsByClassName("cta-add")[0];
const removeFromCart = document.getElementsByClassName("cta-select")[0];
const badge = document.getElementById("badge");

badge.setAttribute("value", 0);
removeFromCart.innerHTML = "Remove from cart";

function removeProduct()
{
    if (badge.getAttribute("value") == 0){return;}
    let newValue = Number(badge.getAttribute("value")) - 1;
    badge.setAttribute("value", newValue);
    
    return;
}

function addProduct()
{ 
    let newValue = Number(badge.getAttribute("value")) + 1;
    badge.setAttribute("value", newValue);
    return;
}

