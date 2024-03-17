from django.shortcuts import render
from django.http import HttpResponse



def mainpage(request):
    return render(request,'mainpage.html')
# Create your views here.
