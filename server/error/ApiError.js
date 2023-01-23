class ApiError {

    constructor(status, message) {
        super();
        this.status = status
        this.message = message
    }

    static badRequest() {
        return new ApiError(404, message) 
    }
    
    static internalRequest() {
        return new ApiError(500, message) 
    }

    static forbiddenRequest() {
        return new ApiError(403, message) 
    }
}

module.exports = new ApiError()