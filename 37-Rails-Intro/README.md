# Rails Intro

### LGs:
- [ ] Create a new Rails application
- [ ] Generate a model and a controller
- [ ] Create routes actions/methods for a RESTful controller
- [ ] Create views

---

#### Create a new Rails application
* what is `rails` and why `rails`?
    * Rails is a web application development framework written in the Ruby programming language. It is designed to make programming web applications easier by making assumptions about what every developer needs to get started. It allows you to write less code while accomplishing more than many other languages and frameworks.Rails was created with the goal of increasing programmers' happiness and productivity levels. 
* Install rails: gem install rails
```
rails new blog_app
```
* Discuss all the files and folders
* `--skip-javascript`
* byebug
* rails s
* rails s -p 3001
* rails c

**TASK:** Create new rails app

#### Generate a model and a controller
* Domain selection
* Model and migration generation:
    * `rails g model Dog name breed age:integer`
* Controller and methods
    * `rails g controller dogs`
    * `rails g controller dogs index show`

#### Create routes actions/methods for a RESTful controller
``` rails
    get ‘/dogs’, to: ‘dogs#index’
```

#### Create views
* Index page