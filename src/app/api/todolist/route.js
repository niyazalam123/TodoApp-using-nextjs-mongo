import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { TodoListModel } from "../../../utils/model/todoList";

export async function GET() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        let todos = await TodoListModel.find();
        return NextResponse.json({ todos, success: true }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "error", error }, { status: 400 })
    }
}

export async function POST(req, content) {
    try {
        let payLoad = await req.json();
        await mongoose.connect(process.env.MONGODB_URI);
        let todoData = await TodoListModel(payLoad);
        let result = todoData.save();
        return NextResponse.json({ result, success: true }, { status: 200 })
    } catch (error) {
        return NextResponse.json({message:"error",error},{status:400})
    }
}