class Main{
    public static void main(String[] args) {
        System.out.println("Hola Mundo");
        Car car = new Car("AMQ234", new Account("Andres Herrera","AND123"));
        car.passenger = 5;
        car.printDataCar();

        Car car2 = new Car("FRY43C", new Account("Jorge Santos","AND456"));
        car2.passenger = 12;
        System.out.println("Car License: "+ car2.license);
        car2.printDataCar();
    }
}

//De esta manera se hacia anteriormente cuando no habiamos definido el metodo constructor

// public static void main(String[] args) {
//     System.out.println("Hola Mundo");
//     Car car = new Car();
//     car.license = "AMQ234";
//     car.driver = "Andres Herrera";
//     car.passenger = 5;
//     car.printDataCar();

//     Car car2 = new Car();
//     car2.license = "RWS898";
//     car2.driver = "Jorge Santos";
//     car2.passenger = 12;
//     System.out.println("Car License: "+ car2.license);
//     car2.printDataCar();
// }
// }

