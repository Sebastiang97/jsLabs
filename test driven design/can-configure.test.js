import { describe, expect, it } from "vitest";
import { canReConfigure } from "./can-configure";




describe('canReconfigure', ()=>{
    // it('should be a function ', ()=>{
    //     expect(typeof canReConfigure).toBe('function')
    // })

    it('should throw if first parameter is missing ', ()=>{
        expect(()=>canReConfigure()).toThrow()
    })

    it('should thorw if first parameter is not a string ', ()=>{
        expect(()=>canReConfigure(2)).toThrow("parameter provided must be a string")
    })

    it('should throw a specifice message if not number is provided as parameter ', ()=>{
        expect(()=>canReConfigure('a',2)).toThrow("parameter provided must be a string")
    })

    it('should return a boolean ', ()=>{
        expect(canReConfigure('a','b')).toBeTypeOf('boolean')
    })

    it('should return false if strings provided have diferent length ', ()=>{
        expect(canReConfigure('aas','baaa')).toBe(false)
    })

    it('should return false if strings provided have diferent length ', ()=>{
        expect(canReConfigure('aab','ab')).toBe(false)
    })

    it('should return false if strings provided have diferent number of unique letters ', ()=>{
        expect(canReConfigure('aas','ddd')).toBe(false)
    })


    it('should return false if strings has different order of transformation ', ()=>{
        expect(canReConfigure('XBOX','XXBO')).toBe(false)
    })
})