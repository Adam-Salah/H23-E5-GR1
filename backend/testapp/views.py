from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render

'''
context['testing'] = "wadwadwad"

context = {
'testing': "testing",
'testing2': 123
}

#Passing a list
#instanciate list
listOfValues = []
listOfValues.append("first")
listOfValues.append("second")
context['listOfValues'] = listOfValues
'''
def get_input(request):
    if request.method == 'POST':
        input_value = request.POST.get('input_field')
        print(input_value)
    return render(request, 'input.html')