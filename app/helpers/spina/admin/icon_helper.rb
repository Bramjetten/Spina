module Spina::Admin
	module IconHelper
		
		def icon(name, css: "")
			case name.to_s
			when "chat-alt"
				content_tag(:svg, heroicons_small.merge(class: css)) do
					'<path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />'.html_safe
				end
			when "plus"
				content_tag(:svg, heroicons_small.merge(class: css)) do
					'<path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />'.html_safe
				end
			when "reorder"
				content_tag(:svg, heroicons_small.merge(class: css)) do
					'<path d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />'.html_safe
				end
			when "grip"			
				content_tag(:svg, fontawesome.merge(class: css)) do
					'<path d="M496 288H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-128H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z"/>'.html_safe
				end
			when "external-link"
				content_tag(:svg, heroicons_small.merge(class: css)) do
					'<path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" /><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />'.html_safe
				end
			when 'upload'
				content_tag(:svg, heroicons_small.merge(class: css)) do
					'<path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />'.html_safe
				end
			when 'collection'
				content_tag(:svg, heroicons_small.merge(class: css)) do
					'<path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />'.html_safe
				end
			when 'folder'
				content_tag(:svg, heroicons_small.merge(class: css)) do
					'<path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />'.html_safe
				end
			when 'trash'
				content_tag(:svg, heroicons_medium.merge(class: css)) do
					'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />'.html_safe
				end
			when 'pencil'
				content_tag(:svg, heroicons_small.merge(class: css)) do
					'<path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />'.html_safe
				end
			end
		end
		
		private
		
			def fontawesome
				{viewBox: "0 0 512 512", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg"}
			end
		
			def heroicons_small
				{viewBox: "0 0 20 20", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg"}
			end
			
			def heroicons_medium
				{viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", xmlns: "http://www.w3.org/2000/svg"}
			end

	end
end