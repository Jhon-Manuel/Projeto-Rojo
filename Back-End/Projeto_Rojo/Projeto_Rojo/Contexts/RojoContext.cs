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

        public virtual DbSet<Alteracao> Alteracaos { get; set; }
        public virtual DbSet<Empresa> Empresas { get; set; }
        public virtual DbSet<Equipamento> Equipamentos { get; set; }
        public virtual DbSet<Funcionario> Funcionarios { get; set; }
        public virtual DbSet<Imagemequipamento> Imagemequipamentos { get; set; }
        public virtual DbSet<Imagemusuario> Imagemusuarios { get; set; }
        public virtual DbSet<Tipoequipamento> Tipoequipamentos { get; set; }
        public virtual DbSet<Usuario> Usuarios { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=NOTE0113C2\\SQLEXPRESS; initial catalog=PROJETO_ROJO; user id=sa; pwd=Senai@132");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AS");

            modelBuilder.Entity<Alteracao>(entity =>
            {
                entity.HasKey(e => e.IdAlteracao)
                    .HasName("PK__ALTERACA__76DD1CC15A1FB595");

                entity.ToTable("ALTERACAO");

                entity.Property(e => e.DataAlteracao).HasColumnType("date");

                entity.Property(e => e.Descricao)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Empresa>(entity =>
            {
                entity.HasKey(e => e.IdEmpresa)
                    .HasName("PK__EMPRESA__5EF4033E7829A0AD");

                entity.ToTable("EMPRESA");

                entity.HasIndex(e => e.Cnpj, "UQ__EMPRESA__AA57D6B4D68A43FF")
                    .IsUnique();

                entity.Property(e => e.Cnpj)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("CNPJ");

                entity.Property(e => e.Endereco)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.RazaoSocial)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Empresas)
                    .HasForeignKey(d => d.IdUsuario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__EMPRESA__IdUsuar__412EB0B6");
            });

            modelBuilder.Entity<Equipamento>(entity =>
            {
                entity.HasKey(e => e.IdEquipamento)
                    .HasName("PK__EQUIPAME__E309D87F544BFB0F");

                entity.ToTable("EQUIPAMENTO");

                entity.Property(e => e.DataEntrada).HasColumnType("date");

                entity.Property(e => e.Descricao).HasColumnType("text");

                entity.Property(e => e.Dns).HasColumnName("DNS");

                entity.HasOne(d => d.IdTipoEquipamentoNavigation)
                    .WithMany(p => p.Equipamentos)
                    .HasForeignKey(d => d.IdTipoEquipamento)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__EQUIPAMEN__IdTip__49C3F6B7");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Equipamentos)
                    .HasForeignKey(d => d.IdUsuario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__EQUIPAMEN__IdUsu__48CFD27E");
            });

            modelBuilder.Entity<Funcionario>(entity =>
            {
                entity.HasKey(e => e.IdFuncionario)
                    .HasName("PK__FUNCIONA__35CB052A6CBB2236");

                entity.ToTable("FUNCIONARIO");

                entity.Property(e => e.Cpf)
                    .IsRequired()
                    .HasMaxLength(28)
                    .IsUnicode(false)
                    .HasColumnName("CPF");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Funcionarios)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK__FUNCIONAR__IdUsu__3D5E1FD2");
            });

            modelBuilder.Entity<Imagemequipamento>(entity =>
            {
                entity.HasKey(e => e.IdImagemEquipamento)
                    .HasName("PK__IMAGEMEQ__739FE4AD964D0154");

                entity.ToTable("IMAGEMEQUIPAMENTO");

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
                    .WithMany(p => p.Imagemequipamentos)
                    .HasForeignKey(d => d.IdEquipamento)
                    .HasConstraintName("FK__IMAGEMEQU__IdEqu__4CA06362");
            });

            modelBuilder.Entity<Imagemusuario>(entity =>
            {
                entity.HasKey(e => e.IdImg)
                    .HasName("PK__IMAGEMUS__0C1AF99BB425FF77");

                entity.ToTable("IMAGEMUSUARIO");

                entity.HasIndex(e => e.IdUsuario, "UQ__IMAGEMUS__5B65BF9691FD575A")
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
                    .WithOne(p => p.Imagemusuario)
                    .HasForeignKey<Imagemusuario>(d => d.IdUsuario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__IMAGEMUSU__IdUsu__398D8EEE");
            });

            modelBuilder.Entity<Tipoequipamento>(entity =>
            {
                entity.HasKey(e => e.IdTipoEquipamento)
                    .HasName("PK__TIPOEQUI__0191D19150D5C2FF");

                entity.ToTable("TIPOEQUIPAMENTO");

                entity.HasIndex(e => e.Equipamento, "UQ__TIPOEQUI__3185A02DF309D00C")
                    .IsUnique();

                entity.Property(e => e.Equipamento)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.IdUsuario)
                    .HasName("PK__USUARIO__5B65BF97270B6B6E");

                entity.ToTable("USUARIO");

                entity.Property(e => e.Contato)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Nome)
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.Senha)
                    .HasMaxLength(13)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
