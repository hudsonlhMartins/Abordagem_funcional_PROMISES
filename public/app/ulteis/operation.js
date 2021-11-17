export const partialize = (fn, ...arg) => 
    fn.bind(null, ...arg)

export const compose = (...fns) => value =>{
    return fns.reduceRight((previousValue, fn) => 
        fn(previousValue), value )
}
export const pipe = (...fns) => value =>{
    return fns.reduce((previousValue, fn) => 
        fn(previousValue), value )
}
export const takeUntil = (times, fn) =>
    () =>  times-- >0 && fn()
    // isso e um truque velho do js para não fazer o if
    // assim ele vai ver se o times -- e maior que 0 se for ele vai iniviar a fn
    // se não ele não vai iniciar

export const debounceTime = (mille, fn) =>{
let timer = 0
    return ()=>{
        clearTimeout(timer)
        timer = setTimeout(fn, mille)
    }
}