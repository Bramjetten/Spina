module Spina
  module Parts
    class Page < Base
      attr_json :page_id, :integer
      
      attr_accessor :options
      
      def resource
        return nil if options.try(:[], :resource).blank?
        Spina::Resource.find_by(name: options[:resource])
      end

      def content
        Spina::Page.find(page_id)
      end
    end
  end
end
