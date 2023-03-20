from django.db import models

'''
Models in python are Classes which represent a table in a database
Each model maps to a single table in a database
https://docs.djangoproject.com/en/4.1/ref/models/fields/
Everytime changes in databases : 
python manage.py makemigrations
python manage.py migrate
'''

'''
(opens shell to interact with database)
python manage.py shell 
>>> from users.models import User 
(from appName.modelsFile import ClassName inside models)
>>> User.objects.all() (prints User table)

>>> user1 = User(firstname='Tobias', lastname='Refsnes')
>>> user2 = User(firstname='Linus', lastname='Refsnes')
>>> user3 = User(firstname='Lene', lastname='Refsnes')
>>> user4 = User(firstname='Stale', lastname='Refsnes')
>>> user5 = User(firstname='Jane', lastname='Doe')
>>> users_list = [user1, user2, user3, user4, user5]
>>> for x in users_list:
>>>   x.save()

>>> User.objects.all().values() (check entire User table)
>>> User.objects.all().delete() (delete entire table)
>>> x = User.objects.all()[0] (x = user5)
>>> x.firstname (print x's firstname)
>>> x.firstname = "A"
>>> x.save()
>>> x.delete()

>>> exit() (leaves shell)
Everytime changes are made to the model : 
python manage.py makemigrations users
And then :
python manage.py migrate

'''

class User(models.Model):
    #firstname is a Character field
    firstname = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
    number = models.IntegerField(null=True)
    joinedDate = models.DateField(null=True)
    #null=True -> allows null values in the field

    #just like toString
    #CAREFUL : this has to be inside the User class (tab)
    def __str__(self):
        return f"{self.firstname} {self.lastname}"
