const {connect} = require('mongoose')

const connectToDb = async(url) =>{
    try{
        await connect(url)
        console.log('Connnected to Database')
    }
    catch(err){
        console.log('Error in connecting')
    }
}

module.exports = connectToDb;