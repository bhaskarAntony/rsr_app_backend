
const AllRoutes = require('../models/allRoutes')

exports.PostRoute = async (req, res) =>{
    const data = req.body;
    try {
        const newRoute = new AllRoutes(data);
        await newRoute.save();
        res.status(201).json({message:"created new route", data:newRoute});
    } catch (error) {
        res.status(500).json({message:'Internal server error', data:error})
    }
}
exports.getAllRoutes = async(req, res) =>{
    try {
        const routes = await AllRoutes.find();
        res.status(200).json({message:"All routes", data:routes});
    } catch (error) {
        res.status(500).json({message:'Internal server error', data:error})
    }
}

exports.getRouteById = async(req, res) =>{
    const id = req.params.id;
    try {
        const route = await AllRoutes.findById(id);
        if(!route) return res.status(404).json({message:"Route not found", data:null});
        res.status(200).json({message:"Route found", data:route});
    } catch (error) {
        res.status(500).json({message:'Internal server error', data:error})
    }
}