from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('realestate', views.RealEstateViewSet, basename='realestate')


urlpatterns = [
]
urlpatterns += router.urls
