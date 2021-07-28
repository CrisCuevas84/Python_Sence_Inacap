/* Fundamentos Básicos II     */

/* 1 - Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, por el string “big”. Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5]. */
function tamañoGrande(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = "big";
        }
    }
    return arr;
}

console.log(tamañoGrande([-1,3,5,-5]));


/* 2 - Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números. La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor.  */
function menorMayor(arr){
    var menor = arr[0];
    var mayor = arr[0];
    for(var i = 0; i < arr.length; i++){
        if (menor > arr[i]){
            menor = arr[i];
        }
        else if (mayor < arr[i]){
            mayor = arr[i];
        }
    }
    console.log(menor);
    return mayor;
}
console.log(menorMayor([-1,3,5,-5]));


/* 3 - Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números. La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar. */
function penultimoEImpar(arr){
    console.log(arr[arr.length - 2]);
    var impar = []
    for (var i = 0; i < arr.length; i++){
        if (arr[i] % 2 !== 0){
            impar = arr[i]
            return impar
        }
    }
    return impar
}
console.log(penultimoEImpar([6,8,9,-3,3,5,8,7]));



/* 4 - Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique. Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original.  */
function dobleVision(arr){
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        newArr.push(arr[i] * 2);
    }
    return newArr;
}

console.log(dobleVision([1,2,3]));



/* 5 - Contar Positivos -  Dado un array de números, crea una función para reemplazar el último valor con el número de valores positivos encontrados en el array. Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3]. */
function contarPositivos(arr){
    var contar = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            contar++ ;        }
    }
    arr[arr.length - 1] = contar;
    return arr;
}
console.log(contarPositivos([-1,1,1,1,-5,8]));



/* 6 - Pares e Impares - Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares seguidos, imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”. */
function paresEImpares(arr){
    for (var i = 0; i < arr.length - 2; i++) {
        if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0 && arr[i + 2] % 2 !== 0) {
            if (i + 1 < arr.length && i + 2 < arr.length) {
                console.log("Qué imparcial!");
            }
        }
        else if (arr[i] % 2 === 0 && arr[i + 1] % 2 === 0 && arr[i + 2] % 2 === 0) {
            console.log("Es para bien!");
        }
    }
}
paresEImpares([0, 1, 1, 1, 2, 2, 2, 3, 3, 3]);


/* 7 - Incrementa los Segundos - Dado un array de números llamado arr, suma 1 a los elementos, específicamente a aquellos cuyo índice es impar (arr[1], arr[3], arr[5], etc). Luego, imprime (console.log) cada valor del array y devuelve el arreglo arr.  */
function incrementaLosSegundos(arr){
    for(var i = 0; i < arr.length; i++){
        if  (i % 2 !== 0){
            arr[i]++;
        }
        console.log(arr[i]);
    }
    return arr;
}

console.log(incrementaLosSegundos([1,2,3,4,5,6,7,8,9,10]));

/* 8 - Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) que contiene strings, reemplaza cada string con un número de acuerdo cantidad de letras (longitud) del string anterior. Por ejemplo, longitudesPrevias([“programar”,“dojo”, “genial”]) debería devolver [“programar”,9, 4]. Pista: ¿For loops solo puede ir hacia adelante? */

function longitudesPrevias(arr){
    for (var i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1].length;
    }
    return arr
}

console.log(longitudesPrevias(["programar", "dojo", "genial"]));



/* 9 - Agrega Siete - Construye una función que acepte un array. Devuelve un nuevo array con todos los valores del original, pero sumando 7 a cada uno. No alteres el array original. Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array.  */

function agregaSiete(arr){
    var newArr=[];
    for( var i = 0; i < arr.length; i++){
        newArr.push(arr[i] + 7);
    }
    console.log(newArr);
    return newArr;
}

agregaSiete([1,2,3])


/* 10 - Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar. Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3]. Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores). */

function arrayInverso(arr){
    for(var i = 0; i < arr.length / 2 ; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length - 1- i];
        arr[arr.length - 1 - i] = temp;
    }
    console.log(arr);
    return arr;
}
arrayInverso([1,2,3,4,5,6]);



/* 11 - Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original, pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5]. */

function perspectivaNegativa(arr){
    for(var i = 0; i < arr.length ; i++){
        if(arr[i] > 0){
            arr[i] = arr[i] * -1;
        }
    }

    return arr;
}
console.log(perspectivaNegativa([1,-3,5]));

/* 12 - Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy” cada vez que alguno de los valores sea “comida”. Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez.  */

function siempreHambriento(arr){
    var contador = 0;
    for(var i  =0; i < arr.length; i++){
        if(arr[i] === "comida"){
            console.log("yummy");
            contador++;
        }
    }
    if(contador === 0){
        console.log("Tengo hambre");
    }
}
siempreHambriento([1,9,6,"comida",8,9,"comida"]);
siempreHambriento([9,8,5,6,3,8,9]);

/* 13 - Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, el tercero con el ante penútimo, etc. Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a [“pizza¨, 42, “Ada”, 2, true]. cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1]. No es necesario devolver (return) el array esta vez.  */

function cambiarCentro(arr){
    for(var i =0; i < arr.length / 2 ; i++){
        if( i % 2 === 0){
        var temp = arr[i];
        arr[i] = arr[arr.length - 1- i];
        arr[arr.length - 1 - i] = temp;
    }
}
    console.log(arr);
    return arr;
}
cambiarCentro([1,2,3,4,5,6]);
cambiarCentro([true,42,"Ada",2,"pizza"]);

/* 14 - Escala el Array - Dado un array arr y un número num, multiplica todos los valores en el array arr por el número num, y devuelve el array arr modificado. Por ejemplo, escalaArray([1,2,3], 3] debería devolver [3,6,9]. */

function escalaArray(arr,num){
    for( var i = 0; i < arr.length; i++){
        arr[i] *= num;
    }
    console.log(arr);
    return arr;
}
escalaArray([1,2,3], 3);
escalaArray([1,2,3], 5);