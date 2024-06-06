// Funções que lidam com produtos
async function getFullName(codeId, productName){
    console.log("product: " + productName + " --- " + "code: " + codeId)
};

async function getProductLabel(productName){
    console.log("Product: " + productName)
}

module.exports = {
    getFullName,
    getProductLabel
};