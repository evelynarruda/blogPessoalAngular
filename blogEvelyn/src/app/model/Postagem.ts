import { Tema } from "./Tema";
import { Usuario } from "./Usuario";

export class Postagem{
    public idPostagem: number;
    public titulo: string;
    public descricao: string;
    public dataPostagem: number;
    public usuario: Usuario;
    public temaRelacionado: Tema;

}