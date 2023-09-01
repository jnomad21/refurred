const Dog = require('../../models/dogs')
const Breeder = require('../../models/breeder')

module.exports = {
    index,
    create,
    detail,
    deleteDog,
    update,
    edit,
    breederCreate,
    breederIndex,
    breederDetail,
    breederEdit,
    breederUpdate,
}

async function index(req, res){
    try{
        // const userId = req.user._id;
        const dogs = await Dog.find().sort('breed');        
        res.status(200).json(dogs)
    }catch(err){
        res.status(400).json(err)
    }
}

async function create(req, res){
    try{
        // req.body.uploaded_by = req.user._id;
        const newDog = await Dog.create(req.body);
        console.log(req.body)
        res.status(201).json(newDog)
    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

async function detail(req, res){
    try{
        const dog = await Dog.findById(req.params.id)
        res.status(200).json(dog)
    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

async function deleteDog(req, res){
    try{
        await Dog.findByIdAndDelete(req.params.id)
        res.status(200).json({
            data: 'success'
        })
    }catch(err){
        res.status(400).json(err)
    }
}

async function update(req, res){
    try{
        const updatedDog = await Dog.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedDog)
    }catch(err){
        console.log(err);
        res.status(400).json('Bad Request')
    }
}

async function edit(req, res){
    try{
        const dog = await Dog.findById(req.params.id)
        res.status(200).json(dog)
    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}async function breederCreate(req, res){
    try{
        // req.body.uploaded_by = req.user._id;
        const newBreeder = await Breeder.create(req.body);
        console.log(req.body)
        res.status(201).json(newBreeder)
    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}
async function breederIndex(req, res){
    try{
        // const userId = req.user._id;
        const breeders = await Breeder.find();        
        res.status(200).json(breeders)
    }catch(err){
        res.status(400).json(err)
    }
}

async function breederDetail(req, res){
    try{
        const breeder = await Breeder.findById(req.params.id)
        res.status(200).json(breeder)
    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}
async function breederEdit(req, res){
    try{
        const breeder = await Breeder.findById(req.params.id)
        res.status(200).json(breeder)
    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}
async function breederUpdate(req, res){
    try{
        const updatedBreeder = await Breeder.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedBreeder)
    }catch(err){
        console.log(err);
        res.status(400).json('Bad Request')
    }
}




