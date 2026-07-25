from rest_framework import generics, permissions
from .models import TailorProfile
from .serializers import TailorProfileSerializer

class TailorProfileView(
    generics.RetrieveUpdateAPIView
):

    serializer_class = TailorProfileSerializer 
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get_object(self):

        profile, created = TailorProfile.objects.get_or_create(
            user=self.request.user,
            defaults={
                "business_name": self.request.user.username
            }
        )

        return profile 