module Spina
  class User < ApplicationRecord
    include Gravatar
    
    has_secure_password
    has_secure_token :password_reset_token

    validates :name, presence: true
    validates :email, presence: true, format: { with:/\A[^@]+@[^@]+\z/ }
    validates_account_uniqueness_of :email

    def admin?
      admin
    end

    def to_s
      name
    end
    
    def reset_passord!
      regenerate_password_reset_token
      self.password_reset_sent_at = Time.current
      save!
    end

  end
end
