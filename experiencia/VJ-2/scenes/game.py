'''
Hola este es modulo game,
este modulo manejara la escena donde ocurre nuestro juego
'''

import pygame

from pygame.locals import (K_ESCAPE, KEYDOWN, QUIT)

from elements.jorge import Player

from elements.bug import Enemy

from os import path


def gameLoop():
    ''' iniciamos los modulos de pygame'''

    pygame.init()

    RUTA_BACKGROUND = path.join("assets", "pixelBackground.jpg")
    RUTA_GAME_OVER = path.join("assets", "game_over.jpg")
    
    ''' Creamos y editamos la ventana de pygame (escena) '''
    ''' 1.-definir el tamaño de la ventana'''
    SCREEN_WIDTH = 1792
    SCREEN_HEIGHT = 1024

    ''' 2.- crear el objeto pantalla'''
    screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
    background_image = pygame.image.load(
        RUTA_BACKGROUND).convert()
    game_over_image = pygame.image.load(RUTA_GAME_OVER).convert()

    ''' Preparamos el gameloop '''
    ''' 1.- creamos el reloj del juego'''

    clock = pygame.time.Clock()
    ''' 2.- generador de enemigos'''

    ADDENEMY = pygame.USEREVENT + 1
    pygame.time.set_timer(ADDENEMY, 600)

    ''' 3.- creamos la instancia de jugador'''
    player = Player(SCREEN_WIDTH, SCREEN_HEIGHT)

    ''' 4.- contenedores de enemigos y jugador'''
    enemies = pygame.sprite.Group()
    all_sprites = pygame.sprite.Group()
    all_sprites.add(player)

    ''' hora de hacer el gameloop '''
    # variable booleana para manejar el loop
    running = True

    # loop principal del juego

    while running:

        screen.blit(background_image, [0, 0])

        for entity in all_sprites:
            screen.blit(entity.surf, entity.rect)

        for projectile in player.projectiles:
            screen.blit(projectile.surf, projectile.rect)

        pressed_keys = pygame.key.get_pressed()
        player.update(pressed_keys)
        enemies.update()

        if pygame.sprite.spritecollideany(player, enemies):
            player.kill()
            # Pantalla de game over
            screen.blit(game_over_image, [0, 0])
            pygame.display.flip()
            pygame.time.wait(3000)
            running = False

        pygame.display.flip()
        
        # Si un proyectil golpea a un enemigo, el proyectil y el enemigo mueren
        pygame.sprite.groupcollide(player.projectiles, enemies, True, True)

        # iteramos sobre cada evento en la cola
        for event in pygame.event.get():
            # se presiono una tecla?
            if event.type == KEYDOWN:
                # era la tecla de escape? -> entonces terminamos
                if event.key == K_ESCAPE:
                    running = False

            # fue un click al cierre de la ventana? -> entonces terminamos
            elif event.type == QUIT:
                running = False

            elif event.type == ADDENEMY:
                new_enemy = Enemy(SCREEN_WIDTH, SCREEN_HEIGHT)
                enemies.add(new_enemy)
                all_sprites.add(new_enemy)

            # Dispara un proyectil si el usuario hace click
            elif event.type == pygame.MOUSEBUTTONDOWN:
                player.shoot(pygame.mouse.get_pos())

        clock.tick(40)
