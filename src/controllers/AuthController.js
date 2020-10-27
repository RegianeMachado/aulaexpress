// const router = require("../routes");

const Sequelize = require('sequelize');

const configDatabase = require('../config/database');

const connection = new Sequelize(configDatabase);

const AuthController = {

    async index(req, res){

        const usuarios = await connection.query("Select * from users");

        return res.send(usuarios)
    },

    show(req, res){
        console.log('oi')
    },

    async store(req, res){
        const { name, email, password } = req.body
        const now = new Date();

        const [idUser, err] = await connection.query(`INSERT INTO users (name, email, password, createdAt, updatedAt) 
                                                VALUES ( $name, $email, $password, $createdAt, $updatedAt ) `, {
                                                bind: { name, email, password,  createdAt: now, updatedAt: now}
        })

        if(!err) {
            return res.status(400).json({details:"Usuario não criado, tente novamente!"})
        }

        return res.status(201).json({id:idUser, name, email})
    },

    update(req, res){
        console.log('oi')
    },

    delete(req, res){
        console.log('oi')
    },
}

module.exports = AuthController;