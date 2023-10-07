import { useEffect, useRef } from "react";
import { BACKEND_API_URL } from "@coral-xyz/common";
import { useCustomTheme } from "@coral-xyz/themes";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { IconButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

export const Attachment = ({
  buttonStyle,
  onMediaSelect,
}: {
  buttonStyle: React.CSSProperties;
  onMediaSelect: (file: File) => void;
}) => {
  const theme = useCustomTheme();
  const hiddenInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (hiddenInputRef.current) {
      hiddenInputRef.current.onchange = () => {
        const selectedFile = hiddenInputRef.current?.files[0];
        if (selectedFile) {
          onMediaSelect(selectedFile);
        }
      };
    }
  }, [onMediaSelect]);

  const handleButtonClick = () => {
    hiddenInputRef.current?.click();
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
        onClick={handleButtonClick}
      >
        <Tooltip title="Attach">
          <AttachFileIcon style={{ color: theme.custom.colors.icon, fontSize: 20 }} />
        </Tooltip>
        <input
          onClick={(e) => {
            e.currentTarget.value = ""; // Clear the file input value on click
          }}
          ref={hiddenInputRef}
          type="file"
          id="hiddenAttachment"
          style={{ display: "none" }}
          accept=".mp4,.png,.jpg,.jpeg"
        />
      </IconButton>
    </div>
  );
};
