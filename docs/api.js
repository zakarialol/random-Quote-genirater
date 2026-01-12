//function to fetch api
async function quoteFunc(){
  try{
    const res = await fetch("https://dummyjson.com/quotes/random")
    if(!res.ok) throw new error('something went wrong')
    const data = res.json()
    return data
  }catch(error){
    console.log('error',error)
  }
}
export{quoteFunc}