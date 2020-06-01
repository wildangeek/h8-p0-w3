function balikString(string){
  var str=''
  for (var i=string.length-1; i>=0;i--){
    str+= string[i]
  }
  return str
}
console.log(balikString('hello world!'));
