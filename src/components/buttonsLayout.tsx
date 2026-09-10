import { Button } from "@mantine/core";
type ButtonProps = {
  title: string;
  onClick: () => void;
  variant: "primary" | "secondary";
};
const ButtonLayout = ({ onClick, title, variant }: ButtonProps) => {
  return (
    <Button
      onClick={onClick}
      styles={{
        root: {
          backgroundColor: variant === "primary" ? "#81401F" : "#2C2C2C",
          color: variant === "primary" ? "#FFEBBC" : "#D4D4D4",
          fontSize: "14px",
          padding: "4px 40px",
          width: "200px",
        },
      }}
    >
      {title}
    </Button>
  );
};
export default ButtonLayout;
