// 1hoangphihong1
// mHLTL1orpZVn57Ve

const MONGODB_URI = 'mongodb+srv://1hoangphihong1:mHLTL1orpZVn57Ve@clustertrelloclone.jqlhtlg.mongodb.net/?retryWrites=true&w=majority'
const DATABASE_NAME = 'trello-db'

import { MongoClient, ServerApiVersion } from 'mongodb'

let trelloDatabaseInstance = null

const mongoClientInstance = new MongoClient(MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict:true,
    deprecationErrors: true
  }
})

export const CONNECT_DB = async () => {
  await mongoClientInstance.connect()

  trelloDatabaseInstance = mongoClientInstance.db(DATABASE_NAME)
}

export const CLOSE_DB = async () => {
  await mongoClientInstance.close()
}

export const GET_DB = () => {
  if (!trelloDatabaseInstance) throw new Error('Must connect to Database first')
  return trelloDatabaseInstance
}
