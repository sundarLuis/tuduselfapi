// const {getConnection} = require('../database')
// const {v4} = require('uuid')

const TOKEN = "api_webkhook_moddle"
const testWebHook = (req,res) => {

    res.status(200).json(req.body)
}

module.exports = {
    testWebHook,
}