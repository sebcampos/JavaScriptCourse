from django.shortcuts import render
from django.views.decorators.http import require_GET
from django.http import HttpResponse  # , StreamingHttpResponse, JsonResponse
from django.core.handlers.wsgi import WSGIRequest


@require_GET
def landing_page(request: WSGIRequest) -> HttpResponse:
    return render(request, 'index.html', context={})


@require_GET
def hw2(request: WSGIRequest) -> HttpResponse:
    return render(request, 'hw2.html', context={})


@require_GET
def hw3(request: WSGIRequest) -> HttpResponse:
    return render(request, 'hw3.html', context={})


@require_GET
def hw4(request: WSGIRequest) -> HttpResponse:
    return render(request, 'hw4.html', context={})


@require_GET
def hw5(request: WSGIRequest) -> HttpResponse:
    return render(request, 'hw5.html', context={})


@require_GET
def hw6(request: WSGIRequest) -> HttpResponse:
    return render(request, 'hw6.html', context={})


@require_GET
def hw7(request: WSGIRequest) -> HttpResponse:
    return render(request, 'hw7.html', context={})


@require_GET
def hw8(request: WSGIRequest) -> HttpResponse:
    return render(request, 'hw8.html', context={})
