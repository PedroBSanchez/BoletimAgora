public class ResponsavelTest {
    
    public void testaCadastrarAlunoValido() {
        Responsavel r1 = new Responsavel("07476898772", "fulano@mail.com");
        Aluno alunoTarget = new Aluno("Ciclano", 15, "14567891");
        String mensagem = r1.cadastrarAluno(alunoTarget);
        System.out.println(mensagem);
    }

    public void testaCadastrarAlunoInvalido() {
        Responsavel r1 = new Responsavel("07476898772", "fulano@mail.com");
        Aluno alunoTarget = new Aluno("Ciclano", 15, "24567892");
        String mensagem = r1.cadastrarAluno(alunoTarget);
        System.out.println(mensagem);
    }

}
