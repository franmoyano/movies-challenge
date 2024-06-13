export const styles = {
  image: {
    borderRadius: '6px',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: '10px'
  },
  valorationContainer: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '10px'
  },
  valoration: (average: number) => ({
    backgroundColor: average >= 7 ? 'green' : 'red',
    color: '#FFF',
    borderRadius: '10px',
    width: '55px',
    height: '35px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }),
  tagLine: {
    fontStyle: 'italic'
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
