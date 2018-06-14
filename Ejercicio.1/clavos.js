function solution (a, b, n, c, m) {
    if (a.length !== b.length) 
    {
        return -1
    }
    let resultado = 0

    for (let index = 0; index < a.length; index++) {
        if ((n >= index >= 0) && (index <= c[index]) && (a[index] <= c[index] <= b[index])) 
        {
            resultado++
            if (resultado === a.length) 
            {
                return resultado
            }
        } 
        else 
        {
            return -1
        }
    }
    return -1
}

let a = [1, 4, 5, 8];
let b = [4, 5, 9, 10];
let c = [4, 6, 7, 10, 2];
let n = 0;
let m = 0;

console.log(`Minimo de clavos necesarios: ${solution(a, b, n, c, m)}`);
