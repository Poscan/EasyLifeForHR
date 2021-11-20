using System.ComponentModel.DataAnnotations.Schema;

namespace EasyLifeForHR.Domain
{
    [Table("bill_status")]
    public class BillStatus
    {
        [Column("id")]
        public virtual int Id { get; set; }
        [Column("status")]
        public virtual string Status { get; set; }
    }
}
