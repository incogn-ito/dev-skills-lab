import { Toy } from "../models/toys.js";


async function index(req, res) {
    //look up things
    const toys = await Toy.find({})

    res.render('toys/index', {
        toys
    })
}

async function newToy(req, res) {
    res.render('toys/new')
}

async function create(req, res) {
    const newToy = await Toy.create(req.body)
    console.log(newToy)
    res.redirect('/toys')    
}


export {
    index,
    newToy as new,
    create
}