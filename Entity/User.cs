using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entity
{
    public class User: Persona
    {
        [Column(TypeName = "nvarchar(15)")]
        public string Phone { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string Address { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string Password { get; set; }
        [ForeignKey("UserId")]
        public List<Booking> Bookings { get; set; }
        [Column(TypeName = "nvarchar(10)")]
        public string Rol { get; set; }
    }
}