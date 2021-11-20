using System;

namespace EasyLifeForHR.Domain
{
    public class Bill
    {
        public virtual  long Id { get; set; }
        public virtual  DateTime Date { get; set; }
        public virtual  string Name { get; set; }
        public virtual  BillType Type { get; set; }
        public virtual  BillStatus Status { get; set; }
        public virtual  User User { get; set; }
    }
}
