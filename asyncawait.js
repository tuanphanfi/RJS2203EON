const axios = require('axios').default;

let url = 'https://62405d822aeb48a9af733b3e.mockapi.io/users'

// thread
// 1. Create
// 2. Get Detail by id
// 3. Delete by id
// 4. Update
// 5. Get All

// Async/Await approach

// 1. Create
async function createAUser() {
    const data = {
        "name": "Tuan Phan",
    }

    let json = await axios.post(url, data)
    console.log(json)
    return json;
}
// 2. Get Detail by id
async function getAUserById() {
    // The await keyword saves us from having to write a .then() block.
    let json = await axios.get(`${url}/29`)
    console.log(json)
    return json;
}

// 3. Delete by id
async function deleteAUserById() {
    // The await keyword saves us from having to write a .then() block.
    let json = await axios.delete(`${url}/29`)
    console.log(json)
    return json;
}

// 4. Update
async function updateAUserById() {
    // The await keyword saves us from having to write a .then() block.
    const data = {
        "name": "Tuan Phan"
    }
    let json = await axios.put(`${url}/28`, data)
    console.log(json)
    return json;
}

// 5. Get All
async function getAll() {
    // The await keyword saves us from having to write a .then() block.
    let json = await axios.get(url)
    console.log(json)
    return json;
}



createAUser() //ok
getAUserById() //ok
deleteAUserById() //ok
updateAUserById() //ok
getAll() //ok

