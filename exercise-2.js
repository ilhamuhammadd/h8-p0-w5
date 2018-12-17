// Logic Challenge - Naik Angkot
// Problem

// Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

// Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

// Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
// Code

function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  result = []
  for (var i = 0; i < arrPenumpang.length; i++) {
    // console.log(arrPenumpang[i])
    obj = {}
    tempfirst = 0
    templast = 0

    obj.penumpang = arrPenumpang[i][0]
    obj.naikDari = arrPenumpang[i][1]
    obj.tujuan = arrPenumpang[i][2]
    for (var k = 0; k < rute.length; k++) {
      // console.log(rute[k])
      if (obj.naikDari === rute[k]) {
        // console.log('hello')
        tempfirst = k
      } else if (obj.tujuan === rute[k]) {
        templast = k
      }
    }
    obj.bayar = (templast - tempfirst) * 2000
    // console.log(tempfirst)
    // console.log(templast)
    // console.log(temp)


    result.push(obj)
  }

  return result
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

// console.log(naikAngkot([])); //[]