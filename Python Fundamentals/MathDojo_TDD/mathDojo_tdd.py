

import unittest

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
#x = md.add(2).add(2,5,1).subtract(3,2).result
y = md.subtract(2,4,6,8,10).result
print(y)


class MathPrueba(unittest.TestCase):
	def setUp(self):
		self.md = MathDojo()
	
	def testAdd(self):
		self.assertEqual(self.md.add(2,4,6,8,10).result, 30)

	def testsubtract(self):
		self.assertEqual(self.md.subtract(2,4,6,8,10).result, -30)

if __name__ == '__main__':
    unittest.main() # esto ejecuta nuestras pruebas	