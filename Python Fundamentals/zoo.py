from random import randint

class Animal():
    def __init__(self, nombre, edad, salud, felicidad):
        self.nombre = nombre
        self.edad = edad
        self.salud = salud
        self.felicidad = felicidad
    
    def display_info(self):
        print(f"Nombre: {self.nombre}, Salud: {self.salud}, Felicidad: {self.felicidad}")
        return self

    def alimentar(self):
        self.salud += 10
        self.felicidad += 10
        return self

class Leon(Animal):
    def __init__(self, nombre, edad = randint(0,10), salud = randint(0,100) , felicidad = randint(0,100) ):
        super().__init__(nombre, edad, salud, felicidad)

class Tigre(Animal):
    def __init__(self, nombre, edad = randint(0,10), salud = randint(0,100), felicidad = randint(0,100) ):
        super().__init__(nombre, edad, salud, felicidad)

class Oso(Animal):
    def __init__(self, nombre, edad = randint(0,30), salud = randint(0,100) , felicidad = randint(0,100) , color = "pardo"):
        super().__init__(nombre, edad, salud, felicidad)


class Zoo:
    def __init__(self, zoo_name):
        self.animals = []
        self.name = zoo_name
    def add_lion(self, name):
        self.animals.append( Leon(name) )
    def add_tiger(self, name):
        self.animals.append( Tigre(name) )
    def add_bear(self, name):
        self.animals.append( Oso(name) )
    def print_all_info(self):
        print("-"*20, self.name, "-"*20)
        for animal in self.animals:
            animal.display_info()

zoo1 = Zoo("Cris's Zoo")
zoo1.add_tiger("Tom")
zoo1.add_lion("Simba")
zoo1.add_bear("Baloo")
zoo1.print_all_info()

'''
oso = Oso("Balu")
oso.display_info()
oso.alimentar().display_info()
leon = Leon("Alex")
leon.display_info()
leon.alimentar().alimentar().display_info()
tigre = Tigre("Diego")
tigre.alimentar().display_info()
'''

