const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className="addedMessage">
        {message}
      </div>
    )
  }

  export default Notification