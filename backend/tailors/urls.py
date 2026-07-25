from django.urls import path
from .views import TailorProfileView

urlpatterns = [

    path(
        "profile/",
        TailorProfileView.as_view(),
        name="tailor-profile"
    ),

]