b = ('apple','mango','orange')

# b[1] = 'banana'
new_tuple = ('name',)

print(b,new_tuple)

collection_set = {1,2,3,3, 'apple'}

print(collection_set)

collection_set.add(5)

print(collection_set)

collection_set.remove(5)

print(2 in collection_set, len(collection_set))
fruit_tuple = {2,3,4}
del fruit_tuple
del collection_set
# collection_set.clear()


# print(collection_set, fruit_tuple)

dict_new = {
    'first_name': 'Figger',
    'last_name': 'Latsbs'
}

dict_new_2 = dict(first_name = 'Dipannita', last_name= 'Roy', age=12)

dict_new_2.pop('age')
dict_new_3 = dict_new_2
print(dict_new, dict_new_2.get('last_name'), dict_new_2.items(), dict_new_2.keys(), dict_new_2.values())

def sumTwoNums(num1=0,num2=0):
    num3 = num1+num2
    return num3

summer = sumTwoNums(2,3)
arrowFunc = lambda num1,num2 : num1 + num2
print(summer, arrowFunc)

def multiple(n):
   return n**m
m=5
print(multiple(2))