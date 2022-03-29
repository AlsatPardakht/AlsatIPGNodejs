const URLConstant = require("./util/URLConstant")
const { sendFormDataRequest } = require("./FormRequest")

const signMostaghim = (Api, Amount, InvoiceNumber, RedirectAddress) => sendFormDataRequest(
    URLConstant.SIGN_MOSTAGHIM_ROUTE,
    {
        Api: Api,
        Amount: Amount,
        InvoiceNumber: InvoiceNumber,
        RedirectAddress: RedirectAddress
    }
)

const signVaset = (Api, Amount, Tashim, RedirectAddress, InvoiceNumber) => sendFormDataRequest(
    URLConstant.SIGN_VASET_ROUTE,
    {
        Api: Api,
        Amount: Amount,
        Tashim: Tashim,
        RedirectAddress: RedirectAddress,
        InvoiceNumber: InvoiceNumber
    }
)

const validationMostaghim = (Api, tref, iD, iN) => sendFormDataRequest(
    URLConstant.VALIDATION_MOSTAGHIM_ROUTE,
    {
        Api: Api,
        tref: tref,
        iD: iD,
        iN: iN
    }
)

const validationVaset = (Api, tref, iD, iN) => sendFormDataRequest(
    URLConstant.VALIDATION_VASET_ROUTE,
    {
        Api: Api,
        tref: tref,
        iD: iD,
        iN: iN
    }
)

module.exports = {
    signMostaghim,
    signVaset,
    validationMostaghim,
    validationVaset
}