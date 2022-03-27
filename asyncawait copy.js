// Async Await
// Xử lý bất đồng bộ

// const getJson = async (){
//     let result1 = await CallApi1
//     let result2 = await CallApi2
//     let result3 = await CallApi3
// }

const getJSON = async () => {
    try {
        let result1 = await Promise.all([callApí, callApì, callApỉ])

    } catch (error) {

    }
}

// cách 1:
function getJSON() {
    // 
    return new Promise(function (resolve) {
        axios
            .get("https://tutorialzine.com/misc/files/example.json")
            .then(function (json) {
                // 
                // 
                resolve(json);
            })
    })
}

// cách 2:
// Async/Await approach

// 
async function getJSONAsync() {
    // The await keyword saves us from having to write a .then() block.
    let json = await axios.get(
        "https://tutorialzine.com/misc/files/example.json"
    )

    // 
    // 
    return json;
}