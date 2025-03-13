"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Descritor = void 0;
var Descritor = /** @class */ (function () {
    function Descritor(empresa) {
        this.empresa = empresa;
        this.funcionarios = empresa.funcionario;
    }
    Descritor.prototype.descrever = function () {
        var descricao = "Raz\u00E3o social: ".concat(this.empresa.razaoSocial, " \nNome fantasia: ").concat(this.empresa.nomeFanatasia, " \ncnpj: ").concat(this.empresa.cnpj, " \nTelefone: ").concat(this.empresa.telefone.ddd, " ").concat(this.empresa.telefone.numero, " \nEndereco: \nRua: ").concat(this.empresa.endereco.rua, " Bairro: ").concat(this.empresa.endereco.bairro, " Cidade: ").concat(this.empresa.endereco.cidade, " Numero: ").concat(this.empresa.endereco.numero, "\n \nFuncionarios: ");
        this.empresa.funcionario.forEach(function (funcionarios) {
            descricao += "\nNome: ".concat(funcionarios.nome, " \nMatricula: ").concat(funcionarios.matricula, " \ncpf: ").concat(funcionarios.cpf, " \nTelefone: ").concat(funcionarios.telefone.ddd, " ").concat(funcionarios.telefone.numero, " \nEndere\u00E7o: \nRua: ").concat(funcionarios.endereco.rua, " Bairro: ").concat(funcionarios.endereco.bairro, " Cidade: ").concat(funcionarios.endereco.cidade, " Numero: ").concat(funcionarios.endereco.numero, "\n");
        });
        return descricao;
    };
    return Descritor;
}());
exports.Descritor = Descritor;
