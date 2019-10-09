var nomor = [1,2,3,4,5,6,7,8,9,11];

var genap = [];
var ganjil = [];
var i = 0;

for (i;i <nomor.length; i++ ){
  if (nomor[i] %2 ==0){
    ganjil.push(nomor[i]);

  }
}

console.log(ganjil);
console.log(genap);