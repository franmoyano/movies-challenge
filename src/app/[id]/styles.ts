export const styles = {
  container: {
    border: '2px solid',
    borderColor: '#DDD',
    borderRadius: '8px',
    margin: '0px',
    width: '100%',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'row',
    gap: '20px'
  },
  image: {
    borderRadius: '6px',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
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
  })
}