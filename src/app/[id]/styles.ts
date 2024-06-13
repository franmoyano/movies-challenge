export const styles = {
  mainBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'center'
  },
  container: (direction: string) => ({
    border: '2px solid',
    borderColor: '#DDD',
    borderRadius: '8px',
    margin: '0px',
    width: '100%',
    padding: '2rem',
    display: 'flex',
    flexDirection: direction,
    gap: '20px',
    justifyContent: 'center'
  })
}