var sizeCost = 0;
var discount = 1;


var topCost = 0;
  var cheeseTop = 0;
  var onionTop = 0;
  var hamTop = 0;
  var chickenTop = 0;
  var mushroomTop = 0;

function setSize(elSize){var size = document.getElementById(elSize).value;//function to set pizza value based on element selected
  switch(size){
    case "Small":
      sizeCost = 7.99;
      document.getElementById('mainimage').style.width='80%'
    break;
    case "Medium":
      sizeCost = 9.99;
      document.getElementById('mainimage').style.width='90%'
    break;
    case "Large":
      sizeCost = 12.99;
      document.getElementById('mainimage').style.width='100%'
    break;
    }
  totalPrice();//update total price with pizza cost once size is selected
}

var elSmall = document.getElementById('sSize');//event listeners for pizza size
elSmall.addEventListener('change', function() {setSize(this.id); }, false)

var elMed = document.getElementById('mSize');
elMed.addEventListener('change', function() {setSize(this.id); }, false)

var elLge = document.getElementById('lSize');
elLge.addEventListener('change', function() {setSize(this.id); }, false)

function addTop(topElem){//function to set toppings values based on elements selected
  if(topElem.id == "cheese"){
   if (topElem.checked) {
        cheeseTop = 0.50;
        document.getElementById('cheeseHidden').disabled = true;//disables hidden values if checkbox selected 
        document.getElementById('cheesetopping').style.visibility='visible'//makes image visible if checkbox is selected
      } else {
        cheeseTop = 0.00;
        document.getElementById('cheeseHidden').disabled = false;
        document.getElementById('cheesetopping').style.visibility='hidden'
      }
  } else if(topElem.id == "onions"){
   if (topElem.checked) {
        onionTop = 0.50;
        document.getElementById('onionsHidden').disabled = true;
        document.getElementById('oniontopping').style.visibility='visible'//multiple versions of the same topping to give scattered effect
        document.getElementById('oniontopping2').style.visibility='visible'
        document.getElementById('oniontopping3').style.visibility='visible'
        document.getElementById('oniontopping4').style.visibility='visible'
      } else {
        onionTop = 0.00;
        document.getElementById('onionsHidden').disabled = false;
        document.getElementById('oniontopping').style.visibility='hidden'
        document.getElementById('oniontopping2').style.visibility='hidden'
        document.getElementById('oniontopping3').style.visibility='hidden'
        document.getElementById('oniontopping4').style.visibility='hidden'
      }
  } else if(topElem.id == "ham"){
   if (topElem.checked) {
        hamTop = 0.75;
        document.getElementById('hamHidden').disabled = true;
        document.getElementById('hamtopping').style.visibility='visible'
        document.getElementById('hamtopping2').style.visibility='visible'
        document.getElementById('hamtopping3').style.visibility='visible'
        document.getElementById('hamtopping4').style.visibility='visible'
      } else {
        hamTop = 0.00;
        document.getElementById('hamHidden').disabled = false;
        document.getElementById('hamtopping').style.visibility='hidden'
        document.getElementById('hamtopping2').style.visibility='hidden'
        document.getElementById('hamtopping3').style.visibility='hidden'
        document.getElementById('hamtopping4').style.visibility='hidden'
      }
  } else if(topElem.id == "chicken"){
   if (topElem.checked) {
        chickenTop = 0.75;
        document.getElementById('chickenHidden').disabled = true;
        document.getElementById('chickentopping').style.visibility='visible'
        document.getElementById('chickentopping2').style.visibility='visible'
        document.getElementById('chickentopping3').style.visibility='visible'
        document.getElementById('chickentopping4').style.visibility='visible'
      } else {
        chickenTop = 0.00;
        document.getElementById('chickenHidden').disabled = false;
        document.getElementById('chickentopping').style.visibility='hidden'
        document.getElementById('chickentopping2').style.visibility='hidden'
        document.getElementById('chickentopping3').style.visibility='hidden'
        document.getElementById('chickentopping4').style.visibility='hidden'
      }
  } else if(topElem.id == "shrooms"){
   if (topElem.checked) {
        mushroomTop = 0.50;
        document.getElementById('shroomsHidden').disabled = true;
        document.getElementById('mushroomtopping').style.visibility='visible'
        document.getElementById('mushroomtopping2').style.visibility='visible'
        document.getElementById('mushroomtopping3').style.visibility='visible'
        document.getElementById('mushroomtopping4').style.visibility='visible'
      } else {
        mushroomTop = 0.00;
        document.getElementById('shroomsHidden').disabled = false;
        document.getElementById('mushroomtopping').style.visibility='hidden'
        document.getElementById('mushroomtopping2').style.visibility='hidden'
        document.getElementById('mushroomtopping3').style.visibility='hidden'
        document.getElementById('mushroomtopping4').style.visibility='hidden'
      }
  }
  topCost = cheeseTop + onionTop + hamTop + chickenTop + mushroomTop;//total toppings cost
  totalPrice();//update total price with toppings cost
}

var elCheese = document.getElementById('cheese');//event listeners for toppings
elCheese.addEventListener('change', function() {addTop(this ); }, false)

var elOnion = document.getElementById('onions');
elOnion.addEventListener('change', function() {addTop(this ); }, false)

var elHam = document.getElementById('ham');
elHam.addEventListener('change', function() {addTop(this ); }, false)

var elChicken = document.getElementById('chicken');
elChicken.addEventListener('change', function() {addTop(this ); }, false)

var elMushroom = document.getElementById('shrooms');
elMushroom.addEventListener('change', function() {addTop(this ); }, false)

function totalPrice(){//function to calculate total cost and to populate read only text field
  var elTotal = document.getElementById('getCost');
  totalCost = (sizeCost + topCost)*discount;
  elTotal.value = totalCost.toFixed(2);//fixing to 2 decimal places
}
