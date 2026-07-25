from django.contrib import admin
from .models import TailorProfile

@admin.register(TailorProfile)
class TailorProfileAdmin(admin.ModelAdmin):
    list_display = (
        "business_name",
        "user",
        "city",
        "state",
        "available",
    )

    search_fields = (
        "business_name",
        "user__email",
        "city",
    )

    list_filter = (
        "available",
        "state",
    )
# Register your models here.
