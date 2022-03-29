const IPGRemoteService = require("./remote/IPGRemoteService")

const validate = (value) => {
    if (value == null || value == undefined || value == "") {
        return true
    } else {
        return false
    }
}

const validateSignResponse = (data) => {
    if (
        validate(data) ||
        validate(data.Sign) ||
        validate(data.Token)
    ) {
        return true
    } else {
        return false
    }
}

const validateValidationResponse = (data) => {
    if (
        validate(data) ||
        validate(data.PSP) ||
        validate(data.PSP.Amount) ||
        validate(data.PSP.InvoiceDate) ||
        validate(data.PSP.InvoiceNumber) ||
        validate(data.PSP.IsSuccess) ||
        validate(data.PSP.MerchantCode) ||
        validate(data.PSP.Message) ||
        validate(data.PSP.ReferenceNumber) ||
        validate(data.PSP.TerminalCode) ||
        validate(data.PSP.TraceNumber) ||
        validate(data.PSP.TransactionDate) ||
        validate(data.PSP.TransactionReferenceID) ||
        validate(data.PSP.TrxHashedCardNumber) ||
        validate(data.PSP.TrxMaskedCardNumber) ||
        validate(data.VERIFY) ||
        validate(data.VERIFY.HashedCardNumber) ||
        validate(data.VERIFY.IsSuccess) ||
        validate(data.VERIFY.MaskedCardNumber) ||
        validate(data.VERIFY.Message) ||
        validate(data.VERIFY.ShaparakRefNumber)
    ) {
        return true
    } else {
        return false
    }
}

const signMostaghim = (Api, Amount, InvoiceNumber, RedirectAddress) => new Promise((resolve, reject) => {
    IPGRemoteService.signMostaghim(
        Api,
        Amount,
        InvoiceNumber,
        RedirectAddress
    ).then((data) => {
        if (validateSignResponse(data)) {
            reject("payment sign not successful! sign or token is null")
            return
        }
        resolve(data)
    }).catch((error) => reject(error))
})

const signVaset = (Api, Amount, Tashim, RedirectAddress, InvoiceNumber) => new Promise((resolve, reject) => {
    IPGRemoteService.signVaset(
        Api,
        Amount,
        Tashim,
        RedirectAddress,
        InvoiceNumber
    ).then((data) => {
        if (validateSignResponse(data)) {
            reject("payment sign not successful! sign or token is null")
            return
        }
        resolve(data)
    }).catch((error) => reject(error))
})

const validationMostaghim = (Api, tref, iD, iN) => new Promise((resolve, reject) => {
    IPGRemoteService.validationMostaghim(
        Api,
        tref,
        iD,
        iN
    ).then((data) => {
        if (validateValidationResponse(data)) {
            reject("error payment not valid")
            return
        }
        resolve(data)
    }).catch((error) => reject(error))
})

const validationVaset = (Api, tref, iD, iN) => new Promise((resolve, reject) => {
    IPGRemoteService.validationVaset(
        Api,
        tref,
        iD,
        iN
    ).then((data) => {
        if (validateValidationResponse(data)) {
            reject("error payment not valid")
            return
        }
        resolve(data)
    }).catch((error) => reject(error))
})

module.exports = {
    signMostaghim,
    signVaset,
    validationMostaghim,
    validationVaset
}