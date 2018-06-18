import { Enums } from "mrmkmcib-crm";
interface Error {
    type: Enums.ErrorType;
    code: string;
    message: string;
    comment: string;
}
export default Error;
