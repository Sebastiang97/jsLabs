import { describe, expect, it } from "vitest";
import { fizzBuzz } from "./fizzBuzz";



describe('fizzBuzz', ()=>{
    it('should be a function ', ()=>{
        expect(typeof fizzBuzz).toBe('function')
    })

    it('should throw if not number is provided as parameter ', ()=>{
        expect(()=>fizzBuzz()).toThrow()
    })

    it('should throw a specifice message if not number is provided as parameter ', ()=>{
        expect(()=>fizzBuzz()).toThrow("parameter provided must be a number")
    })

    it('should throw if number is NAN ', ()=>{
        expect(()=>fizzBuzz(NaN)).toThrow("parameter provided must be a number")
    })

    it('should return 1 if number provided is 1 ', ()=>{
        expect(fizzBuzz(1)).toBe(1)
    })

    it('should return 2 if number provided is 2 ', ()=>{
        expect(fizzBuzz(2)).toBe(2)
    })

    it('should return fizz if number provided is 3 ', ()=>{
        expect(fizzBuzz(3)).toBe('fizz')
    })

    it('should return fizz if number provided is multiple of 3 ', ()=>{
        expect(fizzBuzz(6)).toBe('fizz')
        expect(fizzBuzz(9)).toBe('fizz')
        expect(fizzBuzz(12)).toBe('fizz')
    })

    it('should return buzz if number provided is multiple of 5 ', ()=>{
        expect(fizzBuzz(5)).toBe('buzz')
        expect(fizzBuzz(10)).toBe('buzz')
        expect(fizzBuzz(20)).toBe('buzz')
    })

    it('should return fizzbuzz if number provided is multiple of 15 ', ()=>{
        expect(fizzBuzz(15)).toBe('fizzbuzz')
        expect(fizzBuzz(30)).toBe('fizzbuzz')
        expect(fizzBuzz(45)).toBe('fizzbuzz')
    })

    it('should return woff if number provided is multiple of 7 ', ()=>{
        expect(fizzBuzz(7)).toBe('woff')
    })

    it('should return fizzwoff if number provided is multiple of 7 ', ()=>{
        expect(fizzBuzz(21)).toBe('fizzwoff')
    })
})