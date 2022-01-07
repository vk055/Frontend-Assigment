export function delay() {
   return new Promise((resolve) =>{ 
        setTimeout(()=>{
           return resolve()
         }, 200)
        })
}