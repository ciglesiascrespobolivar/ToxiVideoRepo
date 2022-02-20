using Data;
using Entity;
using Logic;
using Microsoft.AspNetCore.Mvc;

namespace PartyVideo.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController: ControllerBase
    {
        private readonly UserLogic Logic;

        public UserController(DbVideoContext context)
        {
            Logic = new(context);
        }

        [HttpGet]
        public ActionResult<ResponseMovie> Users()
        {
            var response = Logic.Users();
            return StatusCode(response.Status.Code, response);
        }

        [HttpPost]
        public ActionResult<Response> CreateUser(User user)
        {
            var response = Logic.CreateUser(user);
            return StatusCode(response.Status.Code, response);
        }
        
        [HttpPost("session")]
        public ActionResult<Response> InicioSessionUser(UserLogin user)
        {
            var response = Logic.Validate(user);
            return StatusCode(response.Status.Code, response);
        }
        [HttpGet("{id}/bookings")]
        public ActionResult<ResponseMovie> BookingsUser(string id)
        {
            var response = Logic.BookingsUser(id);
            return StatusCode(response.Status.Code, response);
        }
    }
}