import mongoose from "mongoose";
import { TodoListModel } from "../../../../utils/model/todoList"
import { NextResponse } from "next/server";

export async function PUT(request, content) {
    let id2 = content.params.id;
    let filter = {_id:id2};
    await mongoose.connect(process.env.MONGODB_URI);
    let payload = await request.json();
    let result = await TodoListModel.findOneAndUpdate(filter, payload);
    return NextResponse.json({ result, success: true }, { status: 200 })
}

export async function GET(content) {
    let id2 = content.params.id;
    let filter = {_id:id2};
    await mongoose.connect(process.env.MONGODB_URI);
    let data = await TodoListModel.findById(filter);
    return NextResponse.json({ data, success: true }, { status: 200 })
}

export async function DELETE(content){
    await mongoose.connect(process.env.MONGODB_URI);
    let id2 = content.params.id;
    let filter = {_id:id2};
    let data2 = await TodoListModel.deleteOne(filter);
    return NextResponse.json({data2,success:true},{status:200})
}