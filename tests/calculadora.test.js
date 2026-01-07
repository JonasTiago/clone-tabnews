const calculadora =  require("../models/calculadora.js")

test("Somar 2 + 2 deveria retornar 4", ()=>{
    const result = calculadora.somar(2, 2)
    expect(result).toBe(4)
})

test("Somar 2 + 3 deveria retornar 5", ()=>{
    const result = calculadora.somar(2, 3)
    expect(result).toBe(5)
})