import { redirect } from "next/navigation";
import { fetchAllUsers } from "@/utils/actions";
import { getSession } from "@/utils/getSession";
import { User } from "@/utils/modelUser";

type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  __v: number;
};

const Settings = async () => {
  const session = await getSession();
  const user = session?.user;

  if (!user) return redirect("/login");

  const allUsers = await fetchAllUsers();
  const allUsers2: User[] = JSON.parse(JSON.stringify(allUsers))

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Credential Users</h1>
      <table className="w-full rounded shadow">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2">First Name</th>
            <th className="p-2">Last Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {allUsers2?.map((user) => (
            <tr key={user._id}>
              <td className="p-2">{user.firstName}</td>
              <td className="p-2">{user.lastName}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">
                <form
                  action={async () => {
                    "use server";
                    await User.findByIdAndDelete(user._id);
                     redirect("/settings");
                  }}
                >
                  <button className="px-2 py-1 text-red-500 hover:bg-red-100 rounded focus:outline-none">
                    Delete
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Settings;
