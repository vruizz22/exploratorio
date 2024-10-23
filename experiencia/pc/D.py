n = int(input())
for _ in range(n):
    numeros = list(map(int, input().split(" ")))
    malas = numeros[0] - numeros[1]  # 0 malas peor caso
    puntaje = numeros[1] * 3 - malas
    # mayor igual a puntaje
    if puntaje >= numeros[2]:
        print("PASS")
    else:
        print("FAIL")
