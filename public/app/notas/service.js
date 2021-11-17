import { handleSattus } from "../ulteis/helper-api.js";
import {partialize, compose} from "../ulteis/operation.js"
import { Maybe } from "../ulteis/maybe.js";
const API = 'http://localhost:3000/notas'

const getItemsFromNotas = notasM => notasM.map(notas => notas.$flatMap(nota => nota.itens))
const filterItemsByCode = (code, itemsM) => itemsM.map(items => items.filter(item => item.codigo == code))
const sumItemsValue = itemsM => itemsM.map(items => items.reduce((total, item)=> total+ item.valor, 0))


export const notasServices = {
    listAll(){
        return fetch(API).then(handleSattus)
        .then(nota =>Maybe.of(nota))
    },

    sumItems(code){
        const filterItems = partialize(filterItemsByCode, code)
        const sumItems = compose(sumItemsValue, filterItems, getItemsFromNotas)
    // esse sumItems e que esta recebendo o compose aquela function que value de um parametro
        return this.listAll()
            .then(sumItems)
            .then(result =>  result.getOrElse(0))
    }
}