/**           CatÃ¡logo escolar
 *
 * La universidad quiere un catÃ¡logo contenga material
 * de referencia rÃ¡pida para cada escuela de la ciudad.
 *
 * Necesitamos crear clases para primaria y secundaria.
 * Dado que estas clases comparten propiedades y mÃ©todos,
 * cada una heredarÃ¡ de una clase principal School.
 * Nuestra clase principal y tres clases secundarias
 * tienen las siguientes propiedades, getters, setters y
 * mÃ©todos:
 *
 * Escuela (School)
 *  - Propiedades:
 *      - name (string)
 *      - level (una de de tres cadenas: 'prymary','midde' o 'high')
 *      - numberOfStudents (number)
 *  - Getters:
 *      - Todas las propiedades tienen getters.
 *  - Setters:
 *      - La propiedad numberOfStudents cuenta con un setter.
 *  - MÃ©todos:
 *      - .quickFacts() y .pickSubstituteTeacher() (este es
 *         un mÃ©todo estÃ¡tico)
 *
 * Primaria (Primary)
 *  - Incluye todo lo de la clase School, mÃ¡s una propiedad
 *    adicional.
 *  - Propiedad: pickupPolicy (string)
 *
 * Medio (Middle)
 *  - No incluye propiedades ni mÃ©todos adicionales.
 *
 * Secundaria (High)
 *  - Incluye todo lo de la clase School, mÃ¡s una
 *    propiedad adicional.
 *  - Propiedad: sportsTeams (array de strings)
 *
 *
 * Paso 1:
 * Crea una clase padre para las clases Primary, Middle
 * y High,  Crea una clase vacia llamada School.
 *
 * */
class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set setNumberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === "number") {
      this._numberOfStudents = newNumberOfStudents;
    } else {
      console.log("Invalid input: numberOfStudents must be ser to a Number.");
    }
  }

  quickFacts() {
    console.log(
      `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`
    );
  }

  static pickSubstituteTeacher(substituteTeachers) {
    const randomIndex = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randomIndex];
  }
}
/*
 *
 * Paso 2:
 * Dentro de la clase School, cree un constructor()
 * vacÃ­o que acepte tres parÃ¡metros: los
 * nombres de estos parÃ¡metros deben coincidir con las
 * propiedades mencionadas en la descripciÃ³n anterior.
 *
 * Paso 3:
 * Dentro del constructor(), establezca las propiedades
 * de School.  Anteponga un guiÃ³n bajo (_) a todas las
 * propiedades.
 *
 * Paso 4:
 * Cree getters para las propiedades name, level y
 * numberOfStudents.  Cada getter debe devolver el valor
 * guardado en la propiedad correspondiente.
 *
 * Paso 5:
 * Crea un setter para numberOfStudents. El mÃ©todo debe
 * comprobar primero si la entrada (newNumberOfStudents)
 * es un nÃºmero.
 *
 * Si es un nÃºmero, se establece la propiedad numberOfStudents.
 * Si no es un nÃºmero, se registra 'Invalid input:
 * numberOfStudents must be ser to a Number.'
 *
 * Paso 6:
 * Debajo de tus captadores, crea un mÃ©todo llamado
 * quickFacts() que registre la siguiente cadena en la
 * consola:
 *
 *  SCHOOL NAME educates NUMBER OF STUDENTS students at the LEVEL school level.
 *
 * En lugar de SCHOOL NAME, sustituye el valor name de una
 * instancia de School.
 * En lugar de NUMBER OF STUDENTS, sustituye el valor
 * numberOfStudents de una instancia de School.
 * En lugar de LEVEL, sustituye el valo de una instancia
 * level de School.
 *
 *
 * Paso 7:
 * En .quickFacts(), cree un mÃ©todo estÃ¡tico llamado
 * pickSubstituteTeacher().  Este mÃ©todo debe recibirÃ¡
 * un parÃ¡metro llamado substituteTeachers.
 * El parÃ¡metro substituteTeachers tomarÃ¡ una
 * matriz de cadenas.
 *
 * Dentro del mÃ©todo, genere aleatoriamente un nÃºmero entero
 * entre 0 y 1 menos la longitud del array substituteTeachers.
 * Use este nÃºmero para acceder y devolver al profesor
 * sustituto en ese Ã­ndice generado aleatoriamente.
 *
 * MÃ©todo estÃ¡tico significa que no se puede llamar
 * directamente a travÃ©s de una instancia de la clase,
 * sino que se debe llamar a travÃ©s de la clase.
 * Un mÃ©todo estÃ¡tico es una funciÃ³n definida dentro de
 * una clase usando la palabra clave static.
 * No necesita una instancia de la clase para ser llamado. Se llama directamente desde la clase, no desde un objeto creado con esa clase.
 *
 *
 * Crear una clse de escuela primaria.
 * Paso 8:
 * A continuaciÃ³n, crea una clase llamada PrimarySchool
 * que extienda la clase School.
 * */
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

/*
 * 
 * Paso 9:
 * Dentro de la clase PrimarySchool, crea un constructor()
 * que acepte tres argumentos.
 * 
 * Paso 10:
 * Realiza la llamada super() en la primera lÃ­nea del
 * constructor(name, 'primary', numberOfStudents) de 
 * PrimarySchool.
 * Dado que esta es la subclase PrimarySchool, le hemos
 * pasado 'primary' como valor de la propiedad level
 * al constructor padre School.
 * 
 * paso 11:
 * El tercer argumento es pickupPolicy.
 * 
 * Paso 12:
 * Dado que nuestra clase PrimarySchool hereda de Schools,
 * las propiedades y los getters, solo necesitamos crear
 * un getter en la clase PrimarySchool.
 * AÃ±adelo a la clase PrimarySchool. Cada getter debe
 * devolver el valor guardado en esa propiedad.
 * 
 * 
 * Paso 13:
 * En esta tarea, crearÃ¡ una clase HighSchool que extienda
 * la clase School.  AdemÃ¡s de las propiedades, los 
 * captadores y los mÃ©todos de la clase School.
 * HighSchool incluye lo siguiente:
 * Propiedades:
 *   - sportsTeams (array de strings)
 *   - Captadores: un captador para la matriz sportsTeams.
 *       el captadordebe registrar todos los eventos
 *       deportivos en la consola.
 * 
 * Siga estos pasos para completar la tarea:

    - Crea una clase HighSchool vacÃ­a que extienda School.
    - Crea un constructor()que acepte argumentos para name,
      numberOfStudents, y sportsTeams.
    - En la primera lÃ­nea de constructor(), llame super 
      y pase name, 'high', y numberOfStudents como argumentos.
    - En la siguiente lÃ­nea, configure la propiedad sportsTeams 
      usando this._
    - Bajo constructor(), crea un captador para sportsTeams.
    - Ãšsa console.log() para imprimir el valor sportsTeams 
      en la consola. 
      */
class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, "high", numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    return console.log(this._sportsTeams);
  }
}
/*

 *Paso 14:
 * Crea una instancia PrimarySchool con las siguientes
 * Propiedades:
 *   name:'Lorraine Hansbury'
     numerOfStudents:514
     pickupPolicy:'Students must be picked up by a parent, guardian, or a family member over the age of 13.' 
 *      
 * Guarde la instancia en una variable llamada lorraineHansbury.
 * 
 * */
const lorraineHasBury = new PrimarySchool(
  "Lorraine Hansbury",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);
/*
 *
 * Paso 15:
 * Llamar  a .quickFacts() con la instancia lorraineHansbury.
 *
 * */
lorraineHasBury.quickFacts();
/*
 *
 * Paso 16:
 * La directora Lorraine Hansbury necesita un sustituto para el dÃ­a.
 * Invoca a .pickSubstituteTeacher() en School, y pasa el siguiente
 * argumento:
 * ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];
 *
 * */
console.log(
  School.pickSubstituteTeacher([
    "Jamal Crawford",
    "Lou Williams",
    "J. R. Smith",
    "James Harden",
    "Jason Terry",
    "Manu Ginobli",
  ])
);
/*
 *Paso 17:
   *Crea una instancia de HighSchool con las siguientes Propiedades:
      name: 'Al E. Smith',
        numberOfStudents: 415,
        sportsTeams: ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']

    Guarda la instancia en una variable llamada alSmith.
    */
const alSmith = new HighSchool("Al E. Smith", 415, [
  "Baseball",
  "Basketball",
  "Volleyball",
  "Track and Field",
]);
/*

* Paso 18:
 Obten el valor guardado en la propiedad sportsTeams en alSmith.

 */
alSmith.sportsTeams;
/*

 Paso 19:
 Buen trabajo, si quieres continuar practicando, puedes:

    Crear una clase de escuela secundaria.
    Agregue mÃ¡s propiedades a cada clase 
    ( averageTestScores, schoolOverview, etc.).
    Crea una clase llamada SchoolCatalogque contenga 
    una colecciÃ³n de escuelas. 
    Crea una instancia de SchoolCatalogpara escuelas primarias, 
    secundarias y preparatorias.
*/
