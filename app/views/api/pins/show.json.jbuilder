json.pin do 
    json.extract! @pin, :id, :title, :user_id, :board_id, :description, :user
    json.image_url url_for(@pin.photo)
end