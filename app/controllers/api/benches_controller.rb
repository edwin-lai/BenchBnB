require 'cgi'

class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.in_bounds(params['bounds'])
  end

  def create
    @bench = Bench.new
  end
end
