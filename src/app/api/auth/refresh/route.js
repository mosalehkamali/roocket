import { tokenGenrator, verifyRefreshToken } from "@/utils/auth";
import userModel from "base/models/User";
import { cookies } from "next/headers";

export async function GET() {
  try {
    const refreshToken = cookies().get("refreshToken")?.value;

    if (!refreshToken) {
      return Response.json({ message: "Token Missing !!!" }, { status: 401 });
    }

    const tokenPayload = verifyRefreshToken(refreshToken);

    if (!tokenPayload) {
      return Response.json({ message: "Invalid Token !!!" }, { status: 401 });
    }

    const user = await userModel.findOne({ refreshToken });

    if (!user) {
      return Response.json({ message: "User not found" }, { status: 404 });
    }

    const token = tokenGenrator({ email: user.email });

    return Response.json({message:"Token Refreshed Successfully"},{
      status:200,
      headers:{"Set-Cookie":`token=${token};path=/;httpOnly=true`}
    })

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
