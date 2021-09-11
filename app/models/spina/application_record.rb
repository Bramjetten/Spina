module Spina
  class ApplicationRecord < ActiveRecord::Base
    self.abstract_class = true
    
    # Remove Spina namespace from partial paths
    def to_partial_path
      super.gsub(/\Aspina\//, "")
    end
    
    class << self
      def validates_account_uniqueness_of(fields, args = {})
        validation_args = args.clone
        
        if column_names.include? "account_id"
          if args[:scope]
            validation_args[:scope] = Array(args[:scope]) << "account_id" 
          else
            validation_args[:scope] = "account_id"
          end
        end
  
        validates_uniqueness_of(fields, validation_args)
      end
    end
    
  end
end