from rest_framework import serializers

from .models import User
from customers.models import Customer
from tailors.models import Provider


class RegisterSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = [
            "email",
            "username",
            "password",
            "role"
        ]

    def create(self, validated_data):

        password = validated_data.pop("password")

        user = User.objects.create_user(
            password=password,
            **validated_data
        )

        if user.role == "customer":
            Customer.objects.create(user=user)

        elif user.role == "provider":
            Provider.objects.create(user=user)

        return user