namespace EasyLifeForHR.Domain
{
    public class User
    {
        public virtual int Id { get; set; }

        public virtual string Mail { get; set; }
        public virtual UsersGroup Role { get; set; }
        public virtual string Username { get; set; }
        public virtual string Passhash { get; set; }
    }
}
