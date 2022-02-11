using System;
using System.Collections.Generic;
using System.Linq;
using Data;
using Entity;
using Microsoft.EntityFrameworkCore;

namespace Logic
{
    public class UserLogic
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
        public UserLogic(DbVideoContext context)
        {
            this.context = context;
            this.ValidateUserDefecto();
        }

        private void ValidateUserDefecto()
        {
            User user = context.Users.Find("1234567890");
            if (user == null)
            {
                context.Users.Add(new()
                {
                    Address = "admin",
                    Id = "1234567890",
                    Name = "admin",
                    Password = "123",
                    Phone = "1234567890",
                    LastName = "admin",
                    Rol = "admin"
                });
                context.SaveChanges();
            }
        }
        
        public ResponseUser Users()
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
                    Users = context.Users.Include(u => u.Bookings).ToList()
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
                    Users = null
                };
            }
        }   

        public Response CreateUser(User user)
        {
            try
            {
                user.Rol = "client";
                User userFind = context.Users.Find(user.Id);
                if (userFind != null)
                {
                    return new()
                    {
                        Status = new()
                        {
                            Code = 404,
                            Ok = false
                        },
                        Message = "Cliente ya existe"
                    };
                }
                context.Users.Add(user);
                context.SaveChanges();
                return new()
                {
                    Status = new()
                    {
                        Code = 201,
                        Ok = true
                    },
                    Message = "“Successfully registered user"
                };
            }
            catch (Exception e)
            {
                return ResponseError;
            }
        }
        
        public ResponseLogin Validate(UserLogin userLogin) {
            
            try
            {
                User user =  context.Users.FirstOrDefault(u => u.Address == userLogin.Address && u.Rol == userLogin.Rol);
                ResponseLogin response = new();
                response.User = user;
                response.Message = (user == null) ? "Usuario inexistente" : (user.Password != userLogin.Password) ? "Contraseña incorrecta" : "";
                response.Status = new()
                {
                    Code = (user == null) ? 404 : (user.Password != userLogin.Password) ? 404 : 201,
                    Ok = (user != null) && (user.Password == userLogin.Password)
                };
                return response;
            }
            catch (Exception e)
            {
                return new ()
                {
                    Message = "Error interno del servidor",
                    Status = new ()
                    {
                        Code = 500,
                        Ok = false
                    },
                    User = null
                };
            }
        }

        public ResponseMovie BookingsUser(string id)
        {
            try
            {

                User user = context.Users.Include(u => u.Bookings).FirstOrDefault(u => u.Id == id);
                List<Movie> movies = new();
                foreach (var booking in user.Bookings)
                {
                    Movie movie = context.Movies.Include(m => m.Actors).FirstOrDefault(m => m.Id == booking.MovieId);
                    movies.Add(movie);
                }
                if (user == null)
                {
                    return new ()
                    {
                        Status = new ()
                        {
                            Code = 500,
                            Ok = false
                        },
                        Movies = null
                    };
                }
                
                return new ()
                {
                    Status = new ()
                    {
                        Code = 200,
                        Ok = true
                    },
                    Movies = movies
                };
            }
            catch (Exception e)
            {
                return new ()
                {
                    Status = new ()
                    {
                        Code = 500,
                        Ok = false
                    },
                    Movies = null
                };
            }
        }
    }
}