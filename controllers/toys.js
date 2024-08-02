import { Toy } from "../models/toys.js";


async function index(req, res) {
    //look up things
    //render index
    res.render('toys/index')
}


export {
    index
}