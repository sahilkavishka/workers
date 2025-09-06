from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    ROLE_CHOICE=(
        ("buyer","Buyer"),
        ("seller","Seller"),
        ("admin","admin"),
    )
    role=models.CharField(max_length=10,choices=ROLE_CHOICE,default="buyer")

    def __str__(self):
        return self.username

# Create your models here.
