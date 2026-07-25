from rest_framework import serializers

from .models import User
from customers.models import Customer
from tailors.models import TailorProfile


class RegisterSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = [
            "id",
            "username",
            "email",
            "password",
            "role",
        ]
        read_only_fields = ["id"]

    def create(self, validated_data):

        password = validated_data.pop("password")

        user = User.objects.create_user(
            password=password,
            **validated_data
        )

        if user.role == User.CUSTOMER:
            Customer.objects.create(user=user)

        elif user.role == User.PROVIDER:
            TailorProfile.objects.create(
                user=user,
                business_name=user.username
            )

        return user