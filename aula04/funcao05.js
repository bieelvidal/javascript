//RECURSIVIDADE
function fatorial(n) {
if (n ==1 ){
    return 1
} else {
return n * fatorial(n-1)
    }

}

console.log(fatorial(5))

/* 
S! = 5 x 4 x 3 x2 x1
S! = 5 x 4
n! = n x (n-1)!
1! = 1
*/