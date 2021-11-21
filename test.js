function randomCode() {
    let code = ''
    for (let j = 0; j < 9; j++) {
        let symbol = Math.random().toString(36).slice(2, 3)
        if (symbol.match(/[a-z]/i)) {
            const random = Math.floor(Math.random() * 10)
            if (random % 2 === 0) {
                symbol = symbol.toUpperCase()
            }
        }
        code += symbol
    }

    return code
}
console.log(randomCode())