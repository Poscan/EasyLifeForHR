using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace EasyLifeForHR.Domain
{
    [Table("bill")]
    public class Bill
    {
        [Column("id")]
        public virtual  long Id { get; set; }
        [Column("date")]
        public virtual  DateTime Date { get; set; }
        [Column("name")]
        public virtual  string Name { get; set; }
        [ForeignKey("bill_type_id")]
        public virtual  BillType Type { get; set; }
        [ForeignKey("bill_status_id")]
        public virtual  BillStatus Status { get; set; }
        [ForeignKey("user_id")]
        public virtual  User User { get; set; }
    }
}
