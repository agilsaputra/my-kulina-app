import React, {Component} from 'react';
import DatePicker from "react-horizontal-datepicker";





class Calendar extends Component {
    render () {


return (

<div class="calendar">
<DatePicker
labelFormat={"MMMM"}
color={"grey"} /> 

</div>
)}
}

export default Calendar;