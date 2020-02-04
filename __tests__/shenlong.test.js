const { Shenlong } = require("../main")
describe("Shenlong test", () => {
    beforeEach(() => Shenlong.clearDragonBallList())
    it("Should return my amount dragon balls", () => {
        expect(Shenlong.getAmountOfDragonBalls()).toBe(0);
    })
    it("Should return if Shenlong is visible", () => {
        expect(Shenlong.getVisibility()).toBe(false)
    })
    it("Should return my dragon balls list", () => {
        expect(Shenlong.getDragonBallsList()).toEqual([])
    })
    it("Should change my dragon ball list", () => {
        Shenlong.changeDragonBallsList(['4 estrelas'])
        expect(Shenlong.getDragonBallsList()).toEqual(['4 estrelas'])
    })
    it("Should change my dragon ball list with an Array", () => {
        const expected = ['4 estrelas', '1 estrelas', '6 estrelas']
        Shenlong.changeDragonBallsList(['4 estrelas', '1 estrelas', '6 estrelas'])
        expect(Shenlong.getDragonBallsList()).toEqual(expected)
    })
    it("Should invoke Shenlong without 7 dragons balls", () => {
        expect(Shenlong.invokeShenlong()).toEqual("Você precisa ter as 7 esferas para invocar o Shenlong")
    })
    it("Should not invoke Shenlong without magic words", () => {
        Shenlong.changeDragonBallsList(['1 esfera', '2 esferas', '3 esferas', '4 esferas', '5 esferas', '6 esferas', '7 esferas', ])
        expect(Shenlong.invokeShenlong()).toEqual("Você precisa dizer as palavras mágicas")
    })
    it("Should invoke Shenlong", () => {
        const magicWords = "Apareça Shenlong e realize o meu desejo"
        Shenlong.changeDragonBallsList(['1 esfera', '2 esferas', '3 esferas', '4 esferas', '5 esferas', '6 esferas', '7 esferas', ])
        expect(Shenlong.invokeShenlong(magicWords)).toEqual("Você tem direito a 3 pedidos")
    })
})
