const nightmare=require('nightmare')()
const args=process.argv.slice(2)
const url=args[0]
const minPrice=args[1]
checkPrice()
async function checkPrice(){
const priceString= await nightmare.goto(url)
                                  .wait("#corePrice_feature_div")
                                  .evaluate(()=>document.getElementById("corePrice_feature_div").innerText)
                                  .end()                                

const priceNumber=parseFloat(priceString.replace('$','')) 
if(priceNumber<minPrice){
    console.log("It is cheap")
} else{
     console.log("It is expensive")
}                                 
}
