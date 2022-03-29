var querystring = require('querystring')
var https = require('https')

const sendFormDataRequest = (url, postData) => new Promise((resolve,reject)=>{
    var postDataString = querystring.stringify(postData)

    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': postDataString.length
        }
    }

    callback = (response) => {
        var resultData = ''
        response.on('data', (chunk) => {
            resultData += chunk
        })
        response.on('end', () => {
            try{
                resultDataObject = JSON.parse(resultData)
                resolve(resultDataObject)
            }
            catch(error){
                reject(error)
            }
        })
    }

    var request = https.request(url, options, callback)
    request.write(postDataString)
    request.on("error", (error) => {
        reject(error)
    })
    request.end()
})

module.exports = { sendFormDataRequest }







