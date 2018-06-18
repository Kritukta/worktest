import {Enums} from "mrmkmcib-dashboard"

interface Error {
    type: Enums.ErrorType,
    code: string;
    message: string;
    comment: string;
}

export default Error;