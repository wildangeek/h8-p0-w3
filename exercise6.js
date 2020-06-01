function angkaPalindrome(angka){
  var string =''
  var palindrome = false
  if(angka <9){
    return angka+1
  }else{
    while(palindrome === false){
      var ini = String(angka)
      ini = ini.split('')
      var inireverse = ini.slice().reverse().join('')
      if(inireverse == ini.join('')){
        palindrome = true
      }else{
        angka++;
        palindrome = false
      }
    }
  }
  return angka
}

console.log(angkaPalindrome(8)); 
console.log(angkaPalindrome(10)); 
console.log(angkaPalindrome(117)); 
console.log(angkaPalindrome(175)); 
console.log(angkaPalindrome(1000));
