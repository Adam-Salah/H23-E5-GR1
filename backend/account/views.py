from django.shortcuts import render, redirect
from account.forms import RegistrationForm

# user authentification
from django.contrib.auth import login, logout, authenticate
from django.contrib import messages

# Create your views here.

def registration_view(request):
	""" Page pour enregistrer un utilisateur

	Args:
		request (_type_): _description_

	Returns:
		_type_: _description_
	"""
	context = {}
	if request.POST:
		form = RegistrationForm(request.POST)
		if form.is_valid():
			form.save()
			email = form.cleaned_data.get('email')
			raw_password = form.cleaned_data.get('password1')
			account = authenticate(email=email, password=raw_password)
			login(request, account)
			# after pressing submit, redirect to where
			return redirect('login')
		else:
			context['registration_form'] = form
	else: #GET request
		form = RegistrationForm()
		context['registration_form'] = form
	return render(request, 'register.html', context)

def login_view(request):

	""" Page pour login

	Returns:
		_type_: _description_
	"""

	if request.method == 'POST':
		email = request.POST.get('email')
		password = request.POST.get('password')

		# verify if user is inside database
		user = authenticate(request, email=email, password=password)
		if user is not None:
			login(request, user)
			return redirect('../') 
		else:
			messages.info(request, 'Username or password is incorrect')

	context = {}
	return render(request, 'login.html', context)
