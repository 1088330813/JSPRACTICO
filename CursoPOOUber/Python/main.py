from account import Account
from car import Car

if __name__== "__main__":
    print("Hola Mundo")

car = Car("ANGJ88", Account("Andres Carmona","AND8778"))
print(vars(car))
print(vars(car.driver))

    # car = Car()
    # car.license = "ANGJ88"
    # car.driver = "Andres Carmona"
    # print (vars(car))

    # car2 = Car()
    # car2.license = "HJF89"
    # car2.driver = "Jorge Santos"
    # print (vars(car2))