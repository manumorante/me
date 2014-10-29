###
# Directories
###

set :css_dir, 'css'
set :js_dir, 'js'
set :images_dir, 'img'
set :fonts__dir, 'fonts'
set :relative_links, true
# set :partials_dir, 'layouts/_partials'



###
# Compass
###

compass_config do |config|
  # DEBUG MODE
  config.sass_options = { :debug => true, :debug_info => true, :line_comments => true }

  # BUILD MODE
  # config.output_style = :compressed
  # config.sass_options = { :debug => false, :debug_info => false, :line_comments => false }
end

###
# Build-specific configuration
###

configure :build do
  # activate :minify_javascript
  activate :relative_assets
  # activate :asset_hash
  ignore '/helpers/*'
  ignore '/*.md'

  # You can auto ignore files using the prefix "_". Examples: "_your-file.scss", "_your-file.js" or "_your-file.html.erb"
  # ignore '/css/lib/*'
  ignore '/css/ui/*'
  ignore '/js/ui/*'
end



###
# Helpers
###

require 'source/helpers/application_helper'
helpers ApplicationHelper