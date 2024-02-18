class Heroi{
    constructor(nome, idade, tipo, ataque){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
		this.ataque = ataque;
    }

    atacar(){
		if(this.ataque){
			console.log(`O ${this.tipo} atacou usando ${this.ataque}\n`);
		}else{
			console.log(`O ${this.tipo} atacou \n`);
		}
	}
}

//testes
const mago = new Heroi('Maguinho', 10, 'mago', 'magia');
mago.atacar();

const guerreiro = new Heroi('Spartano', 26, 'guerreiro', 'espada');
guerreiro.atacar();

const monge = new Heroi('Benkei', 30, 'monge', 'artes marciais');
monge.atacar();

const ninja = new Heroi('Fujibayashi Nagato', 25, 'ninja', 'shuriken');
ninja.atacar();

const homemAranha = new Heroi('Homem Aranha', 33, 'mutante');
homemAranha.atacar();