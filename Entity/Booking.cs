using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entity
{
    public class Booking
    {
        [Key]
        public int Id { get; set; }
        [Column(TypeName = "nvarchar(11)")]
        public string UserId { get; set; }
        public int MovieId { get; set; }
    }
}