from django.shortcuts import render
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Score
from datetime import datetime


def calculate_score(blocks_used):
    weightage = [0, 0, 0, 20, 20, 20, 20, 20]
    best = [0, 5, 5, 5, 5, 5, 5, 5]

    score = 0
    for i in range(1, len(best)):
        if blocks_used[i] != -1:
            score += weightage[i] * best[i] / blocks_used[i]

    return score


@csrf_exempt
def update(request):

    if request.user.is_authenticated :
        payload = json.loads(request.body)

        team = payload['team']
        map_variable = payload['map']
        blocks = payload['blocks']
        code = payload['code']

        instance = Score.objects.get_or_create(team=team)[0]

        if (instance.blocks[map_variable] > blocks) or (instance.blocks[map_variable] == -1):
            instance.blocks[map_variable] = blocks
            instance.codes[map_variable] = code

            instance.score = calculate_score(instance.blocks)
            instance.time = datetime.now()
            instance.save()

        return JsonResponse({'team': team})
    else:
        return JsonResponse({'team' : None})


@csrf_exempt
def update2(request):

    if request.user.is_authenticated :
        payload = json.loads(request.body)

        team = payload['team']
        level = payload['level']
        code = payload['code']

        instance = Score.objects.get_or_create(team=team)[0]

        if instance.turtle[level] != 1:
            instance.turtle[level] = 1
            instance.turtle_codes[level] = code
            instance.time2 = datetime.now()

            instance.save()

        return JsonResponse({'team': team})
    else:
        return JsonResponse({'team' : None})




@csrf_exempt
def update3(request):

    if request.user.is_authenticated :
        payload = json.loads(request.body)

        team = payload['team']
        level = payload['level']
        code = payload['code']

        instance = Score.objects.get_or_create(team=team)[0]

        if instance.movie[level] != 1:
            instance.movie[level] = 1
            instance.movie_codes[level] = code
            instance.time3 = datetime.now()

            instance.save()

        return JsonResponse({'team': team})
    else:
        return JsonResponse({'team' : None})