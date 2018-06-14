function solution(a, b) 
{
	a = a.toLowerCase();
	b = b.toLowerCase();
    var cantidad = 0;
    for (var i = 0; i <= a.length - b.length; i++) 
    {
        var sub = a.substr(i, b.length);
        if (esAnagrama(sub, b))
        {
            cantidad++;
        }      
    }
    return cantidad;
}

function esAnagrama(palabra, anagrama)
{
    var primera = palabra.split('').sort();
    var segunda = anagrama.split('').sort();
    return primera.join('') == segunda.join('');
}

let string="hola, que buena ola Laomir";
let subString="OAL";

console.log(`Cantidad de veces que el substring se encuentra en el string : ${solution(string,subString)}`);
