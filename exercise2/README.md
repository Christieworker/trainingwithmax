#Exercice : Gestion d'un thermostat

Vous travaillez sur un logiciel pour un thermostat intelligent. Le thermostat est destiné à contrôler la température dans une maison en fonction de divers facteurs. Les règles sont les suivantes :

    Si la température actuelle est inférieure à 20 degrés et qu'il fait jour (le soleil est levé), le chauffage doit être allumé.
    Si la température actuelle est supérieure ou égale à 20 degrés, ou s'il fait nuit (le soleil est couché), le chauffage doit être éteint.
    Si la température est inférieure à 20 degrés et qu'il fait nuit, le chauffage doit être allumé, mais seulement si un occupant est à la maison.

Écrivez une fonction JavaScript qui prend en entrée la température actuelle, un booléen indiquant si le soleil est levé, et un autre booléen indiquant si quelqu'un est à la maison. La fonction doit retourner "ON" si le chauffage doit être allumé et "OFF" s'il doit être éteint.