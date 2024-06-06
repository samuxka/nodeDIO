const p = require("./services/products.js")
const config = require("./services/config.js")
const database = require("./services/databases.js")

async function main(){
    console.log("Carrinho de compras: ")
    // p.getFullName("777", "Teclado Mecanico K500 mini, switch brown, 60%")
    // p.getFullName("257", "Attack shark am8")
    // p.getProductLabel("257", "Attack shark am8")

    console.log(config.devArea)
}

main()