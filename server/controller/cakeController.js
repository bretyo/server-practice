module.exports = {
    getCakes: (req,res)=>{
        const db = req.app.get('db');
        db.cakes.get_cakes()
        .then(cakes=>{
            res.status(200).send(cakes);
        })
        .catch(err=>{
            console.log(err);
            res.status(500).send(err)
        })
    },
    addCake: (req,res)=>{},
    editCake: (req,res)=>{},
    deleteCake: (req,res)=>{},
}