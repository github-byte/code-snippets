# x = 1        
# is_cool = True
# y = 'so'
x,is_cool,y = 1,True,2.6

# typecasting
x = str(x)
y = int(y)
age = 37
# getting type of data
print(x,type(x),y)

# arguments by position
print('{2},{1},{0}'.format('a', 'b', 'c'))

# arguments by variables
# print('My name is {name}'.format(name = 'Dipannita'))

name = 'Dipannita'
age  = 12
sentence = 'hello there my name is Dipannita222'

# F-STRINGS
print(f'My name is {name} and age is {age}')

print(sentence.capitalize())

print(sentence.lower())

print(sentence.upper())

print(sentence.swapcase())

print(len(sentence))

sub = 'h'

print(sentence.replace('hello', 'world'))

print(sentence.count(sub))

# startswith
# endswith

print(sentence.startswith('hel'))

print(sentence.endswith('ta'))

print(sentence.split())

print(sentence.isalnum())

print(sentence.isalpha())

m = 2

print(sentence.isdigit())

# lists

x = ['apple','lemon','mango']

x.append('orange')

x.remove('lemon')

x.insert(1,'women')

x.pop(1)
x.reverse()
x.sort(reverse=True)
print(x)
