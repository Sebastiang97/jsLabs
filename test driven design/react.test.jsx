import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, it } from "vitest";

const numbers = [0,1,2,3,4,5,6,7,8,9];


const Calculator = () =>{
    
    return (
        <div>
            <h1>Calculator</h1>
            <span>0</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            
        </div>
    )
}

describe('Calculator', ()=>{
    afterEach(cleanup)
    it('should render', () =>{
        render(<Calculator/>)
    })
    
    it('should render title correctly', () =>{
        render(<Calculator/>)
        screen.getByText('Calculator')
    })

    it('should render numbers ', () => {
        render(<Calculator/>)
                
        numbers.forEach(number => {
            screen.getByText(number)
        })
    });

   
})