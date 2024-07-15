import { getSession } from "@/utils/getSession";

const Home = async () => {
  const session = await getSession();
  const user = session?.user;
  const expires: string = session?.expires ?? "";

  return (
    <>
      <div className="h-screen flex items-start justify-center pt-6">
        <div className="w-3/4">
          <div className="text-xl font-bold">Home page</div>
          <div className="mt-4">Install dey go</div>
          {user && (
            <div className="mt-6">
              <p className="text-lg">Email: {user.email}</p>
              <p className="text-lg">Expires: {new Date(expires).toLocaleString()}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
