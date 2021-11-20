using System.ComponentModel.DataAnnotations.Schema;

namespace EasyLifeForHR.Domain
{
    [Table("bill_status")]
    public class BillStatus
    {
        [Column("id")]
        public virtual int Id { get; set; }
        [Column("status_name")]
        public virtual string StatusName { get; set; }
    }
}
