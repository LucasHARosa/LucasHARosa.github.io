import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "./styles";

interface Props {
  handleTheme?: () => void;
  text: string;
  link: string;
  mobile?: boolean;
}

export function ButtonAnimationHover({
  handleTheme = () => {},
  text,
  link,
  mobile = false,
}: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      style={{ position: "relative", overflow: "hidden" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={link} onClick={handleTheme}>
        {text}
      </Link>
      {isHovered && mobile === false && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 2,
            background: "#3b82f6",
            transformOrigin: "left",
          }}
        />
      )}
    </motion.div>
  );
}
