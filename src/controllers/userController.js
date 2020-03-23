
const SchemaUser = require('./../schemas/schemaUser');
var jwt = require('jsonwebtoken');
require('dotenv-safe').config();
var crypto = require('crypto');
const { cpf } = require('cpf-cnpj-validator');

class User {
    constructor() {
        
      }
      
    createUser(req, res){
        //cria usuario com username e email
        
        if(!cpf.isValid(req.body.cpf)){
            return res.status(422).json({"error":"invalid 'cpf'"});
        }

        SchemaUser.findOne({$or: [
            {email: req.body.email},
            {cpf: req.body.cpf}
        ]})
        .then(result => {
            if(result){
                res.json({"error":result.email + " ou " + result.cpf +" já cadastrados"});
            }
            else{
                const newUser = new SchemaUser({
                    username: req.body.nome,
                    email: req.body.email,
                    removed: false,
                    cpf: req.body.cpf,
                    senha: crypto.createHash('md5').update(req.body.senha).digest('hex')
                    });
                
                    newUser
                    .save()
                    .then(result => {
                        res.json(result);
                    })
                    .catch(error => {
                        res.status(500).json(error);
                    });
            }
        })
        .catch(error => {
            res.status(500).json(error);
        });
    }

    showUsers(req, res) {
        //retorna todos os usuarios (não mostra o campo senha)
        SchemaUser.find({}, '-senha')
        .then(result => {
            res.json(result);
        })
        .catch(error => {
            res.status(500).json(error);
        });
    }
    findUser(req, res) {
        //busca usuario por email na query (não mostra o campo senha)
        SchemaUser.findOne({ email: req.query.email }, '-senha')
        .then(result => {
            res.json(result);
        })
        .catch(error => {
            res.status(500).json(error);
        });
    }
    
    findAndUpdate(req, res) {
        //busca por email e atualiza o username
        SchemaUser.findOneAndUpdate({ email: req.body.email },
            {username: req.body.new_username}
            )
        .then(result => {
            res.json(result);
        })
        .catch(error => {
            res.status(500).json(error);
        });
    }

    findAndDelete(req, res) {
        //busca por email e realizada uma remoção lógica
        SchemaUser.findOneAndUpdate({ email: req.body.email },
            {removed: true}
            )
        .then(result => {
            res.json(result);
        })
        .catch(error => {
            res.status(500).json(error);
        });
    }

    login(req, res) {
        //login com email e senha
        SchemaUser.findOne({ email: req.body.email })
        .then(result => {
            if(!result){
                return res.status(404).json({"error":"Usuario não encontrado ou senha invalida"});
            }
            if(result.senha === crypto.createHash('md5').update(req.body.senha).digest('hex')){
                var token = jwt.sign( {user: result.email}, process.env.SECRET, {
                    expiresIn: 300 // expires in 5min
                  });
                res.json({ auth: true, "token": token, "user": req.body.email });
            }
            else{
                res.status(404).json({"error":"Usuario não encontrado ou senha invalida"});
            }
            
        })
        .catch(error => {
            res.status(500).json(error);
        });
    }

    verifyJWT(req, res, next){
        //verifica pelo header 'Authorization'
        var token = req.get('Authorization');
        if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
        
        jwt.verify(token, process.env.SECRET, function(err, decoded) {
          if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
          // se tudo estiver ok, salva no request para uso posterior
          req.user = decoded.email;
          next();
        });
      }
}

module.exports = User;
