"use strict";
// // Необходимо типизировать этот большой объект
// // Свойство futureClasses должно быть в зависимости от classes по типу
// // Свойства exClients и futureClients тоже должны быть в зависимости от currClients
// // ИЛИ все три зависят от общего родителя
//
// // Простыми словами: при добавлении свойства в целевой объект они должны быть
// // автоматически добавлены в зависимые (сразу подсказка от TS)
// interface  IFitnesClubCenter {
// 	clubName:string;
// 	location:string;
// 	classes: IClasses[];
// 	futureClasses:IFutureClasses[];
// 	currClients:CurrentClients[];
// 	exClients:ExClients[];
// 	futureClients:FutureClients[]
// }
// interface IClasses {
// 	name:string;
// 	startsAt:string;
// 	duration:number;
// }
// interface IFutureClasses extends Omit<IClasses, "startsAt">{
// 	willStartsAt:string
// }
// interface IClients{
// 	name:string,
// 	age:string | number,
// 	gender: 'male' | 'female',
// 	timeLeft:string,
// 	makeCallFor:Date
// }
// type CurrentClients = Omit<IClients, 'makeCallFor'>;
// type ExClients = Omit<IClients, 'timeLeft'>
// type FutureClients = Pick<IClients, 'name' | 'makeCallFor'>
//
//
//
// const fitnessClubCenter:IFitnesClubCenter = {
// 	clubName: "Fitness club Center",
// 	location: "central ave. 45, 5th floor",
// 	classes: [
// 		{
// 			name: "yoga",
// 			startsAt: "8:00 AM",
// 			duration: 60,
// 		},
// 		{
// 			name: "trx",
// 			startsAt: "11:00 AM",
// 			duration: 45,
// 		},
// 		{
// 			name: "swimming",
// 			startsAt: "3:00 PM",
// 			duration: 70,
// 		},
// 	],
// 	futureClasses: [
// 		{
// 			name: "boxing",
// 			willStartsAt: "6:00 PM",
// 			duration: 40,
// 		},
// 		{
// 			name: "breath training",
// 			willStartsAt: "8:00 PM",
// 			duration: 30,
// 		},
// 	],
// 	currClients: [
// 		{
// 			name: "John Smith",
// 			age: "-",
// 			gender: "male",
// 			timeLeft: "1 month",
// 		},
// 		{
// 			name: "Alise Smith",
// 			age: 35,
// 			gender: "female",
// 			timeLeft: "3 month",
// 		},
// 		{
// 			name: "Ann Sonne",
// 			age: 24,
// 			gender: "female",
// 			timeLeft: "5 month",
// 		},
// 	],
// 	exClients: [
// 		{
// 			name: "Tom Smooth",
// 			age: 50,
// 			gender: "male",
// 			makeCallFor: new Date("2023-08-12"),
// 		},
// 	],
// 	futureClients: [
// 		{
// 			name: "Maria",
// 			makeCallFor: new Date("2023-07-10"),
// 		},
// 	],
// };
// enum TransferStatus {
// 	Pending = "pending",
// 	Rejected = "rejected",
// 	Completed = "completed",
// }
//
// enum ErrorMessages {
// 	NotFound = "Not found: 404",
// 	NotEnoughSpace = "Not enough space: 507",
// 	Forbidden = "Forbidden: 403",
// }
//
// interface ITransfer {
// 	path: string;
// 	data: string[];
// 	date?: Date;
// 	start: (p: string, d: string[]) => string;
// 	stop: (reason: string) => string;
// }
//
// interface TransferError {
// 	message: ErrorMessages;
// }
//
// // Класс должен имплементировать ITransfer и TransferError
// class SingleFileTransfer implements ITransfer, TransferError{
// 	path: string;
// 	data: string[];
// 	date?: Date;
// 	message: ErrorMessages;
// 	transferStatus: TransferStatus
//
// 	constructor(status:TransferStatus) {
// 		this.transferStatus = status
// 	}
// 	start(p:string,d:string[]){
// 		return "Transfer Started"
// 	}
// 	checkTransferStatus(){
// 		return this.transferStatus
// 	}
// 	stop(reason:string){
// 		return `Трансфер остановлен по причине - "${reason}" Дата остановки ${new Date().toLocaleString()}`
// 	}
// 	makeEror ():string {
// 		return `Статус: ${TransferStatus.Rejected} причина ${ErrorMessages.Forbidden}`
// 	}
//
// 	// Место для реализаций
//
// 	// Необходимо создать метод checkTransferStatus, проверяющий состояние передачи данных
// 	// Можно вывести в консоль данные, можно вернуть строку
//
// 	// Необходимо создать метод, который будет останавливать передачу данных
// 	// И возвращать строку с причиной и датой остановки (Дата в любом формате)
//
// 	// Необходимо создать метод, который будет возвращать строку, содержащую
// 	// Статус передачи и любое сообщение об ошибке. На ваш выбор или отталкиваться от приходящего аргумента
// 	// Метод может показаться странным, но может использоваться для тестов, например
//
// }
// const transfer = new SingleFileTransfer(TransferStatus.Pending);
// console.log(transfer.start('qu',['privet','poka']))
// console.log(transfer.checkTransferStatus())
// console.log(transfer.stop('ROFL AHAHHA'))
// console.log(transfer.makeEror())
// interface Queue<T> {
// 	enqueue(item: T): void; // поставить в очередь
// 	dequeue(): T | undefined; // исключить из очереди
// 	peek(): T | undefined | null; // посмотреть первый элемент
// 	isEmpty(): boolean; // проверка на "пустоту" сущности
// 	length(): number; // проверка на длину
// }
//
// // Реализация очереди через массив
// // Класс ArrayQueue должен имплементировать интерфейс Queue
// // Класс может работать с любым типом данных, то есть помещать любые данные в массив  <-- Важно
//
// // Очередь - это структура данных, которая выглядит как реальная очередь в магазине
// // Первый, кто подошел к прилавку, первым и уйдет. Так же и в коде при выполнении задач
// // Чуть подробнее можно найти в википедии или на других сайтах по поиску "Очередь структура данных"
//
// class ArrayQueue<T> implements Queue<T>{
// 	private queue:T[] = []
// 	enqueue(this:ArrayQueue<T>,item:T): void{
// 		this.queue.push(item)
// 	}; // поставить в очередь
// 	dequeue(this:ArrayQueue<T>): T {
// 		if(this.isEmpty()) {
// 			throw new Error('Очередь пуста')
// 		}else return this.queue.shift() as T
// 	}; // исключить из очереди
// 	peek(this:ArrayQueue<T>): T | null{
// 		if(this.isEmpty()){
// 			return null
// 		}else return this.queue[0]
// 	}; // посмотреть первый элемент
// 	isEmpty(this:ArrayQueue<T>): boolean {
// 		return this.queue.length === 0
// 	}; // проверка на "пустоту" сущности
// 	length(this:ArrayQueue<T>): number{
// 		return this.queue.length
// 	}; // проверка на длину
//
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let myCar = class myCar {
    constructor() {
        this.fuel = '100%';
        this.open = true;
    }
    isOpen() {
        return this.open;
    }
};
__decorate([
    checkAmountFuel,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], myCar.prototype, "isOpen", null);
myCar = __decorate([
    changeDoorStatus(true)
], myCar);
function checkAmountFuel(target, propertyKey, descriptor) {
    descriptor.enumerable = false;
}
function changeDoorStatus(status) {
    return (target) => {
        return class extends target {
            constructor() {
                super(...arguments);
                this.open = status;
            }
        };
    };
}
function changeAmoutOfFuel(amount) {
    return (target) => {
        return class extends target {
            constructor() {
                super(...arguments);
                this.fuel = `${amount}%`;
            }
        };
    };
}
const car = new myCar();
console.log(car.isOpen());
