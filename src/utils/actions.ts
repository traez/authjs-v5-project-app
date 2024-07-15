"use server";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { signIn, signOut } from "@/auth";
import dbConnect from "@/utils/dbconnect";
import { User } from "@/utils/modelUser";

const register = async (formData: FormData) => {
  const firstName = formData.get("firstname") as string;
  const lastName = formData.get("lastname") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!firstName || !lastName || !email || !password) {
    throw new Error("Please fill all fields");
  }

  console.log(firstName, lastName, email, password);

  await dbConnect();

  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error("User already exists");

  const hashedPassword = await bcrypt.hash(password, 10);

  await User.create({ firstName, lastName, email, password: hashedPassword });
  console.log(`User created successfully 🥂`);

 
  redirect("/login");
};

const login = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const response = await signIn("credentials", {
      email,
      password,
      redirectTo: "/",
    });
    return response;
  } catch (err) {
    throw err;
  }
};

const socialLogin = async (formData: FormData) => {
  const action = formData.get("action");
  await signIn(action as string, { redirectTo: "/" });
};

const logout = async () => {
  await signOut({ redirectTo: "/" });
};

const fetchAllUsers = async () => {
  await dbConnect();
  const users = await User.find({});
  return users;
};

export { register, login, socialLogin, logout, fetchAllUsers };
