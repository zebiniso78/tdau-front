export const addCommas = num => num?.toString()?.replaceAll(/\B(?=(\d{3})+(?!\d))/g, " ");

export default function inputWidthNumberFormat(event) {
    
        const removeNonNumeric = num => {
            let minus = num.toString().includes('-')
            let value =num.toString().replaceAll(/[^0-9\.]/g, "");
            if(minus){
                value ='-'+value
            }
            return value
        }
    let e = {
        target: {
            value: event.target.value ?addCommas(removeNonNumeric(event.target.value)):event.target.value ,
            name: event.target.name
        }
    }
    return(e);
}