import mongoose from 'mongoose'
import config from "config" ; 
import logger from "./logger"


async function connect(){
    const dbUrl = config.get<string>("dbUri") ; 
    try {
        await mongoose.connect(dbUrl) ; 
        logger.info("db connected")
    }catch  ( error ) {
        logger.info("couldnt connect to db ") ; 
        process.exit(1) ; 
    }
}
export default connect ; 