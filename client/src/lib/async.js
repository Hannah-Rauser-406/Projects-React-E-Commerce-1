// const first = () => second()
//
// const second = () => third()
//
// const third = () => {
//   setTimeout(forth, 4000)
//   console.trace()
// }
//
// const forth = () => console.trace()
//
// first()
//
// *******************************************
// const createUser = (user) => {
//   checkAccess ('create.user', (err, result) => {
//     if (err) {
//       sendMessage('user has no access')
//       return
//     }
//
//     findUserByEmail(user.email, (err, foundUser) => {
//       if (err) {
//         sendMessage('unknown database error')
//         return
//       }
//
//       if (foundUser) {
//         ...
//       }
//
//       saveUser(user, (err, savedUser) => {
//         ...
//       })
//     })
//   })
// }

// instead of all this mess above, theyve created PROMISES. there are two methods we can use on the promise objects. THEN & CATCH

// **********************************

// const createUserAsync = (user) => {
//   return checkAccess('create.user')
//   .then(() => findUserByEmail(user.email))
//   .then(foundUser = {
//     if (foundUser) {
//       throw new Error('duplicate user')
//     }
//     return saveUser(user)
//   })
//   .catch(err => {
//     //handle errors here
//   })
// }
// ************
// try{
//   //do stuff that might throw
// } catch (err) {
//   //handle errors
// }

// ************************
const saveToDb = (value) => {
  const callback = (resolve, reject) => {
    // do stuff
    // when it succeeds calls resolve, otherwise calls reject
    const runAfterTimeout = () => {
      const divByFive = Date.now() % 5 === 0
      if (divByFive) {
        reject('database save failed')
      } else {
        resolve('save successful:' + value)
      }
    }
    setTimeout(runAfterTimeout, 2000)
  }
  return new Promise(callback)
}

saveToDb('foo')
  .then(msg => {
    console.log(msg)
    return saveToDb('bar')
  })
  .then(msg => {
    console.log(msg)
  })
  .catch(err => console.log(err))

// const myPromise = new Promise(callback)
// the resolve goes straight to the .then() and if a reject was entered before the ('Promise resolved') it would go to the .catch()
// myPromise
//   .then((msg) => console.log('in the then():' + msg))
//   .catch((msg) => console.log('in the catch():' + msg))
