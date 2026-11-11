import { Image } from "./Image";
import { Link } from "./Link";
import logo from "../img/logo.jpg";

export function Logo() {
  return (
    <Link>
      <Image src={logo} alt={"logo"} />
    </Link>
  );
}
