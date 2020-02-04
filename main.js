class Shenlong {
    constructor() {
        this.dragonBalls = []
        this.isVisible = false
    }

    getAmountOfDragonBalls() {
        return this.dragonBalls.length
    }

    getVisibility() {
        return this.isVisible
    }

    getDragonBallsList() {
        return this.dragonBalls
    }

    changeDragonBallsList(balls) {
        this.dragonBalls.push(...balls)
    }

    clearDragonBallList() {
        this.dragonBalls = []
    }

    invokeShenlong(magicWords) {
        const magic = 'Apareça Shenlong e realize o meu desejo'
        if (this.dragonBalls < 7) return  'Você precisa ter as 7 esferas para invocar o Shenlong'
        if (!magicWords || magicWords !== magic) return 'Você precisa dizer as palavras mágicas'
        this.isVisible = true
        return 'Você tem direito a 3 pedidos'
    }

}
module.exports.Shenlong = new Shenlong
