using System.ComponentModel.DataAnnotations.Schema;

namespace EasyLifeForHR.Domain
{
    [Table("bill_type")]
    public class BillType
    {
        [Column("id")]
        public virtual int Id { get; set; }
        [Column("name")]
        public virtual string Name { get; set; }
    }
}
