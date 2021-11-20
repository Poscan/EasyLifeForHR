using Microsoft.AspNetCore.Mvc;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace EasyLifeForHR.Controllers
{
    [ApiController]
    [Route("[controller]/api")]
    public class AuthController : ControllerBase
    {
        [HttpPost]
        public async Task<IActionResult> Authorize(string login, string password)
        {
            try
            {
                using (var db = new DataContext())
                {
                    var user = await db.User.SingleOrDefaultAsync(x => x.Username == login);
                    if(user == null) return BadRequest(false);

                    var passhash = GetMd5PasshashToPassword(password);
                    if (passhash == user.Passhash) return Ok(true);
                    return BadRequest(false);
                }
            }
            catch
            {
                return BadRequest(false);
            }
        }

        private string GetMd5PasshashToPassword(string password)
        {
            using (System.Security.Cryptography.MD5 md5 = System.Security.Cryptography.MD5.Create())
            {
                byte[] inputBytes = System.Text.Encoding.ASCII.GetBytes(password);
                byte[] hashBytes = md5.ComputeHash(inputBytes);

                StringBuilder sb = new StringBuilder();
                for (int i = 0; i < hashBytes.Length; i++)
                {
                    sb.Append(hashBytes[i].ToString("X2"));
                }
                return sb.ToString();
            }
        }
    }
}