// <auto-generated />
using Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Data.Migrations
{
    [DbContext(typeof(DbVideoContext))]
    partial class DbVideoContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.9")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Entity.Actors", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(11)");

                    b.Property<int>("IdMovie")
                        .HasColumnType("int");

                    b.Property<string>("LastName")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("Id");

                    b.HasIndex("IdMovie");

                    b.ToTable("Actors");
                });

            modelBuilder.Entity("Entity.Booking", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("MovieId")
                        .HasColumnType("int");

                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(11)");

                    b.HasKey("Id");

                    b.HasIndex("MovieId");

                    b.HasIndex("UserId");

                    b.ToTable("Bookings");
                });

            modelBuilder.Entity("Entity.Movie", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(200)");

                    b.Property<string>("Director")
                        .HasColumnType("nvarchar(100)");

                    b.Property<int>("Stock")
                        .HasColumnType("int");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("Id");

                    b.ToTable("Movies");
                });

            modelBuilder.Entity("Entity.User", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(11)");

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("LastName")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Phone")
                        .HasColumnType("nvarchar(15)");

                    b.Property<string>("Rol")
                        .HasColumnType("nvarchar(10)");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("Entity.Actors", b =>
                {
                    b.HasOne("Entity.Movie", null)
                        .WithMany("Actors")
                        .HasForeignKey("IdMovie")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Entity.Booking", b =>
                {
                    b.HasOne("Entity.Movie", null)
                        .WithMany("Bookings")
                        .HasForeignKey("MovieId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Entity.User", null)
                        .WithMany("Bookings")
                        .HasForeignKey("UserId");
                });
#pragma warning restore 612, 618
        }
    }
}
