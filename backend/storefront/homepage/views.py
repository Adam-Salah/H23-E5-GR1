# Create your views here.
from django.shortcuts import render
from django.http import HttpResponse

#def sayHello(request):
#    return HttpResponse('Hello World')

def homePage(request):
    return HttpResponse('this is the Home Page')
