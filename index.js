import {cuentaCorriente} from  './cuentaCorriente.js'
import {Cliente}    from './Cliente.js'
const cliente1 = new Cliente(123456,'jose','pachon');
//cliente1.dni="123456";
//cliente1.nombre="jose ";
//cliente1.apellido="pachon"

const cta1 = new cuentaCorriente(cliente1,12369887,"altavista");
//cta1.numero=1;
//cta1.agencia="altavista";
//cta1.cliente=cliente1;

let saldo=cta1.versaldo()

console.log('el saldo actual es maria pppp',cta1.cliente)
console.log('el saldo actual es cuenta jose',saldo)
saldo=cta1.depositoCuenta(300)
console.log('el saldo actual es cuenta jose',saldo)

const cliente2 = new Cliente(123457,'maria','garicia');
//cliente2.dni="123457";
//cliente2.nombre="maria";
//cliente2.apellido="garcia"

const cta2 = new cuentaCorriente(cliente2,12369887,"orinokia");
const cta3 = new cuentaCorriente(cliente1,12369887,"altavista");
const cta4 = new cuentaCorriente(cliente1,12369887,"altavista");
//cta2.numero=1;
//cta2.agencia="altavista";
//cta2.setcliente=cliente2;

if (cta2.cliente)
console.log(cta2.cliente)
else 
console.log(cta2)
let saldom=cta2.versaldo();
saldom = cta2.depositoCuenta(200)


cta1.taferenciaEnCuenta(100,cta2);
console.log('el saldo actual es maria',+saldom)
const cuentamaria = cta2.versaldo()
console.log('el saldo actual es maria',+cuentamaria)
const cuentajose = cta1.versaldo()
console.log('el saldo actual es jose',+cuentajose)
console.log(cta1)
console.log(cta1.cliente)
console.log(cta2)
console.log(cta2.cliente)
console.log(cuentaCorriente.cantidadCeuntas)


