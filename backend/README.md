# README

- Recreation of project from
  - https://github.com/zayneio/open-flights
  - https://www.youtube.com/watch?v=oyjzi837wME

## Links
- https://guides.rubyonrails.org/v2.3.8/association_basics.html

## Config and Setup

- "gem install rubocop" - linter and formatter

  - "rubocop -a" - auto correct
  - "rubocop -A" - auto correct, more aggressive
  - "rubocop -x" - auto correct only on code layout
  - add '"ruby.rubocop.onSave": true' to settings.json
    - auto format on save

- "gem install fast_jsonapi"

- "rails db:create"

- create models

  - "rails g model Airline name image_url slug"
  - "rails g model Review title description score:integer airline:belongs_to"
    - handles setting up foreign key on table and creates index

- "rails db:migrate"

  - creates new schema file
  - shows schema for all tables in db

- "rails db:seed"

  - add seed data to db/seeds.rb

- create serializers

  - "rails g serializer Airline name image_url slug"
  - "rails g serializer Review title description score airline_id"
    - can control with attributes are exposed inside serializer

- create controllers

  - "rails g controller Pages"
  - "rails g controller api/v1/Airlines"
  - "rails g controller api/v1/Reviews"

## Project Layout

- app
  - controllers
    - api
      - v1
        - airlines_controller.rb
          - index
          - show
          - create
          - update
          - destroy
          - params
          - options
        - reviews_controller.rb
  - models
    - airline.rb
    - review.rb
  - serializers
    - airline_serializer.rb
    - review_serializer.rb

## Routes

- routed through api/v1 namespace
- resources :airlines, param: :slug

  - allows us to use slug instead of id in url
  - allows us to use airline_path(airline) instead of airline_path(airline.slug)

## Controllers

- params function allows us to whitelist and access params from request
- options function allows us to pass in additional resources to serializer

## Testing Inside Rails Console

- "rails c"
- "airline = Airline.first"
- "airline.reviews"
- "AirlineSerializer.new(airline).as_json"

## Testing API

- "rails routes" - lists all routes
- "rails s"
- sample requests found in routes.rest
