import Link from "next/link";
import { redirect } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { register } from "@/utils/actions";
import { getSession } from "@/utils/getSession";

const Register = async () => {
  const session = await getSession();
  const user = session?.user;

  if (user) redirect("/");

  return (
    <div className="my-4 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border border-[#121212]  dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to MyShop
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Please provide all the necessary information
      </p>

      <form className="my-8" action={register}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <div className="flex flex-col">
            <Label htmlFor="firstname" className="mb-2">
              First Name
            </Label>
            <Input
              id="firstname"
              placeholder="Peter"
              type="text"
              name="firstname"
              required
            />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="lastname" className="mb-2">
              Last Name
            </Label>
            <Input
              id="lastname"
              placeholder="Obi"
              type="text"
              name="lastname"
              required
            />
          </div>
        </div>

        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          placeholder="peterobi@gmail.com"
          type="email"
          name="email"
          required
        />

        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          placeholder="***********"
          type="password"
          name="password"
          className="mb-5"
          required
        />

        <button className=" hover:bg-indigo-600  relative bg-neutral-800 block  w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]">
          Sign up &rarr;
        </button>

        <p className="text-black text-sm max-w-sm mt-2 ">
          Already have an account?{" "}
          <Link
            href="/login"
            className="hover:underline hover:text-blue-600 font-bold"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
