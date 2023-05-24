from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from account.models import Account

class AccountAdmin(UserAdmin):
	""" Utilisateur Admin

	Args:
		UserAdmin (_type_): _description_
	"""
	
	list_display = ('email', 'username', 'is_admin', 'is_staff')

	search_fields = ('email', 'username',)

	filter_horizontal = ()
	list_filter = ()
	fieldsets = ()

admin.site.register(Account, AccountAdmin)
