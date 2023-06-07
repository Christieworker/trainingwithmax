# Exercice: Contrôle d'accès à un site web

Vous travaillez sur un site web qui a certaines restrictions d'accès basées sur l'âge de l'utilisateur et son statut de membre. Les règles sont les suivantes :

    - Si l'utilisateur est âgé de 18 ans ou plus et est membre du site, il doit avoir accès à toutes les sections du site.
    - Si l'utilisateur a moins de 18 ans mais est membre du site, il doit avoir accès à certaines sections du site.
    - Si l'utilisateur a 18 ans ou plus mais n'est pas membre du site, il doit avoir accès à un nombre limité de sections.
    - Si l'utilisateur a moins de 18 ans et n'est pas membre du site, il ne doit pas avoir accès au site.

Écrivez une fonction en JavaScript qui prend en paramètres l'âge de l'utilisateur et son statut de membre, et retourne la section du site à laquelle il a accès. La fonction doit utiliser les opérateurs logiques pour déterminer l'accès.