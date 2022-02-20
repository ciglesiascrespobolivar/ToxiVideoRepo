using System.ComponentModel.DataAnnotations.Schema;

namespace Entity
{
    public class Actors: Persona
    {
        [Column(TypeName = "int")]
        public int IdMovie { get; set; }
    }
}