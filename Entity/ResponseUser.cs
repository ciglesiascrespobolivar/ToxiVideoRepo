using System.Collections.Generic;

namespace Entity
{
    public class ResponseUser
    {
        public Status Status { get; set; }
        public List<User> Users { get; set; }
    }
}