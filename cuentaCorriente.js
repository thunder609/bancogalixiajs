
import {Cliente}    from './Cliente.js'
export class cuentaCorriente{
   #cliente;
    numero;
    #saldo;
    agencia;
    static cantidadCeuntas=0;

    set  cliente(valor){
      if (valor instanceof Cliente)
      this.#cliente=valor;
    }
    get cliente(){
       return this.#cliente
    }
    constructor(cliente,numero,agencia){
      //this.cliente(cliente);
      this.cliente=cliente;
        this.numero=numero;
        this.#saldo=0;
        this.agencia=agencia;
        cuentaCorriente.cantidadCeuntas++
    }

  depositoCuenta(valor){
    if (valor> 0){
    this.#saldo += valor;
    return this.#saldo;
    }
  }
  retiroCuenta(valor){
    if (valor <= this.#saldo)
    this.#saldo -= valor;
    return this.#saldo;
        
  }
  versaldo(){
    return this.#saldo;
  }
  taferenciaEnCuenta(valor,Cuentadestino){
    this.retiroCuenta(valor);
    Cuentadestino.depositoCuenta(valor)
  }
}