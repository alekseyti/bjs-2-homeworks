// Базовый класс для печатного издания
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  fix() {
    this.state = this._state * 1.5;
  }

  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }

  get state() {
    return this._state;
  }
}

// Класс журнала
class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

// Класс книги
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

// Роман
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

// Фантастика
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

// Детектив
class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    return this.books.find(book => book[type] === value) || null;
  }

  giveBookByName(bookName) {
    const bookIndex = this.books.findIndex(book => book.name === bookName);
    if (bookIndex === -1) {
      return null;
    }
    return this.books.splice(bookIndex, 1)[0];
  }
}

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {}; // оценки по предметам: { предмет: [оценки] }
  }

  addMark(mark, subject) {
    if (typeof mark !== 'number' || mark < 2 || mark > 5) {
      return; // невалидная оценка
    }

    if (!this.marks[subject]) {
      this.marks[subject] = []; // создаём предмет, если его ещё нет
    }

    this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    const subjectMarks = this.marks[subject];
    if (!subjectMarks || subjectMarks.length === 0) {
      return 0;
    }

    const sum = subjectMarks.reduce((acc, mark) => acc + mark, 0);
    return sum / subjectMarks.length;
  }

  getAverage() {
    const subjects = Object.keys(this.marks);
    if (subjects.length === 0) {
      return 0;
    }

    const totalAverage = subjects.reduce((acc, subject) => {
      return acc + this.getAverageBySubject(subject);
    }, 0);

    return totalAverage / subjects.length;
  }
}