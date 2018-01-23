function idCard(){
    //Declared variables
    //Pulled data from form to store in variables
    var firstName = document.getElementById("firstName").innerHTML;
    var lastName = document.getElementById("lastName").innerHTML;
    var address = document.getElementById("address").innerHTML;
    
    var age = parseInt(document.getElementById("age")).value
    var phoneNumber = parseInt(document.getElementById("phoneNumber")).value;

    var numberArray = [];
    age.push(numberArray);
    phone.push(numberArray);

    for (i=0; i<=numberArray; i++){
        if (i<100){
           document.getElementById("age").innerHTML + age;
        } else {
            if (i>=100){
                
            }
        }
    }




}