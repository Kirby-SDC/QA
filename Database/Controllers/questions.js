
const allQ = (req, res, next) => {
  res.json({message: 'Get all questions'});

}

module.exports = {allQ}