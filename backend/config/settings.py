from pathlib import Path
from datetime import timedelta
import os

import dj_database_url


BASE_DIR = Path(__file__).resolve().parent.parent


# =========================
# SECURITY
# =========================

SECRET_KEY = os.environ.get(
    "SECRET_KEY",
    "threadsconnect-development-secret-key"
)

DEBUG = os.environ.get("DEBUG", "False") == "True"


ALLOWED_HOSTS = [
    "localhost",
    "127.0.0.1",
    ".onrender.com",
]


# =========================
# APPLICATIONS
# =========================

INSTALLED_APPS = [

    # Django
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",


    # Third party
    "rest_framework",
    "corsheaders",


    # Local apps
    "accounts",
    "tailors",
    "customers",
    "orders",
    "reviews",
    "messaging",
]


# =========================
# MIDDLEWARE
# =========================

MIDDLEWARE = [

    "corsheaders.middleware.CorsMiddleware",

    "django.middleware.security.SecurityMiddleware",

    "django.contrib.sessions.middleware.SessionMiddleware",

    "django.middleware.common.CommonMiddleware",

    "django.middleware.csrf.CsrfViewMiddleware",

    "django.contrib.auth.middleware.AuthenticationMiddleware",

    "django.contrib.messages.middleware.MessageMiddleware",

    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]


# =========================
# URL
# =========================

ROOT_URLCONF = "config.urls"


# =========================
# TEMPLATES
# =========================

TEMPLATES = [

    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",

        "DIRS": [],

        "APP_DIRS": True,

        "OPTIONS": {

            "context_processors": [

                "django.template.context_processors.request",

                "django.contrib.auth.context_processors.auth",

                "django.contrib.messages.context_processors.messages",

            ],
        },
    },
]


# =========================
# WSGI
# =========================

WSGI_APPLICATION = "config.wsgi.application"


# =========================
# DATABASE
# =========================

DATABASES = {

    "default": dj_database_url.config(

        default=f"sqlite:///{BASE_DIR / 'db.sqlite3'}",

        conn_max_age=600

    )
}


# =========================
# PASSWORD VALIDATION
# =========================

AUTH_PASSWORD_VALIDATORS = [

    {
        "NAME":
        "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },

    {
        "NAME":
        "django.contrib.auth.password_validation.MinimumLengthValidator",
    },

    {
        "NAME":
        "django.contrib.auth.password_validation.CommonPasswordValidator",
    },

    {
        "NAME":
        "django.contrib.auth.password_validation.NumericPasswordValidator",
    },

]


# =========================
# LANGUAGE
# =========================

LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

USE_I18N = True

USE_TZ = True



# =========================
# STATIC FILES
# =========================

STATIC_URL = "/static/"

STATIC_ROOT = BASE_DIR / "staticfiles"



# =========================
# MEDIA
# =========================

MEDIA_URL = "/media/"

MEDIA_ROOT = BASE_DIR / "media"



# =========================
# DEFAULT FIELD
# =========================

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"



# =========================
# CUSTOM USER
# =========================

AUTH_USER_MODEL = "accounts.User"



# =========================
# REST FRAMEWORK
# =========================

REST_FRAMEWORK = {


    "DEFAULT_AUTHENTICATION_CLASSES": (

        "rest_framework_simplejwt.authentication.JWTAuthentication",

    ),


}



# =========================
# JWT
# =========================

SIMPLE_JWT = {

    "ACCESS_TOKEN_LIFETIME": timedelta(days=1),

    "REFRESH_TOKEN_LIFETIME": timedelta(days=7),

}



# =========================
# CORS
# =========================

CORS_ALLOW_ALL_ORIGINS = True



# =========================
# CSRF
# =========================

CSRF_TRUSTED_ORIGINS = [

    "https://*.vercel.app",

    "https://*.onrender.com",

]



# =========================
# SECURITY HEADERS
# =========================

SECURE_PROXY_SSL_HEADER = (
    "HTTP_X_FORWARDED_PROTO",
    "https"
)