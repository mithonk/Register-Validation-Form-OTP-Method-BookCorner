import jwt from 'jsonwebtoken'

const generateToken = (_id, role) => {
  return jwt.sign({ _id, role }, 'secret', {
    expiresIn: '1d',
  })
}

export default generateToken
