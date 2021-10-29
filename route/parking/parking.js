const express = require('express')
const router = express.Router();

const database = require('../../config');

function responseFormat(status,msg,data){
    return{
        status: status,
        msg: msg,
        data: data
    }
};

router.get('/', function(req,res){
    database.ref('building').on('value',function(snapshot,err){
        const data = snapshot.val();

        if (err) {
            console.error(err);
            return err;
        }
        else{
            console.log(data);
            return res.json(data);
        }
    });
})



router.get('/:id', function(req,res){
    var id= req.params.id;
    database.ref('floor_info/'+id).on('value',function(snapshot,err){
        const data = snapshot.val();

        if (err) {
            console.error(err);
            return err;
        }
        else{
            console.log(data);
            return res.send(responseFormat(true,"",data));
        }
    });
})

router.get('/floor/:id', function(req,res,next){
    var id= req.params.id;

    database.ref('ParkingArea/'+id).on('value',function(snapshot,err){
        const data = snapshot.val();

        if (err) {
            console.error(err);
            return err;
        }
        else{
            try{
                console.log(data);
                return res.json(responseFormat(true,"",data));
            }catch(err){
                next();
            }
        }
    });
})

router.get('/ParkingArea/:id/:AreaId', function(req,res){
    var id= req.params.id;
    var AreaId=req.params.AreaId;

    database.ref('ParkingArea/'+id+'/'+AreaId).on('value',function(snapshot,err){
        const data = snapshot.val();

        if (err) {
            console.error(err);
            return err;
        }
        else{
            try{
                console.log(data);
                 return res.json(responseFormat(true,"",data));
            }catch(err){
                next();
            }
        }
    });
})

module.exports = router;