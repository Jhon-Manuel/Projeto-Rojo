using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Projeto_Rojo.Domains;

#nullable disable

namespace Projeto_Rojo.Contexts
{
    public partial class RojoContext : DbContext
    {
        public RojoContext()
        {
        }

        public RojoContext(DbContextOptions<RojoContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Alerta> Alerta { get; set; }
        public virtual DbSet<Alteracao> Alteracaos { get; set; }
        public virtual DbSet<Equipamento> Equipamentos { get; set; }
        public virtual DbSet<ImgEquipamento> ImgEquipamentos { get; set; }
        public virtual DbSet<ImgUsuario> ImgUsuarios { get; set; }
        public virtual DbSet<TipoEquipamento> TipoEquipamentos { get; set; }
        public virtual DbSet<TipoUsuario> TipoUsuarios { get; set; }
        public virtual DbSet<Usuario> Usuarios { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
              //optionsBuilder.UseSqlServer("Data Source=NOTE0113C2\\SQLEXPRESS; initial catalog= PROJETO_ROJO; user id=sa; pwd=Senai@132;");
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-G5G5MAP\\SQLEXPRESS; initial catalog=PROJETO_ROJO; Integrated Security=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AS");

            modelBuilder.Entity<Alerta>(entity =>
            {
                entity.HasKey(e => e.IdAlerta)
                    .HasName("PK__Alerta__D2CDBC4FCB66E6B0");

                entity.Property(e => e.Descricao)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdEquipamentoNavigation)
                    .WithMany(p => p.Alerta)
                    .HasForeignKey(d => d.IdEquipamento)
                    .HasConstraintName("FK__Alerta__IdEquipa__49C3F6B7");
            });

            modelBuilder.Entity<Alteracao>(entity =>
            {
                entity.HasKey(e => e.IdAlteracao)
                    .HasName("PK__Alteraca__76DD1CC12B3F6C1B");

                entity.ToTable("Alteracao");

                entity.Property(e => e.DataAlteracao).HasColumnType("date");

                entity.Property(e => e.Descricao)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Equipamento>(entity =>
            {
                entity.HasKey(e => e.IdEquipamento)
                    .HasName("PK__Equipame__E309D87FC1E776E7");

                entity.ToTable("Equipamento");

                entity.Property(e => e.Condicao)
                    .IsRequired()
                    .HasMaxLength(1)
                    .IsFixedLength(true);

                entity.Property(e => e.DataEntrada).HasColumnType("date");

                entity.Property(e => e.Descricao).HasColumnType("text");

                entity.Property(e => e.Dns).HasColumnName("DNS");

                entity.HasOne(d => d.IdTipoEquipamentoNavigation)
                    .WithMany(p => p.Equipamentos)
                    .HasForeignKey(d => d.IdTipoEquipamento)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Equipamen__IdTip__46E78A0C");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Equipamentos)
                    .HasForeignKey(d => d.IdUsuario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Equipamen__IdUsu__45F365D3");
            });

            modelBuilder.Entity<ImgEquipamento>(entity =>
            {
                entity.HasKey(e => e.IdImagemEquipamento)
                    .HasName("PK__ImgEquip__739FE4AD39FAE88A");

                entity.ToTable("ImgEquipamento");

                entity.Property(e => e.Binario)
                    .IsRequired()
                    .HasColumnName("binario");

                entity.Property(e => e.DataInclusao)
                    .HasColumnType("datetime")
                    .HasColumnName("data_inclusao")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.MimeType)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("mimeType");

                entity.Property(e => e.NomeArquivo)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false)
                    .HasColumnName("nomeArquivo");

                entity.HasOne(d => d.IdEquipamentoNavigation)
                    .WithMany(p => p.ImgEquipamentos)
                    .HasForeignKey(d => d.IdEquipamento)
                    .HasConstraintName("FK__ImgEquipa__IdEqu__4CA06362");
            });

            modelBuilder.Entity<ImgUsuario>(entity =>
            {
                entity.HasKey(e => e.IdImg)
                    .HasName("PK__ImgUsuar__0C1AF99B51B359BE");

                entity.ToTable("ImgUsuario");

                entity.HasIndex(e => e.IdUsuario, "UQ__ImgUsuar__5B65BF96DD0D51AD")
                    .IsUnique();

                entity.Property(e => e.Binario)
                    .IsRequired()
                    .HasColumnName("binario");

                entity.Property(e => e.DataInclusao)
                    .HasColumnType("datetime")
                    .HasColumnName("data_inclusao")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.MimeType)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("mimeType");

                entity.Property(e => e.NomeArquivo)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false)
                    .HasColumnName("nomeArquivo");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithOne(p => p.ImgUsuario)
                    .HasForeignKey<ImgUsuario>(d => d.IdUsuario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__ImgUsuari__IdUsu__3D5E1FD2");
            });

            modelBuilder.Entity<TipoEquipamento>(entity =>
            {
                entity.HasKey(e => e.IdTipoEquipamento)
                    .HasName("PK__TipoEqui__0191D1914A167E7E");

                entity.ToTable("TipoEquipamento");

                entity.HasIndex(e => e.Equipamento, "UQ__TipoEqui__3185A02DC6687D12")
                    .IsUnique();

                entity.Property(e => e.Equipamento)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TipoUsuario>(entity =>
            {
                entity.HasKey(e => e.IdTipoUsuario)
                    .HasName("PK__TipoUsua__CA04062BF0FFD962");

                entity.ToTable("TipoUsuario");

                entity.HasIndex(e => e.Usuario, "UQ__TipoUsua__E3237CF7AC9B0A9B")
                    .IsUnique();

                entity.Property(e => e.Usuario)
                    .IsRequired()
                    .HasMaxLength(15)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.IdUsuario)
                    .HasName("PK__Usuario__5B65BF97BB5DACA2");

                entity.ToTable("Usuario");

                entity.Property(e => e.Cargo)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Contato)
                    .IsRequired()
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.RazaoSocial)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Senha)
                    .IsRequired()
                    .HasMaxLength(13)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdTipoUsuarioNavigation)
                    .WithMany(p => p.Usuarios)
                    .HasForeignKey(d => d.IdTipoUsuario)
                    .HasConstraintName("FK__Usuario__IdTipoU__398D8EEE");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
