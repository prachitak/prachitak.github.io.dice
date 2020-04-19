function generateResult()
{
  var randomNumber1 = Math.ceil(Math.random() * 6);
  document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
  var randomNumber2 = Math.ceil(Math.random() * 6);
  document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

  var result;

  if(randomNumber1 === randomNumber2)
    result = "Draw!";
  else if (randomNumber1 > randomNumber2)
    result = "🚩Pratik wins!";
  else
    result = "🚩Prachi wins!";

  document.querySelector("h1").innerHTML = result;
}

document.querySelector("#play").addEventListener("click",generateResult);
