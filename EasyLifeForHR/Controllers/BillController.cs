using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
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

        [HttpPost("{billId}")]
        public async Task<IActionResult> ChangeBillStatus([FromRoute]int billId, int billStatusId)
        {
            try
            {

                using (var db = new DataContext())
                {
                    var bill = await db.Bill.SingleOrDefaultAsync(x => x.Id == billId);

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
    }
}