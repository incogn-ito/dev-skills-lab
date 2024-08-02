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

async function deleteToy(req, res) {
    await Toy.findByIdAndDelete(req.params.toyId)
    res.redirect('/toys')
}

async function show(req, res) {
    const toy = await Toy.findById(req.params.toyId) 
    res.render('toys/show', {
        toy
    })
 }

 async function edit(req, res) {
    const toy = await Toy.findById(req.params.toyId)
    res.render('toys/edit', {
        toy
    })
 }

 async function update(req, res) {
    await Toy.findByIdAndUpdate(req.params.toyId, req.body,
    {new: true})
    res.redirect(`/toys/${req.params.toyId}`)
}
    
export {
    index,
    newToy as new,
    create,
    deleteToy as delete,
    show,
    edit,
    update
}