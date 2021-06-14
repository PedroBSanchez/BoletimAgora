create table escolas (
    id_escola int not null auto_increment,
    num_alunos int,
    cep char(12),
    cidade char(60),
    bairro char(60),
    logradouro char(70),
    numero int,
    constraint pk_escolas primary key (id_escola)
);

create table alunos (
    id_aluno int not null auto_increment,
    id_escola int,
    nome char(70),
    num_matricula int,
    idade int,
    constraint pk_alunos primary key (id_aluno),
    constraint fk_alunos_escola foreign key (id_escola) references escolas(id_escola)
);

create table materias(
    id_materia int not null auto_increment,
    nome char(50),
    constraint pk_materias primary key (id_materia)
);


create table notas (
    id_nota int not null auto_increment,
    id_aluno int,
    id_materia int,
    bim1 float,
    bim2 float,
    bim3 float,
    bim4 float,
    constraint pk_notas primary key (id_nota),
    constraint fk_notas_aluno foreign key (id_aluno) references alunos(id_aluno),
    constraint fk_notas_materia foreign key (id_materia) references materias(id_materia)
);




