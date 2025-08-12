from django.urls import path

from .views import SignupView, MeView, ChangePasswordView, LogoutView, LoginView, TokenRefresh, TokenVerify


urlpatterns = [
    path("signup/", SignupView.as_view(), name="signup"),
    path("login/", LoginView.as_view(), name="login"),
    path("token/refresh/", TokenRefresh.as_view(), name="token_refresh"),
    path("token/verify/", TokenVerify.as_view(), name="token_verify"),
    path("logout/", LogoutView.as_view(), name="logout"),
    path("me/", MeView.as_view(), name="me"),
    path("change-password/", ChangePasswordView.as_view(), name="change_password"),
]


