using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entity
{
    public class Movie
    {
        [Key]
        public int Id { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Title { get; set; }
        [Column(TypeName = "nvarchar(200)")]
        public string Description { get; set; }
        [ForeignKey("IdMovie")]
        public List<Actors> Actors { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Director { get; set; }
        [Column(TypeName = "int")]
        public int Stock { get; set; }
        [ForeignKey("MovieId")]
        public List<Booking> Bookings { get; set; }
    }
}