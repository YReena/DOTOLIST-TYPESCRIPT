import express,{Request, Response} from 'express';
const router = express.Router();
import {Addlist,Getlist,deleteItem} from '../service/item.service';

router.post("/addlist", async(req : express.Request, res: express.Response) => {
try {
    const { item } = req.body;
    if (!item) {
        res.status(422).json({ "error": "please fill all fields" });
    }
    else {
        const expData = await Addlist({item});
        if (expData) {
            res.status(201).json({ "message": "Sucessfully Save" });
        }
        res.status(422).json({ "error": " failed to add" });
       
    }
}
catch (err:any) {
    console.log(err);
}
});

router.get("/getlist", async( req :Request ,res : Response) => {
    try {
       
       const getlst = await Getlist();
       if (getlst) {
        res.status(201).json(getlst);
    }
    res.status(422).json({ "error": "not found" });

  }
  catch (err) {
      console.log(err);
  }
  });

  router.delete('/deleteitem/:id', async( req :Request ,res : Response)=>{
    try{
        const deldata = await deleteItem(req.params.id);
        console.log(deldata);
        if (deldata) {
            console.log(deldata);
            res.status(201).json(deldata);
        }
        res.status(204).json({ "error": "not found" });
    }
    catch(error){
        console.log(error);
    }
  })

module.exports = router;