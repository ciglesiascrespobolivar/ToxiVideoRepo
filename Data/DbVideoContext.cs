using Entity;
using Microsoft.EntityFrameworkCore;

namespace Data
{
    public class DbVideoContext: DbContext
    {
        public DbVideoContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Actors> Actors { get; set; }
        public DbSet<Movie> Movies { get; set; }
        public DbSet<Booking> Bookings { get; set; }
    }
}