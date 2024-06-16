import {
  passwordValidator,
  refreshTokenGenrator,
  tokenGenrator,
  validateEmail,
} from "@/utils/auth";
import userModel from "base/models/User";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email.trim() || !password.trim()) {
      return Response.json(
        { message: "Invalid Data : Empty Field !!" },
        {
          status: 422,
        }
      );
    }

    if (!validateEmail(email)) {
      return Response.json(
        { message: "Invalid Data : Email is not valid !!" },
        {
          status: 422,
        }
      );
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return Response.json({ message: "User not found !!" }, { status: 404 });
    }

    const isValidPassword = await passwordValidator(password, user.password);

    if (!isValidPassword) {
      return Response.json(
        { message: "Invalid email or password !!" },
        { status: 401 }
      );
    }

    const token = tokenGenrator({ email });
    const refreshToken = refreshTokenGenrator({ email });

    const headers = new Headers();

    headers.append("Set-Cookie", `token=${token};path=/;httpOnly=true`);
    headers.append(
      "Set-Cookie",
      `refreshToken=${refreshToken};path=/;httpOnly=true`
    );

    return Response.json(
      { message: "User Logged in successfully :))" },
      {
        status: 200,
        headers,
      }
    );
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
