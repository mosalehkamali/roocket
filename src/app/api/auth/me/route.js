import { verifyToken } from "@/utils/auth";
import connectToDB from "base/configs/db";
import userModel from "base/models/User";
import { cookies } from "next/headers";

export async function GET(req) {
  try {
    await connectToDB();
    const token = cookies().get("token")?.value;

    if (!token) {
      return Response.json({ message: "Token Missing" }, { status: 401 });
    }

    const tokenPayload = verifyToken(token);

    if(!tokenPayload){
        return Response.json({ message: "Invalid Token" }, { status: 401 });
    }

    const user = await userModel.findOne({ email: tokenPayload.email });

    if (!user) {
        return Response.json({ message: "User not found !!" }, { status: 404 });
      }

    return Response.json(user)

  } catch (err) {
    console.log(err);
    return Response.json(
      { message: "UnKnown Internal Server Error !!" },
      {
        status: 500,
      }
    );
  }
}
