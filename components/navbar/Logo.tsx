import Link from "next/link";
import { FaStaylinked } from "react-icons/fa";
import { Button } from "../ui/button";

function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <FaStaylinked className="w-6 h-6" />
      </Link>
    </Button>
  );
}

export default Logo;
