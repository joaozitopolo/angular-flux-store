# angular-flux-store
AngularJS 1.x Flux Store implementation - Javascript EC5

see the [docs](https://joaozitopolo.github.io/angular-flux-store/)

Provides an Angular Service with Flux Store pattern.

## How it works

- The service *fStore* allows components and controllers to subscribe listeners for each data update
- All listeners work with isolated data from store. One data doesn't interfer with others controls
- the service *fStore* provides an update() method, with will propagate the data for all listeners

## Main purpose

- Allows the component based development in Angular 1.x
- Allows to use Flux Store pattern with Javascript EC5
- Cares the data storage and updates, without overread angular watchers: the data only is replicated when the update() method is invoked.

## Samples

- The root/componentSample shows how to synchronize components, async calls ($http) and lists
- The root/controllerSample shows how to share and update data with independent controllers

