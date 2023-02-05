import clientPromise from "../mongodb";

export const getUserByEmail = async (email: string) => {
    const mongoClient = await clientPromise;

    const data = await mongoClient.db("test").collection('users').findOne({
        email
    });
    console.log("data", data);
    return data;
}