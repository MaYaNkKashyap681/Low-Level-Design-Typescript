interface ISubject {
  attach(observer: IObserver): void;
  detach(observer: IObserver): void;
  notify(): void;
}

interface IObserver {
  update(): void;
}

// Concrete Classes

class Subject implements ISubject {
  private observers: IObserver[] = [];

  public attach(observer: IObserver): void {
    const isExist = this.observers.indexOf(observer);
    if (isExist !== -1) {
      return console.log("Subject: Observer has been attached already.");
    }
    console.log("Subject: Attached an observer.");
    this.observers.push(observer);
  }

  public detach(observer: IObserver): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log("Subject: Nonexistent observer.");
    }
    this.observers.splice(observerIndex, 1);
    console.log("Subject: Detached an observer.");
  }

  notify(): void {
    this.observers.forEach((item: IObserver) => {
      item.update();
    });
  }

  bussinesLogic() {
    console.log("\nSubject: I'm doing something important.");
    let x = Math.floor(Math.random() * (10 + 1));

    console.log(`Subject: My state has just changed to: ${x}`);

    if (x > 6) {
      this.notify();
    }
  }
}

// Creating Observers
class EmailObserver implements IObserver {
  private email: string;

  constructor(email) {
    this.email = email;
  }

  update(): void {
    console.log("Mail Sent to ", this.email);
  }
}

class TextObserver implements IObserver {
  private contact: string;

  constructor(contact) {
    this.contact = contact;
  }

  update(): void {
    console.log("Text Sent to ", this.contact);
  }
}

// main

function caller() {
  var productSubject: Subject = new Subject();

  var email1: EmailObserver = new EmailObserver("mayankkashyap@gmail.com");
  var email2: EmailObserver = new EmailObserver("robingreen@gmail.com");
  var email3: EmailObserver = new EmailObserver("blakeblue@gmail.com");

  var contact1: TextObserver = new TextObserver("79797xxxxx");
  var contact2: TextObserver = new TextObserver("79767xxxxx");
  var contact3: TextObserver = new TextObserver("79737xxxxx");

  productSubject.attach(email1);
  productSubject.attach(email3);
  productSubject.attach(contact2);

  productSubject.bussinesLogic();
  productSubject.bussinesLogic();

  productSubject.detach(email1);

  productSubject.bussinesLogic();
  productSubject.bussinesLogic();
}

caller();
