from django.db import models

class People(models.Model):
    company = models.CharField(max_length = 200)
    department = models.CharField(max_length = 200)
    tubNum = models.CharField(max_length = 200)
    lastName = models.CharField(max_length = 200)
    firstName = models.CharField(max_length = 200)
    middleName = models.CharField(max_length = 200)
    passport = models.CharField(max_length = 200)
    numberPassport = models.CharField(max_length = 200)
    datePassport = models.CharField(max_length = 200)
    address = models.CharField(max_length = 250)
    phone = models.CharField(max_length = 200)

