class Heroi{
    constructor({nome, idade, tipo}){
        this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
}
ataque(){

    const ataques = {
        mago: "magia",
        guerreiro: "espada",
        monge: "artes marciais",
        ninja: "shuriken"
    };
    switch(this.tipo){
        case "mago":
        case "guerreiro":
        case "monge":
        case "ninja":
            console.log(`o ${this.tipo} atacou usando ${ataques[this.tipo]}`);
            break;
            default:
                console.log("tipo de Heroi invalido");

            }
        }
        }

        let heroiMago=new Heroi({nome: "valent", idade: 20, tipo: "mago"});
        