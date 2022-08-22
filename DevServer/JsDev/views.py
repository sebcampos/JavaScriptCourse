from django.shortcuts import render
from django.views.decorators.http import require_GET
from django.http import HttpResponse  # , StreamingHttpResponse, JsonResponse
from django.core.handlers.wsgi import WSGIRequest


@require_GET
def landing_page(request: WSGIRequest) -> HttpResponse:
    return render(request, 'landing_page.html', context={})
