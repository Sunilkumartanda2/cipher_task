const abcd = "abcdefghijklmnopqrstuvwxyz"

var inputKey = document.getElementById('key');
var inputPlainText = document.getElementById('plaintext')
var inputResult = document.getElementById('result')

var checkBox = document.getElementById('enable');

var btnProcess = document.getElementById('process')
var btnClear = document.getElementById('clear')
console.log('process')

btnProcess.addEventListener('click', function(e) {
    console.log('call process')
    var encryptResult = ""
    var keyValue = inputKey.value
    var plainTextValue = inputPlainText.value
    if ((/[a-zA-Z]/).test(plainTextValue)) {
        if (checkBox.checked) {
            console.log(plainTextValue)
            for (let index = 0; index < plainTextValue.length; index++) {
                const element = plainTextValue.charAt(index)
                const p = abcd.indexOf(element) + parseInt(keyValue)
                const resultkey = p - Math.floor(p / 25) * 25
                console.log(resultkey, p, element)
                encryptResult = encryptResult + abcd.charAt(resultkey)
            }
            console.log(encryptResult)
        } else {
            encryptResult = plainTextValue
        }
    } else {
        alert('enter valid text ')
    }
    inputResult.value = encryptResult
})

btnClear.addEventListener('click', function(e) {
    inputKey.value = ""
    inputPlainText.value = ""
    inputResult.value = ""
    checkBox.checked = false
})