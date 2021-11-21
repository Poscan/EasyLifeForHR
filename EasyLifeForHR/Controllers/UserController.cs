using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using EasyLifeForHR.Domain;
using Microsoft.EntityFrameworkCore;

namespace EasyLifeForHR.Controllers
{
    [ApiController]
    [Route("[controller]/api")]
    public class UserController : ControllerBase
    {
        [HttpGet]
        public async Task<IEnumerable<User>> GetUser()
        {
            using (var db = new DataContext())
            {
                return await db.User.Include(x => x.Role)
                                    .ToListAsync();
            }
        }

        [HttpGet("user-groups")]
        public async Task<IEnumerable<UsersGroup>> GetAllUserGroups()
        {
            using (var db = new DataContext())
            {
                return await db.UsersGroups.ToListAsync();
            }
        }

        [HttpPost]
        public async Task SaveUser(User user)
        {
            using (var db = new DataContext())
            {
                var userForSave = await db.User.SingleOrDefaultAsync(x => x.Id == user.Id);
                userForSave.LimitRefundMoney = user.LimitRefundMoney;
                userForSave.Role = user.Role;

                db.User.Update(userForSave);

                await db.SaveChangesAsync();
            }
        }
    }
}