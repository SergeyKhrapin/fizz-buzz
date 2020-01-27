const fizzBuzz = ()=> {
    let res = '';

    for (let i = 1; i <= 100; i++) {
        if (!(i % 3) && !(i % 5)) res += ' fizzBuzz';
        else if (!(i % 3)) res += ' fizz';
        else if (!(i % 5)) res += ' buzz';
        else res += ' ' + i;
    }
    
    return res; // 1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzBuzz
}

console.log(fizzBuzz());
