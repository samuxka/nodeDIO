const

async function connectToDatabase(dataName){
    // Logica da conexão
    console.log(`Conectando-se ao banco ${dataName}...`)
}

async function disconnectToDatabase(){
    console.log("desconectando do banco de dados")
}

export {
    connectToDatabase,
    disconnectToDatabase
}