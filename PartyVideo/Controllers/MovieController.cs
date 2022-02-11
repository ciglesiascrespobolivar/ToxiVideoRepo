using Data;
using Entity;
using Microsoft.AspNetCore.Mvc;
using Logic;

namespace PartyVideo.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController: ControllerBase
    {
        private readonly MovieLogic Logic;

        public MovieController(DbVideoContext context)
        {
            Logic = new (context);
        }

        [HttpGet]
        public ActionResult<ResponseMovie> Movies()
        {
            var response = Logic.Movies();
            return StatusCode(response.Status.Code, response);
        }
        
        

        [HttpPost]
        public ActionResult<Response> CreateMovie(Movie movie)
        {
            var response = Logic.CretaeMovie(movie);
            return StatusCode(response.Status.Code, response);
        }
        [HttpPost("booking")]
        public ActionResult<Response> CreateBooking(Booking booking)
        {
            var response = Logic.CreateBooking(booking);
            return StatusCode(response.Status.Code, response);
        }
    }
}
