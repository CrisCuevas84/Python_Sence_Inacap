
class SLNode:
    def __init__(self, val):
        self.value = val
        self.next = None


class SList:
    def __init__(self):
        self.head = None

    def add_to_front(self, val):	# agrega la linea, toma un valor
        new_node = SLNode(val)      # crea una instancia de la clase Node usando el valor dado
        current_head = self.head	# salva la cabecera actual en una variable
        new_node.next = current_head # Coloca el proximo nodo en la lista de la cabecera actual
        self.head = new_node	    # Coloca la lista de la cabecera al nodo que se creó en el paso anterior
        return self	                # return self para permitir las cadenas

    def add_to_back(self, val):     # acepta un valor 
        if self.head == None:	    # si la lista está vacia
            self.add_to_front(val)	# ejecuta el método add_to_front
            return self	            # asegurémonos de que el resto de esta función no suceda si agregamos al frente
        new_node = SLNode(val)      # crea una nueva instancia de nuestra clase Node con el valor dado
        runner = self.head          # establece un iterador para que comience al principio de la lista
        while (runner.next != None): # iterador hasta que el iterador no tenga un vecino
            runner = runner.next    # Incrementa el corredor al siguiente nodo de la lista.
        runner.next = new_node	    # Incrementa el corredor al siguiente nodo de la lista.
        return self                 # retorna self para permitir el encadenamiento

    def print_values(self):
        runner = self.head          # un puntero al primer nodo de la lista
        while (runner != None):     # iterando mientras el corredor es un nodo y no ninguno
            print(runner.value)     # imprimir el valor del nodo actual
            runner = runner.next 	# Establecer el corredor a su vecino
        return self                 # Una vez que el bucle está terminado, regrese a sí mismo para permitir el encadenamiento


my_list = SList()	# crear una nueva instancia de una lista
my_list.add_to_front("are").add_to_front("Linked lists").add_to_back("fun!").print_values()
# encadenamiento, yeah!
# la salida deberia ser:
# Listas enlazadas son divertidas!
