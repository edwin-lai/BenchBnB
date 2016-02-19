json.array! @benches do |bench|
  json.bench bench, :description, :lat, :lng
end
