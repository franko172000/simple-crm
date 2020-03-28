import numeral from 'numeral';
import moment from 'moment'
import baseURL from '../misc/constants'

export default {
    formatAmount(amount){
        return ' &#8358; '+numeral(amount).format('0,0')
    },
    formatNumber(amount,format){
        return numeral(amount).format(format)
    },
    formatAmountWithDecimal(amount){
        return ' &#8358; '+numeral(amount).format('0,0.00')
    },
    formatReadableDate(date){
        return moment(date).format("MMM DD, YYYY")
    },
    formatReadableDateTime(date){
        return moment(date).format("MMM DD, YYYY hh:mm a")
    },
    getBaseAPIPath(){
        return baseURL.MAIN_SITE_URL_LIVE;
    },
}
