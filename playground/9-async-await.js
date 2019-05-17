const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject('Num must be positive.')
            }
            resolve(a + b)
        }, 2000)
    })
}

const doWork = async () => {
    const sum = await add(3,5)
    const sum2 = await add(sum,44)
    const sum3 = await add(-4, sum2)
    return sum3
}

doWork().then((result) => {
    console.log(result)
}).catch((e) => {
    console.log('Error', e)
})