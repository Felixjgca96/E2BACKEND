import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect('mongodb+srv://felixjgca:EdXl1QAh59kcOXWz@cluster0.krzalrv.mongodb.net/?retryWrites=true&w=majority')
        console.log('Online database')
    } catch (error) {
        console.log(error);
        throw new Error('Error starting database')
    };
}