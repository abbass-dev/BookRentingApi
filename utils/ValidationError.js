class ValidationError extends Error {
    constructor(message, errors=[]) {
      super(message)
      this.name = 'ValidationError'
      console.log(errors)
      this.Errors = Array.isArray(errors)? errors : [errors]
    }
  }
  
export default ValidationError