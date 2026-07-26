from rest_framework import serializers
from .models import TailorProfile


class TailorProfileSerializer(serializers.ModelSerializer):

    username = serializers.CharField(
        source="user.username",
        read_only=True
    )

    email = serializers.EmailField(
        source="user.email",
        read_only=True
    )

    class Meta:
        model = TailorProfile

        fields = [
            "id",
            "username",
            "email",
            "business_name",
            "bio",
            "years_of_experience",
            "specialization",
            "phone",
            "address",
            "city",
            "state",
            "profile_picture",
            "cover_photo",
            "price_range",
            "available",
            "created_at",
            "updated_at",
        ]

        read_only_fields = [
            "id",
            "created_at",
            "updated_at",
        ]