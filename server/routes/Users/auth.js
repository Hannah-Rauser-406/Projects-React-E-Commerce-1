require('../../models/User')

module.exports = (app, passport) => {
  app.post('/api/signup', (req, res, next) => {
    const authenticator = passport.authenticate('local-signup', (err, user, info) => {
      if (err) {
        return next(err)
      }
      else if (!user) {
        return res.status(404).json(info.message)
      }
      else {
        user.save((err) => {
          if (err) {
            return res.status(500).json(err)
          }
          else {
            req.logIn(user, (err, u) => {
              console.log('user', u)
              if (err) {
                return res.status(500).json(err)
              }
              else {
                return res.json(user)
              }
            })
          }
        })
      }
    })
    authenticator(req, res, next)
  })
  //****** LOG IN (SIGN IN)*******
  app.post('/api/login', (req, res, next) => {
    // this is another way of passing in a required module its arguments for a given method
    const authenticator = passport.authenticate('local-login', (err, user, info) => {
      if (err) res.json({error: err.message})
      if (!user) {
        return res.status(404).json(info.message) // info is an object
      }
      req.logIn(user, (err) => {
        if (err) res.json({error: err.message}) // uses json to send back error to client
        console.log(user)
        return res.json({
          message: 'Successfully logged in. Welcome back!',
          user: user
        })
      })
    })
    authenticator(req, res, next)// set function equal to a variable above, then call this function here
  })
}
