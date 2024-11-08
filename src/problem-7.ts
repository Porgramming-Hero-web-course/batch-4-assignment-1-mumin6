class Car{
    make: string;
    model: string;
    year: number;
    constructor(make: string,model: string,year: number) {
        this.make = make,
        this.model = model,
        this.year=year
    }
    getCarAge() {
        const currentYear = new Date().getFullYear();
        const age = currentYear - this.year
        if (!(age < 0)) {
         return age
        }
        
    }
}

const car = new Car("Honda", "Civic", 2018);
car.getCarAge()
