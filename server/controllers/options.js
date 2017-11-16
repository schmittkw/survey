const mongoose = require('mongoose');
const Option = mongoose.model('Option');

class OptionsController {
    update(req, res){
        // finds option and increments by +1...could also increment by -1
        Option.findByIdAndUpdate(req.params.id, { $inc: { vote: 1 } }, { new: true }, (err, option) => {
            if(err){
                return res.json(err);
            }
            return res.json(option);
        })
    }
    show(req,res){
        Option.findById(req.params.id, (err, option) => {
            if (err){
                return res.json(err)
            }
            return res.json(option);
        })
    }
}

module.exports = new OptionsController();