const events = new Map()
/* 
    é uma estrutura de dados, 
    ela tem uma chave e uma valor asociado a essa chave, igual um objetor
    essa chave não se repeter.
    então o nome do avento sera minha chave, e o valor vai ser__
     uma array com todos os listener para quele evento
*/

export const EventEmitter = {
    on(event, listener){
    // todas vez que alguem quiser estuda em um evento a gente__
    // tem quer cria-lo se não existir
        if(!events.has(event)) events.set(event, [])
          // se não tiver uma chave (eventes do new Map)__
          // com o evento que eu quero criar
        events.get(event).push(listener)
        // aqui estamos pegar o array que no caso e o event com o get pegar__
        // o valor que esta asociado ao event.

      

        
    },

    emit(event, data){
        const listeners = events.get(event)
        // denovo pegando o valor asociado ao event com o get. que são os lisneters
        if(listeners)
            listeners.forEach(listener => listener(data))
        // aqui para passa o dado para todos os inscrito nesse event.
    }
}