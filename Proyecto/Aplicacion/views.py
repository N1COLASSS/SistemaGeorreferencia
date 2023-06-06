from django.shortcuts import render

# Create your views here.


def mi_sistema(request):
    return render(request, 'sistema.html')
def resultado(request):
    return render(request, 'resultado.html')