const getTodaysDate = () => {
    const now = new Date();
    const dateOptions = {month: '2-digit', day: '2-digit', year: 'numeric'}
    return new Intl.DateTimeFormat('en-US', dateOptions).format(now)
  }

  export default getTodaysDate;