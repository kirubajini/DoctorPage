import React from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Meeting',
    start: new Date(2023, 6, 20, 10, 0),
    end: new Date(2023, 6, 20, 11, 30),
  },
  // Add more events here as needed
];

const Calendar = () => {
  return (
    <div>
      <BigCalendar
        localizer={localizer}
        events={events}
        defaultView="month" // You can change this to "week" or "day"
        style={{ height: 650, backgroundColor:"#ececec" }}
      />
    </div>
  );
};

export default Calendar;