from django.db import models

# Create your models here.

class Property(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(default='default.png', upload_to='images/')
    price = models.DecimalField(max_digits=20, decimal_places=2)
    location = models.CharField(max_length=255)
    size = models.DecimalField(max_digits=10, decimal_places=2)

    def formatted_price(self):
        return '${:,}'.format(self.price)

    def formatted_size(self):
        return '{:,} sq ft'.format(self.size)

    def __str__(self):
        return self.title