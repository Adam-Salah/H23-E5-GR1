from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

def sample(request):
    #your python script code
    output=code output
    return HttpResponse(output)