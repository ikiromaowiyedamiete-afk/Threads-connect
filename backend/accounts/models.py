from django.db import models
from django.contrib.auth.models import AbstractUser 

from .managers import UserManager

class User(AbstractUser):
    CUSTOMER = "customer"
    PROVIDER = "provider"

    ROLE_CHOICES = [
        (CUSTOMER, "Customer"),
        (PROVIDER, "Service Provider"),
    ]

    email = models.EmailField(
        unique=True
    )

    role = models.CharField(
        max_length=20,
        choices=ROLE_CHOICES,
        default="customer"
    )

    USERNAME_FIELD = "email"

    REQUIRED_FIELDS = [
        "username"
    ]

    objects = UserManager()
    
    def __str__(self):
        return self.email 