using System.ComponentModel.DataAnnotations.Schema;

namespace EasyLifeForHR.Domain
{
    [Table("users_group")]
    public class UsersGroup
    {
        [Column("id")]
        public virtual int Id { get; set; }
        [Column("group_name")]
        public virtual string Name { get; set; }
    }
}
