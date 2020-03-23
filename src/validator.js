const { check, validationResult } = require('express-validator');

const createUserValidation = () => {
  return [
    check('email').isEmail().withMessage("'email' invalido."),
    check('senha', "'senha' deve conter ao menos 5 digitos.").not().isEmpty().isLength({min: 5}),
    check('cpf').not().isEmpty(),
    check('nome', "'nome' deve conter ao menos 3 caracteres.").not().isEmpty().isLength({min: 3})
  ]
}

const updateUserValidation = () => {
  return [
    check('email').not().isEmpty(),
    check('new_username', "'new_username' deve conter ao menos 3 caracteres.").not().isEmpty().isLength({min: 3})
  ]
}

const deleteUserValidation = () => {
  return [
    check('email').not().isEmpty(),
  ]
}

const loginValidation = () => {
  return [
    check('email').not().isEmpty(),
    check('senha').not().isEmpty(),
  ]
}



const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
  }
  return next()
  
}

module.exports = {
    createUserValidation,
    validate,
    updateUserValidation,
    deleteUserValidation,
    loginValidation,
  }