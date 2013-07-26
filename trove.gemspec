# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)

require 'trove/version'

Gem::Specification.new do |s|
  s.name          = "trove"
  s.version       = Trove::VERSION
  s.authors       = ["NetEngine"]
  s.email         = ["rowan@netengine.com.au"]
  s.description   = "A collection of structural sass & coffeescript."
  s.summary       = "A collection of structural sass & coffeescript."
  s.homepage      = "http://github.com/net-engine/trove"
  s.license       = "MIT"
  s.files         = Dir["{lib,vendor}/**/*"] + ["MIT-LICENSE", "README.md"]
  s.test_files    = s.files.grep(%r{^(test|spec|features)/})
  s.require_paths = ["lib"]
end

