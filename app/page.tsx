import SignOut from "@/components/auth/SignOutButton";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link
        href="/protected"
        prefetch={false} // workaround until https://github.com/vercel/vercel/pull/8978 is deployed
        className="mr-5"
      >
        Protected Page
      </Link>

      <SignOut />
    </div>
  );
}
