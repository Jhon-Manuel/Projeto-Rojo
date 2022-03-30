CREATE DATABASE PROJETO_ROJO

USE PROJETO_ROJO

CREATE TABLE USUARIO(
	IdUsuario INT PRIMARY KEY IDENTITY,
	Email VARCHAR(100),
	Senha VARCHAR(13),
	Contato VARCHAR(15),
	Nome VARCHAR(150)
);
GO

CREATE TABLE IMAGEMUSUARIO (
	IdImg INT PRIMARY KEY IDENTITY(1,1),
	IdUsuario INT NOT NULL UNIQUE FOREIGN KEY REFERENCES usuario(idUsuario),
	binario VARBINARY(MAX) NOT NULL,
	mimeType VARCHAR(30) NOT NULL,
	nomeArquivo VARCHAR(250) NOT NULL,
	data_inclusao DATETIME DEFAULT GETDATE() NULL
);
GO


CREATE TABLE FUNCIONARIO(
	IdFuncionario INT PRIMARY KEY IDENTITY,
	IdUsuario INT FOREIGN KEY REFERENCES USUARIO(IdUsuario),
	CPF VARCHAR(28) NOT NULL
);
GO

CREATE TABLE EMPRESA(
	IdEmpresa INT PRIMARY KEY IDENTITY,
	IdUsuario INT FOREIGN KEY REFERENCES USUARIO(IdUsuario) NOT NULL,
	RazaoSocial VARCHAR(255) NOT NULL,
	CNPJ VARCHAR(20) NOT NULL UNIQUE,
	Endereco VARCHAR(255) 
);
GO

CREATE TABLE TIPOEQUIPAMENTO(
	IdTipoEquipamento INT PRIMARY KEY IDENTITY,
	Equipamento VARCHAR(100) NOT NULL UNIQUE
);
GO

CREATE TABLE ALTERACAO(
	IdAlteracao INT PRIMARY KEY IDENTITY,
	Descricao VARCHAR(255) NOT NULL,
	DataAlteracao DATE NOT NULL
);
GO

CREATE TABLE EQUIPAMENTO(
	IdEquipamento INT PRIMARY KEY IDENTITY,
	IdUsuario INT FOREIGN KEY REFERENCES USUARIO (IdUsuario) NOT NULL,
	IdTipoEquipamento INT FOREIGN KEY REFERENCES TIPOEQUIPAMENTO (IdTipoEquipamento) NOT NULL,
	Modelo INT, 
	NumeroDeSerie INT,
	GateWay INT ,
	Mask INT,
	DNS INT ,
	Porta INT ,
	DataEntrada DATE NOT NULL,
	Descricao TEXT
	 
);
GO

CREATE TABLE IMAGEMEQUIPAMENTO(
	IdImagemEquipamento INT PRIMARY KEY IDENTITY,
	IdEquipamento INT FOREIGN KEY REFERENCES EQUIPAMENTO (IdEquipamento),
	binario VARBINARY(MAX) NOT NULL,
	mimeType VARCHAR(30) NOT NULL,
	nomeArquivo VARCHAR(250) NOT NULL,
	data_inclusao DATETIME DEFAULT GETDATE() NULL
);
GO