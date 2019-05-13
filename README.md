# Assembly Style Guide

Generic styles for use in Project Assembly apps.

## Hosted Assets

A demo and hosted versions of the compiled assets are available at https://styles.assembly.education/

## Usage in Ruby on Rails Projects

The Guide comes packaged as a rubygem, include it in your Gemfile with...

    gem 'assembly-style-guide', github: 'assembly-edu/assembly-style-guide'

Then switch your `application.css` to be sass and remove the sprockets directives, replacing them with an assembly import statement...

    @import 'assembly';
    @import 'my_other_file';
