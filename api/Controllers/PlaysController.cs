using Microsoft.AspNetCore.Mvc;

namespace FootballPlays.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PlaysController : ControllerBase
{
    [HttpGet]
    public IActionResult GetPlays()
    {
        // Placeholder - will connect to database
        return Ok(new { message = "Plays endpoint working" });
    }

    [HttpPost]
    public IActionResult CreatePlay([FromBody] object play)
    {
        // Placeholder - will save to database
        return Ok(new { message = "Play created" });
    }
}
