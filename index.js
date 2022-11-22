/* Correct greeting based on the distance the passenger desires to travel. */
function scuberGreetingForFeet(ride){
  if (ride <= 400){
    return 'This one is on me!'
  }else if(ride > 2000 && ride >2500){
    return 'No can do.'
}else{
  return 'I will gladly take your thirty bucks.';
}
}
/* Return the correct response based on the desired destination of the passenger. */
function ternaryCheckCity(city){
  
    return city === 'NYC'? "Ok, sounds good." : "No go."
}
/* Return a response based on the generosity of the passenger's tip. */
function switchOnCharmFromTip(tip){
  
   switch(tip){
    case 'generous':
      return 'Thank you so much.'
      break;
    case 'not as generous':
      return 'Thank you.'
      break;
    default:
      return 'Bye.'
      break;
  }
}
