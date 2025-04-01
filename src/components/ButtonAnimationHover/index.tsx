import { motion } from "framer-motion";
import { Link } from "./styles";

interface Props {
  handleTheme?: () => void;
  text: string;
  link: string;
  mobile?: boolean;
  active?: boolean;
}

export function ButtonAnimationHover({
  handleTheme = () => {},
  text,
  link,

  active = false,
}: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.0 }}
      whileTap={{ scale: 0.98 }}
      style={{ position: "relative", overflow: "hidden" }}
    >
      <Link
        href={link}
        onClick={handleTheme}
        className={active ? "active" : ""}
      >
        {text}
      </Link>
    </motion.div>
  );
}
