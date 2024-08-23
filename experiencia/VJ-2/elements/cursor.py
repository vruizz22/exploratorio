"""
Hola este es modulo Cursor,
este modulo manejara la creacion y movimiento del cursor
un asset que seguira la posicion del mouse
"""

import pygame

from pygame.locals import RLEACCEL

from os import path

RUTA_CURSOR = path.join("assets", "crosshair.png")

cursorPNG = pygame.image.load('assets/cursor.png')

cursorPNG_scaled = pygame.transform.scale(cursorPNG, (40, 40))

class Cursor(pygame.sprite.Sprite):
    def __init__(self):
        super(Cursor, self).__init__()
        self.surf = cursorPNG_scaled
        self.surf.set_colorkey((0, 0, 0), RLEACCEL)
        self.rect = self.surf.get_rect()

    def update(self, mouse_pos):
        self.rect.center = mouse_pos
    
    def draw(self, screen):
        screen.blit(self.surf, self.rect)