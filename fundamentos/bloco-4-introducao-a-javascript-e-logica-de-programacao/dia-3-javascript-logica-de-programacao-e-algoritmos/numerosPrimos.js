/*const num =8;

    for (let i = 2; i < num; i++){
        if (num % i === 0){
            console.log("não é primo");
        }else{
            console.log("é primo");
        }
    }
     */

    //function que mostra numeros primos
    function primeNumbers(num) {
        let numbers = new Array();
        for (var i = 0; i <= num; i++) {
          if (isPrime(i)){
            numbers.push(i);
          }
        }
        return numbers;
      }
      function isPrime(num) {
        for(let i = 2; i <num; i++)
          if(num % i === 0) {
              return false
          };
        return num > 1;
      }
      console.log(primeNumbers(13));
    