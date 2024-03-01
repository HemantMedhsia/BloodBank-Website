const testController  = (req,res) => {
    res.status(200).send({
        message: "test route",
        success: true,
    });
}

module.exports = {testController};