let mongoose = require('mongoose')
let Jewel = mongoose.model('Jewel')

exports.get = (req, res, next) => {
    Jewel.find({ active: true }, 'name description price imageURI slug tags').then(data => {
        res.status(200).send(data)
    }).catch(e => {
        res.status(400).send({ message: "Não há produtos cadastrados", data: e })
    });
}

exports.getBySlug = (req, res, next) => {
    Jewel.findOne({
        slug: req.params.slug,
        active: true
    }, 'name description price imageURI slug tags').then(data => {
        res.status(200).send(data)
    }).catch(e => {
        res.status(400).send({ message: "Não há produtos cadastrados", data: e })
    });
}

exports.getByTag = (req, res, next) => {
    Jewel.find({
        tags: req.params.tag,
        active: true
    }, 'name description price imageURI slug tags').then(data => {
        if (data.length > 0) {
            res.status(200).send(data)
        } else {
            res.status(404).send({ message: "Não foram encontrados produtos" })
        }
    }).catch(e => {
        res.status(400).send({ message: "Não há produtos cadastrados", data: e })
    });
}

exports.post = (req, res, next) => {
    var jewel = new Jewel(req.body)
    jewel.save().then(x => {
        res.status(201).send({ message: 'Produto cadastrado com sucesso!' })
    }).catch(e => {
        res.status(400).send({ message: "Falha ao cadastrar o produto", data: e })
    });
}

exports.put = (req, res, next) => {
    const id = req.params.id
    res.status(200).send({
        id: id,
        item: req.body
    })
}

exports.delete = (req, res, next) => {
    res.status(200).send(req.body)
}