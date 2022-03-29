const BASE_URL = "https://www.alsatpardakht.com"
const API_V1 = "API_V1"
const IPGAPI_API22 = "IPGAPI/Api22"

module.exports = {
    SIGN_MOSTAGHIM_ROUTE: BASE_URL + "/" + API_V1 + "/" + "sign.php",
    SIGN_VASET_ROUTE: BASE_URL + "/" + IPGAPI_API22 + "/" + "send.php",
    GO_ROUTE: BASE_URL + "/" + API_V1 + "/" + "Go.php",
    VALIDATION_MOSTAGHIM_ROUTE: BASE_URL + "/" + API_V1 + "/" + "callback.php",
    VALIDATION_VASET_ROUTE: BASE_URL + "/" + IPGAPI_API22 + "/" + "VerifyTransaction.php"
}