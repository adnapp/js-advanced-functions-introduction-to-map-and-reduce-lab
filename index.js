// Your code here

function mapToNegativize(srcArr){
    let r = []

    for (let i = 0; i < srcArr.length; i++){
        r.push(srcArr[i]*-1)
    }
    return r
}


function mapToNoChange(srcArr){
    return srcArr
}

function mapToDouble(srcArr){
    let    r = []

    for (let i = 0; i < srcArr.length; i++){
        r.push(srcArr[i]*2)
    }
    return r
}

function mapToSquare(srcArr){
    let    r = []

    for (let i = 0; i < srcArr.length; i++){
        r.push(srcArr[i]**2)
    }
    return r
}


function reduceToTotal(srcArr, start = 0) {
    let r = start
    for (let i = 0; i < srcArr.length; i++){
        r = r + srcArr[i]
    }
    return r
}

function reduceToAllTrue(srcArr) {
    let r = true
    for (let i = 0; i < srcArr.length; i++){
        if (!srcArr[i]) return false
    }
    return r
}


function reduceToAnyTrue(srcArr) {
    let r = false
    for (let i = 0; i < srcArr.length; i++){
        if (srcArr[i]) return true
    }
    return r
}
