from django.db import models
from datetime import datetime
from django.db import models

class IntegerListField(models.CharField):
    description = 'list of integers'
    def from_db_value(self, value, expression, connection):
        if value is None:
            return None
        return list(map(int, value.split(',')))

    def to_python(self, value):
        if isinstance(value, list):
            return value
        if value is None:
            return None
        return list(map(int, value.split(',')))

    def get_prep_value(self, value):
        if value is None:
            return None
        return ','.join(map(str, value))

class CharListField(models.TextField):
    def from_db_value(self, value, expression, connection):
        if value is None:
            return None
        return list(value.split(','))

    def to_python(self, value):
        if isinstance(value, list):
            return value
        if value is None:
            return None
        return list(value.split(','))

    def get_prep_value(self, value):
        if value is None:
            return None
        return ', '.join(map(str, value))

NUM_OF_LEVELS = 7

class Score(models.Model):
    team = models.CharField(max_length=200)
    blocks = IntegerListField(max_length=200, default=[-1]*(NUM_OF_LEVELS+1))
    codes = CharListField(default=['']*(NUM_OF_LEVELS+1))
    score = models.DecimalField(default=0, decimal_places=3, max_digits=10)
    time = models.DateTimeField(default=datetime.now)

    turtle = IntegerListField(max_length=200, default=[0]*11)
    turtle_codes = CharListField(default=['']*11)
    time2 = models.DateTimeField(default=datetime.now)

    def __str__(self):
        return self.team + ': [' + ', '.join(map(str, self.blocks[1:])) + ']'
