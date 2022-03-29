const IPGDomain = require("./IPGDomain")
const URLConstant = require("./remote/util/URLConstant")

const signMostaghim = (Api, Amount, InvoiceNumber, RedirectAddress) => new Promise((resolve, reject) => {
    IPGDomain.signMostaghim(
        Api, Amount, InvoiceNumber, RedirectAddress
    ).then((data) => resolve(URLConstant.GO_ROUTE + "?Token=" + data.Token))
        .catch((error) => reject(error))
})

const signVaset = (Api, Amount, RedirectAddress, Tashim, InvoiceNumber) => new Promise((resolve, reject) => {
    IPGDomain.signVaset(
        Api, Amount, Tashim, RedirectAddress, InvoiceNumber
    ).then((data) => resolve(URLConstant.GO_ROUTE + "?Token=" + data.Token))
        .catch((error) => reject(error))
})


const validationMostaghim = (Api, tref, iN, iD, PayId) => new Promise((resolve, reject) => {
    IPGDomain.validationMostaghim(
        Api, tref, iD, iN
    ).then((data) => resolve({ ...data, PayId: PayId }))
        .catch((error) => reject(error))
})

const validationVaset = (Api, tref, iN, iD, PayId) => new Promise((resolve, reject) => {
    IPGDomain.validationVaset(
        Api, tref, iD, iN
    ).then((data) => resolve({ ...data, PayId: PayId }))
        .catch((error) => reject(error))
})

module.exports = {
    signMostaghim,
    signVaset,
    validationMostaghim,
    validationVaset
}
