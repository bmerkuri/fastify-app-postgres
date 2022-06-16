const vatCalculator  = require('../src/utilities/vatCalculator')

describe("VAT calculator", ()=>{
    test("Should return the correct VAT excluded amount for 20% VAT",()=>{
        //arrange and act
        const result =  vatCalculator.calculateVAT(16.67)
        //assert
        expect(result).toBe(3.33)
    })
    
    test("Should return the correct gross amount for 20% VAT",()=>{
        //arrange and act
        const result = vatCalculator.calculateGrossAmount(16.67)
        //assert
        expect(result).toBe(20)
    })

    test("Should return the correct net amount for 20% VAT",()=>{
        //arrange and act
        const result = vatCalculator.calculateNetAmount(20)
        //assert
        expect(result).toBe(16.67)
    })
})