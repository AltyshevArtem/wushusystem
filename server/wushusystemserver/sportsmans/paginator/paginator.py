# REST_FRAMEWORK
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination

class PaginatorSportsman(PageNumberPagination):
    page_size = 30

    def get_paginated_response(self, data):
        return Response({
            'links': {
                'next': self.get_next_link(),
                'previous': self.get_previous_link()
            },
            'page_size': self.page_size,
            'count': self.page.paginator.count,
            'results': data
        })