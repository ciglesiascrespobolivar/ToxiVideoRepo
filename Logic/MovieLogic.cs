using System;
using System.Collections.Generic;
using System.Linq;
using Data;
using Entity;
using Microsoft.EntityFrameworkCore;

namespace Logic
{
    public class MovieLogic
    {
        private readonly DbVideoContext context;

        private readonly Response ResponseError = new()
        {
            Status = new()
            {
                Code = 500,
                Ok = false
            },
            Message = "Error interno del Servidor"
        };
        
        public MovieLogic(DbVideoContext context)
        {
            this.context = context;
        }
        

        public ResponseMovie Movies()
        {
            try
            {
                return new()
                {
                    Status = new()
                    {
                        Code = 200,
                        Ok = true
                    },
                    Movies = context.Movies.Include(m => m.Actors).ToList()
                };
            }
            catch (Exception e)
            {
                return new()
                {
                    Status = new()
                    {
                        Code = 500,
                        Ok = false
                    },
                    Movies = null
                };
            }
        }

        public Response CretaeMovie(Movie movie)
        {
            try
            {
                foreach (var actor in movie.Actors)
                {
                    Persona persona = context.Actors.Find(actor.Id);
                    if (persona != null)
                    {
                        return ResponseError;
                    }
                }
                context.Movies.Add(movie);
                context.SaveChanges();
                return new()
                {
                    Status = new()
                    {
                        Code = 201,
                        Ok = true
                    },
                    Message = "Successfully registered movie"
                };
            }
            catch (Exception e)
            {
                return ResponseError;
            }
            
        }

        public Response CreateBooking(Booking booking)
        {
            try
            {
                Movie movie = context.Movies.FirstOrDefault(m => m.Id == booking.MovieId);
                if (movie.Stock == 0)
                {
                    return new()
                    {
                        Status = new()
                        {
                            Code = 404,
                            Ok = false
                        },
                        Message = "Error al realizar la reserva"
                    };
                }
                User user = context.Users.Include(u => u.Bookings).FirstOrDefault(u => u.Id == booking.UserId);
                Booking bookingFind = user.Bookings.FirstOrDefault(b => b.MovieId == booking.MovieId); 
                if (bookingFind != null)
                {
                    return new()
                    {
                        Status = new()
                        {
                            Code = 404,
                            Ok = false
                        },
                        Message = "Error al realizar la reserva"
                    };
                }
                user.Bookings.Add(booking);
                movie.Stock -= 1;
                context.SaveChanges();
                return new()
                {
                    Status = new()
                    {
                        Code = 201,
                        Ok = true
                    },
                    Message = "Successful booking"
                };
            }
            catch (Exception e)
            {
                return ResponseError;
            }
        }
    }
}