import { SxProps, Theme } from "@mui/material"

export const styles = {
  container: (color?: string, sx?: SxProps<Theme>) => ({
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: `3px solid ${color}`,
    ...sx
  }),
  typography: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#FFF'
  },
  percent: {
    fontSize: '12px'
  }
}