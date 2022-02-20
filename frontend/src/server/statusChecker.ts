import { StatusCodes } from 'http-status-codes';

const statusChecker = (status: number): Boolean => {
    if (status !=  StatusCodes.OK) {
        console.error(`Bad status : ${status}`);
        return false;
    }
    return true;
}

export default statusChecker;
