import { IconType } from ".";

export const ChevronIcon = ({ size = 25, color = "#000" }: IconType) => (
  <svg width={size} height={size} fill="none" viewBox="0 0 24 24">
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m6 9 6 6 6-6"
    />
  </svg>
);
