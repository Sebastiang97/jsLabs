export const fizzBuzz = (number)=>{
    if(typeof number !=='number') throw new Error('parameter provided must be a number')
    if(Number.isNaN(number)) throw new Error('parameter provided must be a number')
    const multiplies = {3:'fizz',5:'buzz',7: 'woff'}
    let output = ''

    Object.entries(multiplies)
        .forEach(([key,value])=> {
            
            if(number % key === 0) output = output + value
        })
    return output === '' ? number : output
}