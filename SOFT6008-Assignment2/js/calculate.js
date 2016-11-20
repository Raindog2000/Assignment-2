//var sizeCost = 0;

var topCost = 0;
  var cheeseTop = 0;
  var onionTop = 0;
  var hamTop = 0;
  var chickenTop = 0;
  var mushroomTop = 0;

// function setSize(elSize){var size = document.getElementById(elSize).value;//function to set mug value based on element selected
//   switch(size){
//     case "Small":
//       sizeCost = 9.99;
//     break;
//     case "Medium":
//       sizeCost = 12.99;
//     break;
//     case "Large":
//       sizeCost = 14.99;
//     break;
//     case "Exlge":
//       sizeCost = 15.99;
//     break;
//   }
//   totalPrice();//update total price with mug cost
// }

// var elSmall = document.getElementById('sSize');//event listeners for mug size
// elSmall.addEventListener('change', function() {setSize(this.id); }, false)

// var elMed = document.getElementById('mSize');
// elMed.addEventListener('change', function() {setSize(this.id); }, false)

// var elLge = document.getElementById('lSize');
// elLge.addEventListener('change', function() {setSize(this.id); }, false)

// var elXl = document.getElementById('xlSize');
// elXl.addEventListener('change', function() {setSize(this.id); }, false)

function addTop(topElem){//function to set upgrade values based on elements selected
  if(topElem.id == "cheese"){
   if (topElem.checked) {
        cheeseTop = 0.50;
        document.getElementById('cheeseHidden').disabled = true;
        document.getElementById('cheesetopping').style.visibility='visible'
      } else {
        cheeseTop = 0.00;
        document.getElementById('cheeseHidden').disabled = false;
        document.getElementById('cheesetopping').style.visibility='hidden'
      }
  } else if(topElem.id == "onions"){
   if (topElem.checked) {
        onionTop = 0.50;
        document.getElementById('onionsHidden').disabled = true;
        document.getElementById('oniontopping').style.visibility='visible'
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
  topCost = cheeseTop + onionTop + hamTop + chickenTop + mushroomTop;//total upgrades cost
  alert(topCost);// totalPrice();//update total price with upgrades cost
}

var elCheese = document.getElementById('cheese');//event listeners for upgrades
elCheese.addEventListener('change', function() {addTop(this ); }, false)

var elOnion = document.getElementById('onions');
elOnion.addEventListener('change', function() {addTop(this ); }, false)

var elHam = document.getElementById('ham');
elHam.addEventListener('change', function() {addTop(this ); }, false)

var elChicken = document.getElementById('chicken');
elChicken.addEventListener('change', function() {addTop(this ); }, false)

var elMushroom = document.getElementById('shrooms');
elMushroom.addEventListener('change', function() {addTop(this ); }, false)


// function setAdd(addElem){//function to set add-on values based on elements selected
//   if(addElem.id == "hotAdd"){
//    if (addElem.checked) {
//         hot = 15.00;
//         document.getElementById('hotHidden').disabled = true;
//       } else {
//         hot = 0.00;
//         document.getElementById('hotHidden').disabled = false;
//       }
//   } else if(addElem.id == "lidAdd"){
//    if (addElem.checked) {
//         lid = 3.00;
//         document.getElementById('lidHidden').disabled = true;
//       } else {
//         lid = 0.00;
//         document.getElementById('lidHidden').disabled = false;
//       }
//   } else if(addElem.id == "cordAdd"){
//    if (addElem.checked) {
//         cord = 6.00;
//         document.getElementById('cordHidden').disabled = true;
//       } else {
//         cord = 0.00;
//         document.getElementById('cordHidden').disabled = false;
//       }
//   } 
//   addCost = hot + lid + cord;//total add-ons cost
//   totalPrice();//update total price with add-ons cost
// }

// var elHot = document.getElementById('hotAdd');//event listeners for add-ons
// elHot.addEventListener('change', function() {setAdd(this ); }, false)

// var elLid = document.getElementById('lidAdd');
// elLid.addEventListener('change', function() {setAdd(this ); }, false)

// var elCord = document.getElementById('cordAdd');
// elCord.addEventListener('change', function() {setAdd(this ); }, false)

// function setOpt(optElem){//function to set options values based on elements selected
//   if(optElem.id == "coffOpts"){
//    if (optElem.checked) {
//         coff = 15.00;
//         document.getElementById('coffHidden').disabled = true;
//       } else {
//         coff = 0.00;
//         document.getElementById('coffHidden').disabled = false;
//       }
//   } else if(optElem.id == "milkOpts"){
//    if (optElem.checked) {
//         milk = 3.00;
//         document.getElementById('milkHidden').disabled = true;
//       } else {
//         milk = 0.00;
//         document.getElementById('milkHidden').disabled = false;
//       }
//   } else if(optElem.id == "teaOpts"){
//    if (optElem.checked) {
//         tea = 6.00;
//         document.getElementById('teaHidden').disabled = true;
//       } else {
//         tea = 0.00;
//         document.getElementById('teaHidden').disabled = false;
//       }
//   } 
//   optCost = coff +  milk + tea;//total options cost
//   totalPrice();//update total price with options cost
// }

// var elCoff = document.getElementById('coffOpts');//event listeners for options
// elCoff.addEventListener('change', function() {setOpt(this ); }, false)

// var elMilk = document.getElementById('milkOpts'); 
// elMilk.addEventListener('change', function() {setOpt(this ); }, false)

// var elTea = document.getElementById('teaOpts'); 
// elTea.addEventListener('change', function() {setOpt(this ); }, false)

// function totalPrice(){//function to calculate total cost and to populate read only text field
//   var elTotal = document.getElementById('getCost');
//   totalCost = sizeCost + upCost + addCost + optCost;
//   elTotal.value = totalCost.toFixed(2);//fixing to 2 decimal places
// }
