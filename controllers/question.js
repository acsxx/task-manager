const getAllQuestions = (req,res,next) => {

    res.status(200).json({
        succes: true
    });
}

module.exports = {
    getAllQuestions
}