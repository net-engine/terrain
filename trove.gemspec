# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)

require 'trove/version'

Gem::Specification.new do |spec|
  spec.name          = "trove"
  spec.version       = Trove::VERSION
  spec.authors       = ["NetEngine"]
  spec.email         = ["rowan@netengine.com.au"]
  spec.description   = "A collection of structural sass & coffeescript."
  spec.summary       = "A collection of structural sass & coffeescript."
  spec.homepage      = "http://github.com/net-engine/trove"
  spec.license       = "MIT"

  spec.files = Dir["{app,config,db,lib}/**/*"] + ["MIT-LICENSE", "Rakefile", "README.md"]
  spec.files = Dir["{lib,vendor}/**/*"] + ["MIT-LICENSE", "README.md"]
  spec.files         = `git ls-files`.split($/)
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ["lib"]

  spec.add_dependency 'compass-rails'
  spec.add_dependency 'sass-rails'
  spec.add_dependency 'coffee-rails'
end

