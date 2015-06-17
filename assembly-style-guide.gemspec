# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name        = "assembly-style-guide"
  s.version     = '0.0.1'
  s.platform    = Gem::Platform::RUBY
  s.authors     = ["Neon Adventures"]
  s.email       = ["developers@neonadventures.com"]
  s.homepage    = "http://github.com/neonadventures/assembly-style-guide"
  s.summary     = "Unified styles for the Assembly platform"
  s.description = "This gem provides CSS and JS for Rails 4+ applications."
  s.license     = "Private"

  s.add_dependency "railties", ">= 4.2.0"

  s.files        = `git ls-files lib`.split("\n")
  s.require_path = 'lib'
end