
class MathDojo:
    def __init__(self):
        self.result = 0

    def add(self, num, *nums):
        self.result += num
        for lista in nums:
            self.result += lista
        return self
    
    def subtract(self, num, *nums):
        self.result -= num
        for lista in nums:
            self.result -= lista
        return self

# crear una instruccion:
md = MathDojo()
# para probar: 
x = md.add(2).add(2,100,1).subtract(3,2).result
print(x)	# debe imprimir 5
# corre cada uno de los metodos algunos mas veces y valida el resultado!
