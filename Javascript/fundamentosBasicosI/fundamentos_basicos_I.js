1.
function hasta(){
	var suma = 0;
	for(var i = 0; i < 256; i++){     
        console.log(i);
        suma = suma + i;
        console.log(suma);
        }
return suma;
}
hasta();
console.log(hasta());


2.
function sumapar(){
	var sum = 0;
	for(var i = 0; i <= 1000; i++){
		if(i%2 == 0){
			sum = sum + i;
		}
	}
	return sum;
}
var x = sumapar();
console.log(x);


3.
function sumImpar(){
	var sum = 0;
	for(var i = 0; i <= 1000; i++){
		if(i%2 !== 0){
			sum = sum + i;
		}
	}
	return sum;
}
var x = sumaImpar();
console.log(x);
    


4.
function printSumArray(x) {
	var sum = 0;
	for (var i = 0; i < x.length; i++) {
	sum = sum + x[i];
	}
	return sum;
}       
console.log( printSumArray([1,2,3]) );  
        


5.
function mayorElem(x) {
	var mayorHastaAhora = x[0];
	for(var i = 0; i < x.length; i++){
		if(x[i] > mayorHastaAhora){
		mayorHastaAhora = x[i];
		}
	}
	return mayorHastaAhora;
}
console.log(mayorElem([8,3,11,10,-8]));


6.
function prom(x) {
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
        sum = sum + x[i];
    }
    var avg = sum / (x.length);
    return avg;
}
var x = [4, 20];
var y = prom(x);
console.log(y);


7.
function arrayImp() {
    var arr = [];
    for (var i = 1; i <= 50; i++) {
        if (i % 2 !== 0)
            arr.push(i);
    }
    return arr;
}
var x = arrayImp();
console.log(x);

8.
function maxY(x,y){
    var max = [];
    for(var i = 0; i < x.length; 1++){
        if(y < x[i]){
            max.push(x[i]);
        }
    }
    console.log(max);
    return max.length;
}        
console.log(maxY([1,3,5,7], 3))

9.
function numcuad(x) {
    for (var i = 0; i < x.length; i++){
        x[i] = x[i] * x[i];
    }
    return x;
}
console.log(numcuad([1,5,10,2]))

10.
function f10(array) {
    for (let i = 0; i < array.length; i++){
        if (array[i] < 0){
            array[i] = 0;
        }
    }
    return array;
}
console.log(f10([1,5,10,-2]))

11.
function f11(array) {
    let max = array [0];
    let min = array [0];
    let suma = 0;
    array.foreach(element => {
        suma += element;
        if (element > max){
            max = element;
        }
        else if (element < min){
            min = element;
        }
    })
    return [max, min, suma / array.length]
}
console.log(f11([1,5,10,-2]))


12.
function swap(arr) {
    var arr_new = [];
    var temp = arr[arr.length - 1];
    for (var i = 0; i < arr.length; i++){
        arr_new.push(arr[i]);
    }
    arr_new[arr_new.length - 1 ] = arr_new[0];
    arr_new[0] = temp;
    console.log(arr_new);
    return arr_new
}
console.log(swap([1,5,10,-2]))

13.
function numarr(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }
    return arr;
}
var y = [2, -4, 8, -6];
console.log(numarr(y));