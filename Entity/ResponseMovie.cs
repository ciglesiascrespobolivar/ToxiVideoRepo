using System.Collections.Generic;

namespace Entity
{
    public class ResponseMovie
    {
        public Status Status { get; set; }
        public List<Movie> Movies { get; set; }
    }
}