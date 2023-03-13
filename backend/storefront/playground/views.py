from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

# Create your views here.

#def sayHello(request):
#    return HttpResponse('Hello World')

def sayHello(request):
    #return render(request, 'test.html')
      template = loader.get_template('test.html')
      return HttpResponse(template.render())