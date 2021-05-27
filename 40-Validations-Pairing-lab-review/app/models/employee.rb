class Employee < ApplicationRecord
    belongs_to :dog

    def name
        "#{self.first_name} #{self.last_name}"
    end

    validates :title, :alias, uniqueness: true
    #validates :alias, uniqueness: true
    # validates :img_url, presence: true
    validates :img_url, presence: {message: "Please add image URL to create an employee"}
    validates :first_name, length: { minimum: 2 }
end
