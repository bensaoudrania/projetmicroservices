# projetmicroservices
#application gestion des livres realisée avec Graphql et grpc


                **********Documentation du projet de gestion de livres (Microservices avec GraphQL et gRPC)**********
                
                
                
     *****Introduction:*****
Ce projet vise à développer un système de gestion de livres utilisant une architecture basée sur des microservices et des technologies telles que GraphQL et gRPC. L'objectif principal du projet est de fournir une API permettant de créer, lire, mettre à jour et supprimer des livres, en utilisant des microservices indépendants pour gérer différentes fonctionnalités.

     *****Architecture:*****
L'architecture du projet est basée sur une approche de microservices, où chaque microservice est responsable d'une fonctionnalité spécifique. Voici les principaux composants de l'architecture :

   -Microservices:
   
Livre Service: Ce microservice gère les opérations liées aux livres, telles que la création, la lecture, la mise à jour et la suppression de livres. Il expose une API GraphQL pour interagir avec les données des livres.

   -Communication et intégration:
   
Les microservices communiquent entre eux en utilisant le protocole gRPC. Le microservice Livre Service expose un endpoint gRPC pour fournir les fonctionnalités liées aux livres.

     *****Schémas de données:*****
Le schéma de données du projet définit les structures et les types de données utilisés par les microservices. Voici les principaux types de données utilisés dans le projet :

   -Livre:
   
id: Identifiant unique du livre (type: Int)
titre: Titre du livre (type: String)
auteur: Nom de l'auteur du livre (type: String)
annee: Année de publication du livre (type: Int)

     *****Interactions entre les microservices:*****
Le microservice Livre Service expose une API GraphQL pour interagir avec les données des livres. Voici les opérations principales disponibles :

   -Query:

livres: Récupère la liste des livres existants.

   -Mutation:

-ajouterLivre: Ajoute un nouveau livre.

     *****Fonctionnalités implémentées:*****
Le projet met en œuvre les fonctionnalités suivantes :

-Ajout d'un nouveau livre à la base de données.
-Récupération de la liste complète des livres.


     *****Conclusion:*****
La documentation ci-dessus fournit une vue d'ensemble du projet de gestion de livres basé sur des microservices avec GraphQL et gRPC. Elle décrit l'architecture du système, les schémas de données, les interactions entre les microservices et les fonctionnalités implémentées. Cette documentation servira de référence pour comprendre et travailler sur le projet.
