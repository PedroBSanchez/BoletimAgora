import java.lang.reflect.Array;
import java.util.ArrayList;

public class Responsavel {
    
    public String cpf;
    public String email;
    public ArrayList alunos = new ArrayList<Aluno>();

    public Responsavel(String cpf, String email) {
        this.cpf = cpf;
        this.email = email;        
    }

    public String cadastrarAluno(Aluno aluno) {
        if (aluno.numeroMatricula.length() == 8) {
            String primeiroDigito = aluno.numeroMatricula.substring(0, 1);
            String ultimoDigito = aluno.numeroMatricula.substring(7);
            if (primeiroDigito.equals("1") && ultimoDigito.equals("1")) {
                this.alunos.add(aluno);
                return "Aluno cadastrado com sucesso";
            }
        }
        return "Aluno não cadastrado [Número de matrícula inválido]";
    }
    


}
