import moment from "moment";

export const dateFormatter = (date = new Date(), format = 'DD/mm/YYYY') => {
    return moment(date).format(format);
}

export const isObjectEmpty = (object) => Object.keys(object).length === 0;

export const isArrayEmpty = (array) => array?.length === 0;
