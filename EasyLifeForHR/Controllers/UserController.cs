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
    }
}