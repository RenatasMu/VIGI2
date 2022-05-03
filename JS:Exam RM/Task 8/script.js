/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */



function Calculator(a, b) {
    this.a = a;
    this.b = b;
    this.sum = function () {
        let sudeti = this.a + this.b;
        return sudeti;
    }
    this.subtraction = function () {
        let atimti = this.a - this.b;
        return atimti;
    }
    this.multiplication = function () {
        let daugyba = this.a * this.b;
        return daugyba;
    }
    this.division = function () {
        let div = this.a / this.b;
        return div;
    }
}

let test = new Calculator(7, 4);

console.log(test.sum());
console.log(test.subtraction());
console.log(test.multiplication());
console.log(test.division()); 
