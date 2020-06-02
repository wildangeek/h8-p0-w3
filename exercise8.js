/*Problem: Diberikan sebuah function pasanganTerbesar(angka) yang menerima 1 parameter berupa angka. Functiona akan menentukan pasangan dua digit angka mana yang paling besar dan me-return angka tersebut. Contoh, jika angka adalah 183928, maka function akan me-return 92, pasangan dua digit angka yang paling besar diantara yang lainnya*/

function pasanganTerbesar(num){
  var besar =0
  var jadistr = String(num)
  
  for(var i =0; i<jadistr.length-1;i++){
    var jadi =jadistr[i] + jadistr[i+1]
    if(jadi > besar){
      besar = jadi
    }
  }
  return Number(besar);
}
console.log(pasanganTerbesar(641573)); 
console.log(pasanganTerbesar(12783456)); 
console.log(pasanganTerbesar(910233));
console.log(pasanganTerbesar(71856421));
console.log(pasanganTerbesar(79918293));
