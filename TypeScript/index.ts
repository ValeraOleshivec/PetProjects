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

// Стэк - это еще одна структура данных. Проще всего её представить как стопку листов на столе
// Последний, который вы положите сверху, вы и первым потом возьмете.
// Чуть подробнее можно найти в википедии или на других сайтах по поиску "Стэк структура данных"
// Класс Stack содержит другие методы, так что ничего имплементировать не нужно
// Класс может работать с любым типом данных, то есть помещать любые данные в массив и содержит массив любого типа  <-- Важно

// class Stack<T> {
// 	private stack:T[] = []
// 	private limit:number
// 	// Создать приватное свойство stack, которое по умолчанию массив и содержит массив любого типа
// 	// Создать приватное свойство limit, которое будет типом number
//
// 	// Здесь мы установим лимит на стопку листов.
// 	// При переполнении стэка программа зависает, а очень высокая стопка листов падает
// 	// Так что лимит всегда должен быть
// 	constructor(limit: number = Number.MAX_VALUE) {
// 		this.limit = limit;
// 	}
//
// 	push(this:Stack<T>,value:T) {
// 		if (this.length() >= this.limit){
// 			throw new Error('Стек переполнен')
// 		}else{
// 			this.stack.push(value)
// 		}
// 	}
// 	pop(this:Stack<T>):void | T {
// 		if (this.length()){
// 			return this.stack.pop()
// 		}else throw new Error('Стек пустой')
// 		// Удаляет последний элемент массива
// 		// Если в стеке пусто - выбрасывает ошибку (throw new Error)
// 		// При удалении элемента возвращает его
// 		// Простыми словами: вы берете верхний лист в стопке и используете его
// 		// Если на столе нет листов - получается ошибка, брать нечего
// 	}
//
// 	length(this:Stack<T>):number {
// 		return this.stack.length
// 	}
//
// 	isEmpty(this:Stack<T>) {
// 		return this.length() ? 'Не пустой' : 'Пустой'
// 	}
//
// 	top(this:Stack<T>) :null | T {
// 		if (this.length()){
// 			return this.stack[this.length()-1]
// 		}else return null
// 		// Возвращает последний (верхний) элемент стэка, но не удаляет его
// 		// Вы просто читаете, что написано на верхнем листе
// 		// Если стэк пуст - вернется null
// 	}
// }

// Для тестов

// const arrTest1 = new ArrayQueue<number>();
// arrTest1.enqueue(5);
// arrTest1.enqueue(10);
// console.log(arrTest1.peek());
// console.log(arrTest1.dequeue());
// console.log(arrTest1.length());

// const arrTest2 = new ArrayQueue<string>();
// arrTest2.enqueue("5");
// arrTest2.enqueue("10");
// console.log(arrTest2.peek());
// console.log(arrTest2.dequeue());
// console.log(arrTest2.length());
//
// const stackTest1 = new Stack<number>(10);
// stackTest1.push(20);
// stackTest1.push(50);
// console.log(stackTest1.top());
// console.log(stackTest1.pop());
// console.log(stackTest1.length());
//
// const stackTest2 = new Stack<string>(10);
// stackTest2.push("20");
// stackTest2.push("50");
// console.log(stackTest2.top());
// console.log(stackTest2.pop());
// console.log(stackTest2.length());
interface ICar{
	fuel:string,
	open:boolean,
	freeSeats:number
}
@changeDoorStatus(true)
class myCar implements ICar{
	fuel:string= '100%';
	open:boolean= true;
	freeSeats:number;
	@checkAmountFuel
	isOpen(){
		return this.open
	}
}

function checkAmountFuel (
	target: any,
	context : ClassMemberDecoratorContext
){
	return function (this:any,...args:any[]){
		console.log(this.fuel);
		return target.apply(this,args)
	};
}
function changeDoorStatus (status:boolean) {
	return <T extends { new(...args: any[]): {} }>(target: T, context: ClassDecoratorContext<T>) => {
		return class extends target {
			open = status
		}
	}
}
function changeAmoutOfFuel (amount:number) {
	return <T extends { new(...args: any[]): {} }>(target: T, context: ClassDecoratorContext<T>) => {
		return class extends target {
			fuel = `${amount}%`
		}
	}
}
const car = new myCar()
console.log(car.isOpen())
