import ListItem ,{IListDocument, userinput} from "../model/listSchema";

export async function Addlist(item : userinput){
    try{
        return await ListItem.create(item);
    }
    catch(error){
        console.log(error);
    }
}

export async function Getlist (){
    try{

        return await ListItem.find();
    }
    catch(error){
        console.log(error);
    }
}

export async function deleteItem(id : String){
    try{
      return await ListItem.deleteOne({_id : id});
    }
    catch(error){
        console.log(error);
    }
} 