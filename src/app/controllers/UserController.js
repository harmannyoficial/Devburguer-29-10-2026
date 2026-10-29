/*  Controller é usado para controlar acesso do usuarios 

store - cria usuario , dados ou recursos 
index - lista todos os dados  (tras todos os usuarios ou produtos)
show - lista os dados expecificos (traz usuarios e produtos especificos )
update - atualiza dados 
delete - deleta informações e dados 
  */

import { v4 } from 'uuid';
import * as Yup from 'yup';
import User from '../models/User.js';

class UserController {
  async store(request, response) {
    const schema = Yup.object({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password_hash: Yup.string().min(3).required(),
      admin: Yup.boolean(),
    });

    try {
      schema.validateSync(request.body, { abortEarly: false, strict: true });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    const { name, email, password_hash, admin } = request.body;

    const existingUser = await User.findOne({
      where: {
        email,
      },
    });

    if (existingUser) {
      return response
        .status(400)
        .json({ mensagem: ' Este E-mail de usuário já extiste ' });
    }

    const user = await User.create({
      id: v4(),
      name,
      email,
      password_hash,
      admin,
    });

    return response.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
      admin: user.admin,
    });
  }
}

export default new UserController();
