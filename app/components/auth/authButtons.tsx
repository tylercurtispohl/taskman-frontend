import { getSession } from "@auth0/nextjs-auth0";
import { Button, Link } from "@nextui-org/react";

export const AuthButtons = async () => {
  const session = await getSession();
  const user = session?.user;

  return (
    <>
      {user ? (
        <Button as={Link} href="/api/auth/logout" color="primary">
          Logout
        </Button>
      ) : (
        <Button as={Link} href="/api/auth/login" color="primary">
          Login
        </Button>
      )}
    </>
  );
};
