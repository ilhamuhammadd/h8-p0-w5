// Logic Challenge: Melee Ranged Grouping

// Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

// Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

// Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

// Jika input adalah string kosong ('') maka return array kosong

// Submit Tugas Disini

function meleeRangedGrouping(str) {

    if (!str) {
        return []
    } else {
        var arr = str.split(',')
        // console.log(arr)
        result = []
        tempRanged = []
        tempMelee = []
        for (var i = 0; i < arr.length; i++) {
            // console.log(arr[i])
            // console.log(arr[i].slice([arr[i].length - 7]))
            if (arr[i].slice([arr[i].length - 7]) === '-Ranged') {
                // console.log(arr[i])
                tempRanged.push(arr[i].slice(0, [arr[i].length - 7]))
            } else if (arr[i].slice([arr[i].length - 6]) === '-Melee') {
                tempMelee.push(arr[i].slice(0, [arr[i].length - 6]))
            }
        }
        console.log(tempRanged)
        console.log(tempMelee)
        result.push(tempRanged, tempMelee)
        return result
        // return tempRanged
    }



}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
[ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
[ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []