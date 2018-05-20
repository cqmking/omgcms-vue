import moment from 'moment'

export default {
    formateTime: function (data) {
        return moment(data).format("YYYY-MM-DD HH:mm:ss")
    },
    formateDate: (row, column, cellValue, index) => {
        if (!cellValue || cellValue == "") {
            return "无记录";
        }
        return moment(cellValue).format("YYYY-MM-DD HH:mm:ss")
    }
};