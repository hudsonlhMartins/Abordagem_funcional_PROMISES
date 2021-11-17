import {log, timerOutPromise, retry} from './ulteis/helper-api.js'
import { notasServices as Service } from './notas/service.js'
import './ulteis/array-helpers.js'
import {takeUntil, debounceTime, pipe, partialize} from './ulteis/operation.js'
import {EventEmitter} from './ulteis/event-emitter.js'
import {Maybe} from './ulteis/maybe.js'


const operation = pipe(
    partialize(takeUntil, 3),
    partialize(debounceTime, 500)
    
)
const operation1 = operation(()=>

        retry(3, 3000, ()=> timerOutPromise(200,  Service.sumItems('2143')))
        .then(total => EventEmitter.emit('itensTotalizados', total))
        .catch(console.log)
)

document.querySelector('#myButton').onclick = ()=> operation1()