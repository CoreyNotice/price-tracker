const nightmare=require('nightmare')()

checkPrice()
async function checkPrice(){
const priceString= await nightmare.goto("https://www.amazon.com/dp/B0B7CPSN2K")
                                  .wait("#corePrice_feature_div")
                                  .evaluate(()=>document.getElementById("corePrice_feature_div").innerText)
                                  .end()                                

const priceNumber=parseFloat(priceString.replace('$','')) 
if(priceNumber<100){
    console.log("It is cheap")
} else{
     console.log("It is expensive")
}                                 
}
