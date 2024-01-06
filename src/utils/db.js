let {username,password}=process.env; 
export const connectionSrt="mongodb+srv://"+username+":"+password+"@cluster0.lcuk577.mongodb.net/productDB?retryWrites=true&w=majority"