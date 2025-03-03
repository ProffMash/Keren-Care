from django.shortcuts import render
from rest_framework import viewsets
from .models import Contact, Appointment
from .serializers import ContactSerializer, AppointmentSerializer

# Contact ViewSet
class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    
# Appointment ViewSet
class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer