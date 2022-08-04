import { c32addressDecode } from 'c32check';
export const validateStacksAddress = (stacksAddress) => {
    try {
        c32addressDecode(stacksAddress);
        return true;
    }
    catch (e) {
        return false;
    }
};
