"""
Hola este es modulo Jorge,
este modulo manejara la creacion y movimiento de Jorge
"""
import pygame
from pygame.locals import (
    K_UP, K_DOWN, K_LEFT, K_RIGHT, RLEACCEL)
import math

from elements.projectile import Projectile


JorgePNG = pygame.image.load('assets/JorgeVJ.png')
JorgePNG_scaled = pygame.transform.scale(JorgePNG, (80, 80))

class Player(pygame.sprite.Sprite):
    def __init__(self, SCREEN_WIDTH, SCREEN_HEIGHT):
        # nos permite invocar métodos o atributos de Sprite
        super(Player, self).__init__()
        self.surf = JorgePNG_scaled
        self.surf.set_colorkey((0, 0, 0), RLEACCEL)
        self.rect = self.surf.get_rect()
        self.screen_width = SCREEN_WIDTH
        self.screen_height = SCREEN_HEIGHT


    def update(self, pressed_keys):
        if pressed_keys[K_UP]:
            self.rect.move_ip(0, -4)
        if pressed_keys[K_DOWN]:
            self.rect.move_ip(0, 4)
        if pressed_keys[K_LEFT]:
            self.rect.move_ip(-4, 0)
        if pressed_keys[K_RIGHT]:
            self.rect.move_ip(4, 0)
        
        if self.rect.left < 0:
            self.rect.left = 0
        if self.rect.right > self.screen_width:
            self.rect.right = self.screen_width
        if self.rect.top < 0:
            self.rect.top = 0
        if self.rect.bottom > self.screen_height:
            self.rect.bottom = self.screen_height

    
    def shoot(self, mouse_pos):
        pass