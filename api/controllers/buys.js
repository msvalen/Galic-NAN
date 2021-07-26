const Buys = require('../models/buys');

async function index (req, res) {
  try {
      const buys = await Buys.all;
      res.status(200).json(buys)
  } catch (err) {
      res.status(500).json({err})
  }
}


module.exports = { index }