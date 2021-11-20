using EasyLifeForHR.Domain;
using Microsoft.EntityFrameworkCore;

namespace EasyLifeForHR
{
    public sealed class DataContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DataContext()
        {
            Database.EnsureCreated();
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql("Host=89.223.64.189;Port=5432;Database=default_db;Username = gen_user; Password = EasyLifeForHR");
        }
    }
}
