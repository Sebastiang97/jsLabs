(() => {

    // No aplicando el principio de responsabilidad única

    type Gender = 'M' | 'F';

    interface PersonPros {
        name: string;
        gender: Gender;
        birthdate: Date
    }

    class Person {
        public name: string
        public gender: Gender
        public birthdate: Date
        constructor({name, gender, birthdate}: PersonPros) {
            this.name = name
            this.gender = gender
            this.birthdate = birthdate

        }
    }

    interface UserPros {
        email: string
        role: string
        name: string
        gender: Gender
        birthdate: Date
    }

    class User extends Person {

        public lastAccess: Date
        public email: string
        public role: string
        name: string
        gender: Gender
        birthdate: Date
        constructor({
            email,
            role,
            name,
            gender,
            birthdate,
        }: UserPros) {
            super({name, gender, birthdate});
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(email, role, name, gender, birthdate);
        }
    }


    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'fernando@google.com',
        'Admin',
        'Fernando',
        'M',
        new Date('1985-10-21')
    );

    console.log({ userSettings });


})();