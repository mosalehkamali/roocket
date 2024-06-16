import {
  hasher,
  refreshTokenGenrator,
  tokenGenrator,
  validateEmail,
  validatePassword,
} from "@/utils/auth";
import connectToDB from "base/configs/db";
import userModel from "base/models/User";

export async function POST(req) {
  try {
    await connectToDB();
    const { username, email, password, confirmPassword } = await req.json();

    if (
      !username.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
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

    if (user) {
      return Response.json(
        { message: "User with this email is already exist !!" },
        { status: 409 }
      );
    }

    if (password !== confirmPassword) {
      return Response.json(
        { message: "Invalid Data : Confirm Password is not match !!" },
        {
          status: 422,
        }
      );
    }

    if (!validatePassword(password)) {
      return Response.json(
        { message: "Invalid Data : Password is not valid !!" },
        {
          status: 422,
        }
      );
    }

    const hashedPassword = await hasher(password);

    const users = await userModel.find({});

    await userModel.create({
      username,
      email,
      password: hashedPassword,
      role: users.length > 0 ? "USER" : "ADMIN",
    });

    const token = tokenGenrator({ email });
    const refreshToken = refreshTokenGenrator({ email });

    const headers = new Headers();

    headers.append("Set-Cookie", `token=${token};path=/;httpOnly=true`);
    headers.append(
      "Set-Cookie",
      `refreshToken=${refreshToken};path=/;httpOnly=true`
    );

    return Response.json(
      { message: "User registered successfully :))" },
      {
        status: 201,
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
