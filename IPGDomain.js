const IPGRepository = require("./IPGRepository")
const Constant = require("./Constant")

const validate = (value) => {
    if (value == null || value == undefined || value == "") {
        return true
    } else {
        return false
    }
}

const signMostaghim = (Api, Amount, InvoiceNumber, RedirectAddress) => new Promise((resolve, reject) => {
    if (Amount < Constant.MIN_PAYMENT_AMOUNT_MOSTAGHIM) {
        reject(
            "error in Amount value ! \n" +
            "The minimum amount payable is " + Constant.MIN_PAYMENT_AMOUNT_MOSTAGHIM +
            " You have entered " + Amount
        )
        return
    }
    if (Amount > Constant.MAX_PAYMENT_AMOUNT) {
        reject(
            "error in Amount value ! \n" +
            "The maximum amount payable is " + Constant.MAX_PAYMENT_AMOUNT +
            " You have entered " + Amount
        )
        return
    }
    if (validate(Api)) {
        reject(
            "error in Api value ! \n" +
            "this field should not be empty"
        )
        return
    }
    if (validate(InvoiceNumber)) {
        reject(
            "error in InvoiceNumber value ! \n" +
            "this field should not be empty"
        )
    }
    if (validate(RedirectAddress)) {
        reject(
            "error in RedirectAddress value ! \n" +
            "this field should not be empty"
        )
        return
    }
    IPGRepository.signMostaghim(
        Api, Amount, InvoiceNumber, RedirectAddress
    ).then((data) => resolve(data))
        .catch((error) => reject(error))
})

const signVaset = (Api, Amount, Tashim, RedirectAddress, InvoiceNumber) => new Promise((resolve, reject) => {
    if (Amount < Constant.MIN_PAYMENT_AMOUNT_VASET) {
        reject(
            "error in Amount value ! \n" +
            "The minimum amount payable is " + Constant.MIN_PAYMENT_AMOUNT_VASET +
            " You have entered " + Amount
        )
        return
    }
    if (Amount > Constant.MAX_PAYMENT_AMOUNT) {
        reject(
            "error in Amount value ! \n" +
            "The maximum amount payable is " + Constant.MAX_PAYMENT_AMOUNT +
            " You have entered " + Amount
        )
        return
    }
    if (validate(Api)) {
        reject(
            "error in Api value ! \n" +
            "this field should not be empty"
        )
        return
    }
    if (validate(RedirectAddress)) {
        reject(
            "error in RedirectAddress value ! \n" +
            "this field should not be empty"
        )
        return
    }
    IPGRepository.signVaset(
        Api, Amount, Tashim, RedirectAddress, InvoiceNumber
    ).then((data) => resolve(data))
        .catch((error) => reject(error))
})

const validationMostaghim = (Api, tref, iD, iN) => new Promise((resolve, reject) => {
    if (validate(Api)) {
        reject(
            "error in Api value ! \n" +
            "this field should not be empty in paymentType Mostaghim"
        )
        return
    }
    if (validate(iD)) {
        reject(
            "error in iD value ! \n" +
            "this field should not be empty"
        )
        return
    }
    if (validate(iN)) {
        reject(
            "error in iN value ! \n" +
            "this field should not be empty"
        )
        return
    }
    if (validate(tref)) {
        reject(
            "error in tref value ! \n" +
            "this field should not be empty"
        )
        return
    }
    IPGRepository.validationMostaghim(
        Api, tref, iD, iN
    ).then((data) => resolve(data))
        .catch((error) => reject(error))
})

const validationVaset = (Api, tref, iD, iN) => new Promise((resolve, reject) => {
    if (validate(iD)) {
        reject(
            "error in iD value ! \n" +
            "this field should not be empty"
        )
        return
    }
    if (validate(iN)) {
        reject(
            "error in iN value ! \n" +
            "this field should not be empty"
        )
        return
    }
    if (validate(tref)) {
        reject(
            "error in tref value ! \n" +
            "this field should not be empty"
        )
        return
    }
    IPGRepository.validationVaset(
        Api, tref, iD, iN
    ).then((data) => resolve(data))
        .catch((error) => reject(error))
})

module.exports = {
    signMostaghim,
    signVaset,
    validationMostaghim,
    validationVaset
}