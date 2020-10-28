# Requisitos de autenticação

# login

- Rota será "/login"
- Que deverá receber: {
  email,
  senha
  }

- A senha deverá ser criptografada utilizando a biblioteca bcryptjs

- Validar se email e senha confere, caso tenha problemas sempre retornar um feedback ao usuario, informando o error em si.

- Caso login sucesso você deverá devolver um status 204

# pensar em forma de reset de senha
