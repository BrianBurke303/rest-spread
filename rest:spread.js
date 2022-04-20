filterOutOdds((...things) => {
    return things.filter(num => num % 2 ===0)
})


const findMin = (...args) => {
    return Math.min(...args)
}

const mergeObjects = (...stuff) => {
    return {...stuff[0], ...stuff[1]}
}

const doubleAndReturnArgs = (...coll) => {
    const newArr = [...coll[0]]
    return [...newArr, coll[1] *2, coll[2] *2]
}

const removeRandom = (...items) => {
    let remover = Math.floor(Math.random() * 5)
    console.log(remover);
    return [...items.slice(0, remover), ...items.slice(remover + 1)]

    }

const extend = (arr1, arr2) => {
    return [...arr1, ...arr2]
}

const addKeyVal = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj
}

const removeKey = (obj, key) => {
    let newObj = {...obj}
    delete newObj[key]
    return newObj
}

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2}
}

const update = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj
}



