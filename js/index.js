let fiboVars = (count) => {
    let a=1,b=0,c=0;
    while (count--) {
        c = a+b;
        a = b;
        b = c;
    }
    return b;
}
let fiboRecursive = (count) => {
    let fibo = ((a,b,c)=> {
        if (c == 1) return b; 
        return fibo(b,a+b,--c);
    });
    return fibo(0,1,count);
}
let fiboByArray = (count) => {
    let arr = [0,1];
    for(let k = 1; k < count; k++) {
        arr[k+1] = arr.slice(k-1,k+1).reduce((a,b)=>a+b);
    }
    return arr.pop();
}
let fiboVarsArrayResult = (count) => {
    let a=1,b=0,c=0;
    let ret = [];
    while (count--) {
        c = a+b;
        a = b;
        b = c;
        ret.push(b);
    }
    return ret;
}
while(true) {
    let nomb = parseInt(prompt('Номер числа в ряді Фибона́чі: ', 0));
    if (nomb > 0) {
        document.write(`<p>За допомогою циклу зі змінними: ${fiboVars(nomb)}</p>`);
        document.write(`<p>Рекурсивно:  ${fiboRecursive(nomb)}</p>`);
        document.write(`<p>За допомогою масива: ${fiboByArray(nomb)}</p>`);
        document.write(`<p>Як масив за допомогою циклу зі змінними: `);
        fiboVarsArrayResult(nomb).forEach((val)=>{
            document.write(`${val} `);
        })
        document.write(`</p>`);
        break;
    } else alert('Введіть число більше 0!');
}