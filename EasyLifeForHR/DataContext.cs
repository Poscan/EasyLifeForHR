using EasyLifeForHR.Domain;
using Microsoft.EntityFrameworkCore;

namespace EasyLifeForHR
{
    public sealed class DataContext : DbContext
    {
        public DbSet<User> User { get; set; }
        public DbSet<Bill> Bill { get; set; }
        public DbSet<BillType> BillType { get; set; }
        public DbSet<BillStatus> BillStatus { get; set; }
        public DataContext()
        {
            Database.EnsureCreated();
        }
        
        public DataContext(DbContextOptions<DataContext> option) : base(option)
        {
            Database.EnsureCreated();
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql("Host=89.223.64.189;Port=5432;Database=default_db;Username=gen_user;Password=EasyLifeForHR");
        }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
