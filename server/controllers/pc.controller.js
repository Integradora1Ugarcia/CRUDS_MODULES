const Pc = require('../models/pc');
const pcCtrl = {};

pcCtrl.getPcs = async (req, res) => {
    const pcs = await Pc.find();
    res.json(pcs);
};

pcCtrl.createPc = async (req, res) => {
    const pc = new Pc({
        model: req.body.model,
        mark: req.body.mark,
        year: req.body.year,
        os: req.body.os
    });
    await pc.save();
    res.json({
        'status': 'Pc guardada'
    });
    //console.log(req.body);
    //res.json('Received');
};

pcCtrl.getPc = async (req, res) => {
    const pc = await Pc.findById(req.params.id);
    res.json(pc);
};

pcCtrl.editPc = async (req, res) => {
    const {id} = req.params;
    const pc = {
        model: req.body.model,
        mark: req.body.mark,
        year: req.body.year,
        os: req.body.os
    };
    await Pc.findByIdAndUpdate(id, {$set: pc}, {new: true});
    res.json({status: 'Pc eliminada'});
};

pcCtrl.deletePc = async (req, res) => {
    await Pc.findByIdAndRemove(req.params.id);
    res.json({status: 'Pc eliminada'});
};

module.exports = pcCtrl;