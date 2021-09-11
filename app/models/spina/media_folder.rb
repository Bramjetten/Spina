module Spina
  class MediaFolder < ApplicationRecord
    has_many :images, dependent: :nullify

    validates :name, presence: true
    validates_account_uniqueness_of :name
  end
end