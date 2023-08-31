import chalk from "chalk";

export const add = (numero1, numero2) => numero1 + numero2

export const showResult = (numero1, numero2) => {
    
    const result = add (numero1, numero2);
    
    if (result >= 5){ 
        return chalk.green(result);
    } else {
        return chalk.red(result);
    }
}

console.log(showResult(8, -3))