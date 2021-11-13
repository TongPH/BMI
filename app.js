var B = 0 
var A = 0
function GetTall(tall)
{
    var value = (tall/100)*(tall/100)
    return A = value , calculate()
}
function GetWeight(weight)
{
    var value = parseInt(weight)
    return B =  value , calculate()
}
function calculate()
{
    if (A !=0 ,B != 0)
    {
       var BMI = B/A
       document.getElementById("result").innerHTML =  BMI.toFixed(2) 
    if (BMI >= 30 ){
	  document.getElementById("result2").innerHTML="รูปร่าง = " + "อ้วนมาก"
  }
  else if (BMI >= 25.0){
	  document.getElementById("result2").innerHTML="รูปร่าง = " +"อ้วน"
  }
  else if (BMI >= 23.0){
	  document.getElementById("result2").innerHTML="รูปร่าง = " + "ท้วม"
  }
  else if (BMI >= 18.5){
	  document.getElementById("result2").innerHTML="รูปร่าง = " +"ปกติ"
  }
  else{
	  document.getElementById("result2").innerHTML="รูปร่าง = " +"น้ำหนักน้อย"
  }
    }
}
