import { fetchCollection } from "../database/krakenMongoClient.js"

function createUser(username, password) {
  const critera = { username };
  const data = { $setOnInsert: {username, password}};

  return fetchCollection("userDetails").updateOne(critera, data, { upsert: true });
}

function authenticate(username, password) {

}

export default { createUser, authenticate }