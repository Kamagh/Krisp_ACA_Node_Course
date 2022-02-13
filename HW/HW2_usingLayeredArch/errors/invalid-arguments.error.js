export default class InvalidArgumentsError extends Error{
    constructor(message = 'Invalid Argument') {
        super(message);
    }
}