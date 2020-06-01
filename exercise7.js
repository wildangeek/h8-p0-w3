function hitungJumlahKata(kalimat){
  var jumlah = kalimat.split(' ')
  var array = jumlah.length
  return array
}

console.log(hitungJumlahKata('Wildan Lulus Stanford University 2020'))
console.log(hitungJumlahKata('I have a dream')); 
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); 
console.log(hitungJumlahKata('A song to sing'));
console.log(hitungJumlahKata('I'));
console.log(hitungJumlahKata('I believe I can code'));
