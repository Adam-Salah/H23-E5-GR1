
from django import forms
from django.contrib.auth.forms import UserCreationForm

from account.models import Account

class RegistrationForm(UserCreationForm):
	""" Form pour enregistrer un compte

	Args:
		UserCreationForm (_type_): _description_
	"""
	email = forms.EmailField(max_length=50, help_text='Valid email address required')

	class Meta:
		model = Account
		fields = ("email", "username", "password1", "password2")