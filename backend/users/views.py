from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import User

# Create your views here.
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

def usersScreen(request):
    #creates allUsers object with values of the User model
    users = User.objects.all().values()
    #loads the allUsers.html template
    template = loader.get_template('allUsers.html')
    
    context = {
        #creates an object containing the allUsers object
        #sends the object to the template
        'users' : users,
    }
    
        #outpouts the HTML that is rendered by the template
    return HttpResponse(template.render(context,request))

def details(request, id):
    #gets the id as an arugment
    user = User.objects.get(id=id)
    template = loader.get_template('details.html')
    context = {
        'user': user,
  }
    return HttpResponse(template.render(context, request))
