const getProductosById = (id)=>{
    return new Promise(async(resolve)=>{
        const objectId = new ObjectId(id);
        let result = await productos.find({ "_id": objectId}).toArray();
        resolve(result);
    })
};
const getProductosAll = ()=>{
    return new Promise(async(resolve)=>{
        let result = await productos.find({}).toArray();
        resolve(result);
    })
};