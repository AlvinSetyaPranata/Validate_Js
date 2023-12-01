const customMessage = {}


class FetchValidation extends Message {
    constructor(promise) {
        super()

        this.customMessage = customMessage || {};
        this.errors = {};
        this.listeners = {}

        this.promise = promise
    }

    // set handler to handle a response with specific status code
    setListener(status_code, callback){
        this.listeners[status_code] = callback
    }

    async fetchApi() {
        // call the promise
        try {
            const response = await this.promise()

            if (this.listeners.hasOwnProperty(response.status)) {
                this.listeners[response.status]() // Call the callback
            }

        } catch(error) {
            throw error
        }

    }

}