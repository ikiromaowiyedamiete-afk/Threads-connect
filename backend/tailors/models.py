from django.db import models
from django.conf import settings


class TailorProfile(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="tailor_profile"
    )

    business_name = models.CharField(max_length=150)
    bio = models.TextField(blank=True)

    years_of_experience = models.PositiveIntegerField(default=0)

    specialization = models.CharField(
        max_length=100,
        blank=True
    )

    phone = models.CharField(
        max_length=20,
        blank=True
    )

    address = models.CharField(
        max_length=255,
        blank=True
    )

    city = models.CharField(
        max_length=100,
        blank=True
    )

    state = models.CharField(
        max_length=100,
        blank=True
    )

    profile_picture = models.ImageField(
        upload_to="tailors/profile/",
        blank=True,
        null=True
    )

    cover_photo = models.ImageField(
        upload_to="tailors/cover/",
        blank=True,
        null=True
    )

    price_range = models.CharField(
        max_length=100,
        blank=True
    )
  
    available = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)

    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.business_name 