import mongoose from "mongoose";

const todoModelScema= new mongoose.Schema({
   title:String,
   description:String
})

export const TodoListModel = mongoose.models.todoModels || mongoose.model("todoModels",todoModelScema)