namespace Entity
{
    public class ResponseLogin
    {
        public Status Status { get; set; }
        public string Message { get; set; }
        public User User { get; set; }
    }
}