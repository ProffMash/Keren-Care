from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ContactViewSet, AppointmentViewSet

# router and register viewsets
router = DefaultRouter()
router.register(r'contacts', ContactViewSet)
router.register(r'appointments', AppointmentViewSet)

# URL patterns
urlpatterns = [
    path('api/', include(router.urls)),
    path('', include(router.urls)),  # Include router URLs for browsable API
]