using System.Collections.Generic;

namespace Entity
{
    public class ResponseBooking
    {
        public Status Status { get; set; }
        public List<Booking> Bookings { get; set; }
    }
}