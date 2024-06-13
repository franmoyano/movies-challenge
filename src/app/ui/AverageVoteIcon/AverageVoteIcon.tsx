import { Box, SxProps, Theme, Typography } from "@mui/material"
import { styles } from "./AverageVoteIcon.styles"

interface Props {
  vote: number
  sx?: SxProps<Theme>
}

export const AverageVoteIcon = ({ vote, sx }: Props) => {

  const getButtonColor = (value: number) => {
    const red = Math.max(0, 255 - (value * 25.5));
    const green = Math.min(205, value * 25.5);
    return `rgb(${red},${green},0)`;
  }

  return (
    <Box sx={styles.container(getButtonColor(vote), sx)}>
      <Typography sx={styles.typography}>
        {Math.round(vote * 10)}<span style={styles.percent}>%</span>
      </Typography>
    </Box>
  )
}