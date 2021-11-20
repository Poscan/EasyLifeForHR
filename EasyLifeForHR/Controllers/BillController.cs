using System;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EasyLifeForHR.Domain;
using Microsoft.EntityFrameworkCore;

namespace EasyLifeForHR.Controllers
{
    [ApiController]
    [Route("[controller]/api")]
    public class BillController : ControllerBase
    {
        [HttpGet]
        public async Task<IEnumerable<Bill>> GetBills()
        {
            using (var db = new DataContext())
            {
                return await db.Bill.Include(x => x.User)
                                    .Include(x => x.Status)
                                    .Include(x => x.Type)
                                    .ToListAsync();
            }
        }

        [HttpGet("{userId}")]
        public async Task<IEnumerable<Bill>> GetBillsByUserId([FromRoute] int userId)
        {
            using (var db = new DataContext())
            {
                return await db.Bill.Include(x => x.User)
                                    .Where(x => x.User.Id == userId)
                                    .Include(x => x.Status)
                                    .Include(x => x.Type)
                                    .ToListAsync();
            }
        }

        [HttpGet("username/{username}")]
        public async Task<IEnumerable<Bill>> GetBillsByUsername([FromRoute] string username)
        {
            using (var db = new DataContext())
            {
                return await db.Bill.Include(x => x.User)
                    .Where(x => x.User.Username == username)
                    .Include(x => x.Status)
                    .Include(x => x.Type)
                    .Include(x => x.Frequency)
                    .ToListAsync();
            }
        }

        [HttpGet("{userId}/interval")]
        public async Task<IEnumerable<Bill>> GetBillByUserIdAndInterval([FromRoute] int userId, DateTime leftDate,
            DateTime rightDate)
        {
            using (var db = new DataContext())
            {
                return await db.Bill.Include(x => x.User)
                                    .Where(x => x.User.Id == userId)
                                    .Where(x => x.Date >= leftDate && x.Date <= rightDate)
                                    .Include(x => x.Frequency)
                                    .Include(x => x.Status)
                                    .Include(x => x.Type)
                                    .ToListAsync();
            }
        }

        [HttpGet("bill-types")]
        public async Task<IEnumerable<BillType>> GetAllBillTypes()
        {
            using (var db = new DataContext())
            {
                return await db.BillType.ToListAsync();
            }
        }

        [HttpGet("bill-status")]
        public async Task<IEnumerable<BillStatus>> GetAllBillStatus()
        {
            using (var db = new DataContext())
            {
                return await db.BillStatus.ToListAsync();
            }
        }

        [HttpGet("frequency")]
        public async Task<IEnumerable<Frequency>> GetAllFrequency()
        {
            using (var db = new DataContext())
            {
                return await db.Frequencies.ToListAsync();
            }
        }

        [HttpPost("{billId}/change-status")]
        public async Task<IActionResult> ChangeBillStatus([FromRoute]int billId, int billStatusId)
        {
            try
            {
                using (var db = new DataContext())
                {
                    var bill = await db.Bill.SingleOrDefaultAsync(x => x.Id == billId);

                    if(bill == null) return BadRequest(false);

                    bill.Status = new BillStatus { Id = billStatusId };

                    db.Bill.Update(bill);
                    return Ok(true);
                }

            }
            catch
            {
                return BadRequest(false);
            }
        }

        [HttpPost()]
        public async Task<IActionResult> SaveBill([FromBody] Bill bill)
        {
            try
            {
                using (var db = new DataContext())
                {
                    if (bill.Id == 0)
                    {
                        await db.Bill.AddAsync(bill);
                    }
                    else
                    {
                        var dbBill = await db.Bill.SingleOrDefaultAsync(x => x.Id == bill.Id);
                        dbBill.Comment = bill.Comment;
                        dbBill.Date = bill.Date;
                        dbBill.Link = bill.Link;
                        dbBill.Name = bill.Name;
                        dbBill.Status = bill.Status;
                        dbBill.Frequency = bill.Frequency;
                        dbBill.Type = bill.Type;
                        dbBill.EndDate = bill.EndDate;
                        dbBill.User = bill.User;

                        db.Bill.Update(dbBill);

                        await db.SaveChangesAsync();
                    }

                    return Ok();
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return BadRequest(e.Message);
            }
        }
    }
}