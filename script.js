// 1.display number in text box
function displaynumber(num){
    result.value+=num
}
// cleartextbox
function clearbox(){
    result.value=""
}

// 3 evaluate expression

    // method-1
    function calculate() {
      exp = result.value;

      output = eval(exp);
      result.value = output;

      // // method-2
      // result.value=eval(result.value)
    }
// 4 Remove last item from text box  

function removelastitem(){
    result.value=result.value.slice(0,-1)
}