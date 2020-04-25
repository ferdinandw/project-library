const Library = require('./../models/Library')

module.exports = {
    create: ((req,res,next) => {
        Library.create({
            title: req.body.title,
            year: req.body.year,
            number: req.body.number,
            status: req.body.status
        }), ((err,result) => {
            if(err) next(err)
            else{
                res.json({data: result})
            }
        })
    }),
    getData : ((req,res,next) => {
        Library.find({}) .then(result => {
            res.json({data: result})
        }) .catch(err => (err))
    }),
    getDataById : ((req,res,next) => {
        Library.findById(req.params.libraryId)
        .then(result => res.json(result))
        .catch(err => res.json(err))
    }),
    deleteById : ((req,res,next) => {
        Library.findByIdAndRemove(req.params.libraryId)
        .then(result => res.json(result))
        .catch(err => res.json(err))
    }),
    editDataById : ((req,res,next) => {
        Library.findByIdAndUpdate(req.params.libraryId, {
            title: req.body.title,
            year: req.body.year,
            number: req.body.number,
            status: req.body.status
        })
        .then(result => res.json(result))
        .catch(err => res.json(err))
    })
}