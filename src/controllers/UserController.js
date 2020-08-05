const UserModel = require('../models/UserModel');

class UserController{
  //Create User Forma 1
  async create_1(req, res){
    const user = new UserModel(req.body);
    await user.save()
    .then(response => {
      return res.status(200).json(response);
    })
    .catch(error => {
      return res.status(500).json(error);
    })
  }

  //Create User Forma 2
  async create_2(req, res){
    const newUser = {
      nome: req.body.nome,
      email: req.body.email,
      senha: req.body.senha,
      eAdmin: req.body.eAdmin,
      created: req.body.created
    }
    const user = new UserModel(newUser);
    await user.save()
    .then(response => {
      return res.status(200).json(response);
    })
    .catch(error => {
      return res.status(500).json(error);
    })
  }

  //Update User
  async update(req, res){
    await UserModel.findByIdAndUpdate({'_id': req.params.id}, req.body, {new: true})
    .then(response => {
      return res.status(200).json(response);
    })
    .catch(error => {
      return res.status(500).json(error);
    })
  }

  //Delete User
  async delete(req, res){
  await UserModel.deleteOne({'_id': req.params.id})
  .then(response => {
    return res.status(200).json(response);
  })
  .catch(error => {
    return res.status(500).json(error);
  })
  }

  //Read All
  async all(req, res){
  await UserModel.find()
  .sort('nome')//organizando por nome
  .then(response => {
    return res.status(200).json(response);
  })
  .catch(error => {
    return res.status(500).json(error);
  })
  }

  //Read by Name
  async name(req, res){
  const searchRegex = new RegExp(req.params.name);
  await UserModel.find({'nome': searchRegex}).limit(10)
  .then(response => {
    if(response){
      return res.status(200).json(response);
    }else{
      return res.status(404).json({error: 'Usuário não encontrado'});
    }
  })
  .catch(error => {
    return res.status(500).json(error);
  })
  }

  //Read by Id
  async id(req, res){
  await UserModel.findById(req.params.id)
  .then(response => {
    if(response){
      return res.status(200).json(response);
    }else{
      return res.status(404).json({error: 'Usuário não encontrado'});
    }
  })
  .catch(error => {
    return res.status(500).json(error);
  })
  }

  //Read by E-mail
  async email(req, res){
  const searchRegex = new RegExp(req.params.email);
  await UserModel.findOne({'email': searchRegex})
  .then(response => {
    if(response){
      return res.status(200).json(response);
    }else{
      return res.status(404).json({error: 'Usuário não encontrado'});
    }
  })
  .catch(error => {
    return res.status(500).json(error);
  })
  }


}

module.exports = new UserController();
