export const handleSattus = (res)=>{
    return res.ok ? res.json() : Promise.reject(res.statusText)
}

export const log = (param)=>{
    console.log(param)
    return param
}

export const timerOutPromise = (mille, promise)=>{
    const timeOut = new Promise((resolve, reject)=>
        setTimeout(()=> reject(`limite da promise excedido`), mille)
    )

    return Promise.race([timeOut, promise])
}

export const delay = mille => data => 
    new Promise((resolve, reject)=>
        setTimeout(()=>resolve(data),mille)
    )

export const retry = (retries, mille, fn) =>
fn().catch(err =>{
    console.log(err)
    return delay(mille)().then(() => retries > 1 ?
        retry(--retries, mille, fn)
        : Promise.reject(err)
)})