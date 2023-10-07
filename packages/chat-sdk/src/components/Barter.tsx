import { IconButton } from "@mui/material";
import { BarterIcon } from "@coral-xyz/react-common";
import { styles, useCustomTheme } from "@coral-xyz/themes";
import { useChatContext } from "./ChatContext";

export const useStyles = styles((theme) => ({}));

export const Barter = ({ buttonStyle }: any) => {
  const theme = useCustomTheme();
  const { setOpenPlugin } = useChatContext();

  const toggleBarterPlugin = () => {
    setOpenPlugin((prevPlugin) =>
      prevPlugin.type === "barter"
        ? { type: "", metadata: {} }
        : { type: "barter", metadata: {} }
    );
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
      <IconButton
        size="small"
        sx={{
          color: theme.custom.colors.icon,
          "&:hover": {
            background: `${theme.custom.colors.avatarIconBackground} !important`,
          },
        }}
        style={buttonStyle}
        onClick={toggleBarterPlugin}
      >
        <BarterIcon fill={theme.custom.colors.icon} />
      </IconButton>
    </div>
  );
};
