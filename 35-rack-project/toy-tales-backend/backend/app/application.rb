class Application

  def call(env)

    resp = Rack::Response.new
    req = Rack::Request.new(env)

    if req.path.match(/test/) 
      return [200, { 'Content-Type' => 'application/json' }, [ {chicken: "Eric was here"}.to_json ]]

    elsif req.path == "/toys" && req.get?

      return [200, { 'Content-Type' => 'application/json' }, [ Toy.all.to_json ]]


    elsif req.path == "/toys" && req.post?
      hash = JSON.parse(req.body.read)
      # hash: {"name": "Bulbasaur", "image": "", likes: 0}
      new_toy = Toy.create(hash)
      
      return [201, { 'Content-Type' => 'application/json' }, [ new_toy.to_json ]]

    elsif req.path.match(/toys/) && req.delete?
      id = req.path.split("/toys/").last
      # Toy.destroy(id)
      toy = Toy.find(id)
      toy.destroy

      return [200, { 'Content-Type' => 'application/json' }, [ toy.to_json ]]


    else
      resp.write "Path Not Found"

    end

    resp.finish
  end

end
