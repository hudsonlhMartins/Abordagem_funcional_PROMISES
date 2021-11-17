export class Maybe {
    constructor(value){
        this._value = value
    }

    static of (value){
        return new Maybe(value)
    }

    isNothing(){
        return this._value === null || this._value === undefined
    }

    map (fn){
        if(this.isNothing()) return Maybe.of(null)
        const value = fn(this._value)
        return Maybe.of(value)

        // isso vai nos return um novo maybe e pode usar o .map dua vez.
    }

    getOrElse(value){
        if(this.isNothing()) return value
        // se o  this.isNothing() for null ele vai return__
        // o valor do parametro que vamos colocar
        return this._value
        // se não for vai return o value
    }
}