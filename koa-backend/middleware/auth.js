import User from '../models/user'

export const createUser = async (ctx) => {
  let { username, password } = ctx.request.body

  const newUser = {
    username,
    password
  }

  await User.create(newUser)
    .then((newUser) => {
      ctx.response.status = 200
      ctx.body = {
        message: "User Created Successfully",
        newUser
      }
    })
    .catch((err) => {
      ctx.response.status = 400
      ctx.body = {
        message: "User Create Error",
        err
      }
    })
};


export const loginUser = async (ctx) => {

  let { username, password } = ctx.request.body;


  await User.findOne({
    username: username,
    password: password
  }).then((user) => {
    ctx.response.status = 200
    ctx.body = {
      message: "User Logged In Successfully",
      user
    }
  }).catch((err) => {
    ctx.response.status = 400
    ctx.body = {
      message: "User Create Error",
      err
    }
  })

}
