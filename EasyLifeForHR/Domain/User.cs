using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.Serialization;

namespace EasyLifeForHR.Domain
{
    [Table("user")]
    public class User
    {
        [Column("id")]
        public int Id { get; set; }
        [Column("mail")]
        public string Mail { get; set; }
        [ForeignKey("user_group")]
        public UsersGroup Role { get; set; }
        [Column("username")]
        public string Username { get; set; }
        [Column("passhash")]
        public string Passhash { get; set; }
        [Column("limit_refund_money")]
        public long LimitRefundMoney { get; set; }
    }
}
