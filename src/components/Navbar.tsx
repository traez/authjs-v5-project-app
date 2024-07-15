import Link from "next/link";
import { Button } from "./ui/button";
import { logout } from "@/utils/actions";
import { getSession } from "@/utils/getSession";

const Navbar = async () => {
  const session = await getSession();
  //console.log(session);
  const user = session?.user;

  return (
    <nav className="flex flex-col sm:flex-row justify-around items-center py-4 bg-[#141414] text-white">
      <Link href="/" className="text-xl font-bold">
        Trae&apos;s Fancy Website
      </Link>

      <ul className="flex space-x-4 list-none">
        <>
          {!user && (
            <>
              <li>
                <Link href="/login" className="hover:text-gray-400">
                  Login
                </Link>
              </li>

              <li>
                <Link href="/register" className="hover:text-gray-400">
                  Register
                </Link>
              </li>
            </>
          )}

          {user && (
            <>
              <li className="mt-2">
                <Link href="/settings" className="hover:text-gray-400">
                  Settings
                </Link>
              </li>
              <form action={logout}>
                <Button type="submit" variant={"ghost"}>
                  Logout
                </Button>
              </form>
            </>
          )}
        </>
      </ul>
    </nav>
  );
};

export default Navbar;
