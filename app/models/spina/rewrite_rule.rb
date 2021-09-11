module Spina
  class RewriteRule < ApplicationRecord
    validates_account_uniqueness_of :old_path
  end
end