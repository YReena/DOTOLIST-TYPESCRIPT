import mongoose  from 'mongoose';
export interface userinput {
  item : string
}

export interface IListDocument extends userinput, mongoose.Document{
  item : string
}



// 2. Create a Schema corresponding to the document interface.
const userSchema = new mongoose.Schema({
 item :{
    type : String
 }
});

// 3. Create a Model.
const ListItem = mongoose.model('DBLIST', userSchema);

export default ListItem ;



