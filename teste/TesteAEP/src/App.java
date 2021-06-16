public class App {
    public static void main(String[] args) throws Exception {
        
        ResponsavelTest objetoDeTeste = new ResponsavelTest();

        objetoDeTeste.testaCadastrarAlunoValido();
        System.out.println("\n");
        objetoDeTeste.testaCadastrarAlunoInvalido();
        
    }
}
