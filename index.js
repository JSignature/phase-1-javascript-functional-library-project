const myEach = (collection, func) => {
  debugger

  if (Array.isArray(collection)) {
    for (const element of collection) {
      func(element)
    }
  } else {
    let objToArray = Object.values(collection)

    for (const element of objToArray) {
      func(element)
    }
  }

  return collection
}

const myMap = (collection, func) => {
  const finalArray = []
  const finalObj = {}

  if (Array.isArray(collection)) {
    for (const element of collection) {
      const newArr = func(element)
      finalArray.push(newArr)
    }

    return finalArray
  } else {
    let objToArray = Object.values(collection)

    for (const element of objToArray) {
      const newArrFromObj = func(element)
      finalArray.push(newArrFromObj)
    }
    return finalArray
  }
}
//not working
const myReduce = (collection, func, accumulator) => {
  let final = 0
  let acc = 0

  if (Array.isArray(collection)) {
    for (const element of collection) {
      const valuetoAdd = func(element)
      final += valuetoAdd
    }
  } else {
    let objToArray = Object.values(collection)

    for (const element of objToArray) {
      const valuetoAdd = func(element)
      final += valuetoAdd
    }
  }

  return final
}

const myFind = function (collection, func) {
  if (Array.isArray(collection)) {
    for (const element of collection) {
      if (element === func(element)) {
        return element
      } else {
        return undefined
      }
    }
  } else {
    let objToArray = Object.values(collection)

    for (const element of collection) {
      if (element === func(element)) {
        return element
      } else {
        return undefined
      }
    }
  }
}
