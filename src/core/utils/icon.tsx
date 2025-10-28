import { TIcons } from "@/types/icons";

function Icon({
  name,
  className,
  fill = "currentColor",
  stroke = "none",
}: TIcons) {
  return (
    <svg className={className} fill={fill} stroke={stroke}>
      <use href={`/svg/sprite.svg#${name}`}></use>
    </svg>
  );
}

export default Icon;
