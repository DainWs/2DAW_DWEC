{ 
   function factorial(num) {
      result = 1;
      if (num > 1) result = num * factorial(num - 1);
      return result;
   }

  console.log(factorial(5));
}